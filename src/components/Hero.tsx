// Header component.

import { assets } from "../assets/assets";

function Hero() {
  return (
    <main className="flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20">
      {/* Left */}
      <div className="md:w-1/2 flex flex-col justify-center items-start gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]">
        <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-semibold leading-tight">
          Book Appointment <br /> With Trusted Doctors
        </h1>

        <div className="flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light">
          <img
            src={assets.group_profiles}
            alt="client grop icons"
            className="w-28"
          />
          <p>
            Simply browse through our extensive list of trusted doctors,{" "}
            <br className="hidden sm:block" />
            schedule your appointment hassle-free
          </p>
        </div>

        <a
          href="#speciality"
          className="bg-white text-gray-600 flex items-center gap-2 px-8 py-3 rounded-full text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300"
        >
          Book Appointment{" "}
          <img src={assets.arrow_icon} alt="right arrow icon" className="w-3" />
        </a>
      </div>

      {/* Right */}
      <div className="md:w-1/2 relative">
        <img
          src={assets.header_img}
          alt="header image"
          className="w-full md:absolute bottom-0 h-auto rounded-lg"
        />
      </div>
    </main>
  );
}

export default Hero;

