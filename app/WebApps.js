import React from "react";
import { motion } from "framer-motion";

const WebApps = () => {
  const apps = [
    { id: 1, name: "Waste Management App", link: "#" },
    { id: 2, name: "Soundscape Web App", link: "#" },
    { id: 3, name: "Spotify-like Music App", link: "#" },
  ];

  return (
    <section id="web-apps" className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          My Best Web Apps
        </h2>
        <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {apps.map((app) => (
            <motion.li
              key={app.id}
              className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition"
              whileHover={{ scale: 1.05 }}
            >
              <a
                href={app.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg text-blue-500 font-semibold hover:underline"
              >
                {app.name}
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default WebApps;
