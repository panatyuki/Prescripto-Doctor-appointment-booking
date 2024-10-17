// Appointment page.

// Hooks.
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets";

// Component.
import RelatedDoctors from "../components/RelatedDoctors";

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

type TimeSlot = {
  datetime: Date;
  time: string;
};

function AppointmentPage() {
  const { docId } = useParams();

  const appContext = useContext(AppContext);
  if (!appContext) {
    throw new Error("AppContext is undefined");
  }
  const { doctors, currencySymbol } = appContext;

  const dayOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  const [docInfo, setDocInfo] = useState<Doctor | null>(null);
  const [docSlots, setDocSlots] = useState<TimeSlot[][]>([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

  useEffect(() => {
    const fetchDoctorInfo = async () => {
      const docInfo = doctors.find((doc) => doc._id === docId);
      setDocInfo(docInfo || null);
    };
    fetchDoctorInfo();
  }, [doctors, docId]);

  useEffect(() => {
    const getAvailableSlot = async () => {
      setDocSlots([]);

      // getting current date.
      let today = new Date();

      for (let i = 0; i < 7; i++) {
        //getting date with index
        let currentDate = new Date(today);
        currentDate.setDate(today.getDate() + i);

        //setting end time of the date with index
        let endTime = new Date(today);
        endTime.setDate(today.getDate() + i);
        endTime.setHours(21, 0, 0, 0);

        //setting hour
        if (today.getDate() === currentDate.getDate()) {
          currentDate.setHours(
            currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10,
          );
          currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
        } else {
          currentDate.setHours(10);
          currentDate.setMinutes(0);
        }

        let timeSlots = [];

        while (currentDate < endTime) {
          let formattedTime = currentDate.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          });

          //Add slot to array
          timeSlots.push({
            datetime: new Date(currentDate),
            time: formattedTime,
          });

          //Increment time by 30 minutes
          currentDate.setMinutes(currentDate.getMinutes() + 30);
        }

        setDocSlots((prev) => [...prev, timeSlots]);
      }
    };

    getAvailableSlot();
  }, [docInfo]);

  useEffect(() => {
    console.log(docSlots);
  }, [docSlots]);

  return (
    docInfo && (
      <div>
        {/* Doctor info */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div>
            <img
              src={docInfo?.image}
              alt={docInfo?.name}
              className="bg-primary w-full sm:max-w-72 rounded-lg"
            />
          </div>

          <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
            {/* Name, Degree, Experience */}
            <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
              {docInfo.name}{" "}
              <img
                className="w-5"
                src={assets.verified_icon}
                alt={assets.verified_icon}
              />
            </p>

            <div className="flex items-center gap-2 text-gray-600 text-sm mt-1">
              <p>
                {docInfo.degree} - {docInfo.speciality}
              </p>
              <button className="py-0.5 px-2 border text-xs rounded-full">
                {docInfo.experience}
              </button>
            </div>

            {/* About */}
            <div>
              <p className="flex items-center mt-3 gap-1 text-sm font-medium text-gray-900">
                About <img src={assets.info_icon} />
              </p>
              <p className="text-sm text-gray-500 max-w-[700px] mt-1">
                {docInfo.about}
              </p>
            </div>

            <p className="text-gray-500 mt-4 font-medium">
              Appointment fee:{" "}
              <span className="text-gray-600">
                {currencySymbol}
                {docInfo.fees}
              </span>
            </p>
          </div>
        </div>

        {/* Booking slot */}
        <div className="sm:ml-72 sm:pl-14 mt-4 font-medium text-gray-700">
          <p>Booking slots</p>

          <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4">
            {docSlots.length &&
              docSlots?.map((item, index) => (
                <div
                  onClick={() => setSlotIndex(index)}
                  key={index}
                  className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${
                    slotIndex === index
                      ? "bg-primary text-white"
                      : "border border-gray-200"
                  }`}
                >
                  <p>{item[0] && dayOfWeek[item[0].datetime.getDay()]}</p>
                  <p>{item[0] && item[0].datetime.getDate()}</p>
                </div>
              ))}
          </div>

          <div className="flex items-center gap-3 w-full overflow-x-scroll mt-4">
            {docSlots.length &&
              docSlots[slotIndex].map((item, index) => (
                <p
                  onClick={() => setSlotTime(item.time)}
                  key={index}
                  className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${
                    item.time === slotTime
                      ? "bg-primary text-white"
                      : "border border-gray-300 text-gray-400"
                  }`}
                >
                  {item.time.toLowerCase()}
                </p>
              ))}
          </div>

          <button className="bg-primary text-white text-sm font-light px-14 py-3 rounded-full my-6">
            Book an appointment
          </button>
        </div>

        {/* Listing related doctors */}
        <RelatedDoctors docId={docId ?? ""} speciality={docInfo.speciality} />
      </div>
    )
  );
}

export default AppointmentPage;

