// Related doctors component.

import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

type Doctor = {
  _id: string;
  name: string;
  image: string;
  speciality: string;
  fees: number;
  experience: string;
  degree: string;
  about: string;
  address: {
    line1: string;
    line2: string;
  };
};

function RelatedDoctors({
  docId,
  speciality,
}: {
  docId: string;
  speciality: string;
}) {
  const navigate = useNavigate();

  const appContext = useContext(AppContext);
  if (!appContext) {
    throw new Error("AppContext is undefined");
  }
  const { doctors } = appContext;

  const [relDoc, setRelDoc] = useState<Doctor[]>([]);

  useEffect(() => {
    if (doctors.length > 0 && speciality) {
      const doctorsData = doctors.filter(
        (doc) => doc.speciality === speciality && doc._id !== docId,
      );
      setRelDoc(doctorsData);
    }
  }, [doctors, speciality, docId]);

  return (
    <section className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
      <h2 className="text-3xl font-medium">Related Doctors</h2>
      <p className="text-center text-sm">
        Simply browse through our extensive list of trusted doctors.
      </p>

      <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0">
        {relDoc.slice(0, 5)?.map((doctor: Doctor, index: number) => (
          <div
            onClick={() => {
              navigate(`/appointment/${doctor._id}`);
              scrollTo(0, 0);
            }}
            key={index}
            className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
          >
            <img src={doctor.image} alt={doctor.name} className="bg-blue-50" />
            <div className="p-4">
              <div className="flex items-center gap-2 text-sm text-center text-green-500">
                <p className="w-2 h-2 rounded-full bg-green-500"></p>
                <p>Available</p>
              </div>
              <p className="text-gray-900 text-lg font-medium">{doctor.name}</p>
              <p className="text-gray-600 text-sm">{doctor.speciality}</p>
            </div>
          </div>
        ))}
      </div>

      {/* <button
        onClick={() => {
          navigate("/doctor");
          scrollTo(0, 0);
        }}
        className="bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10"
      >
        more
      </button> */}
    </section>
  );
}

export default RelatedDoctors;

