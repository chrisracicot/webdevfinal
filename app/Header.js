import React from "react";

const Header = () => (
  <header className="bg-gray-800 text-white py-4 shadow-md">
    <div className="container mx-auto flex justify-between items-center px-4">
      <h1 className="text-2xl font-bold">Chris Racicot's Portfolio</h1>
      <nav>
        <a
          href="#introduction"
          className="mx-4 hover:text-yellow-500 transition"
        >
          Home
        </a>
        <a
          href="#certificates"
          className="mx-4 hover:text-yellow-500 transition"
        >
          Certificates
        </a>
        <a href="#web-apps" className="mx-4 hover:text-yellow-500 transition">
          Web Apps
        </a>
      </nav>
    </div>
  </header>
);

export default Header;
