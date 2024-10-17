// Footer component.

import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

function Footer() {
  return (
    <footer className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* Left srction */}
        <div>
          <img src={assets.logo} alt="logo" className="mb-5 w-40" />
          <p className="text-gray-600 w-full md:w-2/3 leading-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        {/* Center srction */}
        <nav>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <NavLink to="/">
              <li>Home</li>
            </NavLink>

            <NavLink to="/about">
              <li>About us</li>
            </NavLink>

            <NavLink to="/contact">
              <li>Contact us</li>
            </NavLink>

            <NavLink to="/privacy-policy">
              <li>Privacy policy</li>
            </NavLink>
          </ul>
        </nav>

        {/* Right srction */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>(+66)98-287-5561</li>
            <li>panat.yuki.business@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Copy right */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright © 2024 Created by Panat Charoenchokdilok - All Right
          Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;

