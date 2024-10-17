// My profile page.

import { useState } from "react";
import { assets } from "../assets/assets";

type UserProfile = {
  name: string;
  image: string;
  email: string;
  phone: string;
  address: {
    line1: string;
    line2: string;
  };
  gender: "Male" | "Female";
  dob: string;
};

function MyProfilePage() {
  const [userData, setUserData] = useState<UserProfile>({
    name: "Edward Vincent",
    image: assets.profile_pic,
    email: "richardjameswap@gmail.com",
    phone: "+1  123 456 7890",
    address: {
      line1: "57th Cross, Richmond",
      line2: "Circle, Church Road, London",
    },
    gender: "Male",
    dob: "2000-01-20",
  });

  const [isEdit, setIsEdit] = useState<boolean>(false);

  return (
    <div className="flex flex-col max-w-lg gap-2 text-sm">
      <img
        src={userData.image}
        alt="user profile pic"
        className="w-36 rounded"
      />

      {/* User's name section */}
      {isEdit ? (
        <input
          type="text"
          value={userData.name}
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
          className="bg-gray-50 text-3xl font-medium max-w-60 mt-4"
        />
      ) : (
        <p className="text-3xl text-neutral-800 font-medium mt-4">
          {userData.name}
        </p>
      )}

      <hr className="bg-zinc-400 h-[1px] border-none" />

      <div>
        <p className="text-neutral-500 underline mt-3">CONTACT INFORMATION</p>

        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          {/* User's email section */}
          <p className="font-medium">Email id:</p>
          <p className="text-blue-500">{userData.email}</p>

          {/* User's phone number section */}
          <p className="font-medium">Phone:</p>
          {isEdit ? (
            <input
              type="text"
              value={userData.phone}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, phone: e.target.value }))
              }
              className="bg-gray-100 max-w-52"
            />
          ) : (
            <p className="text-blue-400">{userData.phone}</p>
          )}

          {/* User's address section */}
          <p className="font-medium">Address:</p>
          {isEdit ? (
            <p>
              <input
                type="text"
                value={userData.address.line1}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line1: e.target.value },
                  }))
                }
                className="bg-gray-50"
              />
              <br />
              <input
                type="text"
                value={userData.address.line2}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line2: e.target.value },
                  }))
                }
                className="bg-gray-50"
              />
            </p>
          ) : (
            <p className="text-gray-500">
              {userData.address.line1}
              <br />
              {userData.address.line2}
            </p>
          )}
        </div>
      </div>

      <div>
        <p className="text-neutral-500 underline mt-3">BASIC INFORMATION</p>

        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          {/* User's gender section */}
          <p className="font-medium">Gender:</p>
          {isEdit ? (
            <select
              value={userData.gender}
              onChange={(e) =>
                setUserData((prev) => ({
                  ...prev,
                  gender: e.target.value as "Male" | "Female",
                }))
              }
              className="max-w-20 bg-gray-100"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          ) : (
            <p className="text-gray-400">{userData.gender}</p>
          )}

          {/* User's Date of birth section */}
          <p className="font-medium">Birthday:</p>
          {isEdit ? (
            <input
              type="date"
              value={userData.dob}
              onChange={(e) =>
                setUserData((prev) => ({
                  ...prev,
                  dob: e.target.value,
                }))
              }
              className="max-w-28 bg-gray-100"
            />
          ) : (
            <p className="text-gray-400">{userData.dob}</p>
          )}
        </div>
      </div>

      <div className="mt-10">
        {isEdit ? (
          <button
            className="border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all"
            onClick={() => setIsEdit(false)}
          >
            Save information
          </button>
        ) : (
          <button
            className="border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all"
            onClick={() => setIsEdit(true)}
          >
            Edit your profile
          </button>
        )}
      </div>
    </div>
  );
}

export default MyProfilePage;

