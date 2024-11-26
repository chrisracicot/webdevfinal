import React from "react";
import { motion } from "framer-motion";

const Introduction = () => (
  <section id="introduction" className="bg-gray-100 py-16">
    <motion.div
      className="container mx-auto text-center"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h2>
      <p className="text-lg text-gray-700">
        Hi, I'm Manminder Singh. I specialize in building modern web
        applications and exploring innovative technologies.
      </p>
    </motion.div>
  </section>
);

export default Introduction;
