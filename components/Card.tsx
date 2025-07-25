import React from "react";
import { motion } from "framer-motion";

export default function Card({ icon, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        type: "tween",
        ease: [0.25, 0.46, 0.45, 0.94], 
        duration: 0.6,
      }}
      viewport={{ once: true, amount: 0.3 }}
      className=" bg-gradient-to-br  to-gray-800 border border-gray-700 rounded-lg p-6 shadow-md hover:shadow-xl transition-opacity duration-300 opacity-90"
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </motion.div>
  );
}
