import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const categories = [
  {
    title: "TECHNICAL",
    description:
      "Technical events are a showcase of innovation and creativity in the field of technology.",
    link: "/technical",
  },
  {
    title: "NON TECHNICAL",
    description:
      "Non-technical events are a showcase of creativity and talent in various fields such as art, music, and literature.",
    link: "/non-technical",
  },
  {
    title: "CULTURAL",
    description:
      "Cultural events are a celebration of art, dance, and creativity.",
    link: "/cultural",
  },
];

// Parent container animation for staggered effect
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

// Individual letter animation
const letterVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 500, damping: 15 },
  },
};

// Arrow animation for hover
const arrowAnimation = {
  hidden: { x: 0 },
  hover: { x: 10, transition: { type: "spring", stiffness: 300 } },
};

const Events = () => {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      {/* Enhanced Heading Animation triggered only when visible */}
      <motion.div
        className="text-4xl md:text-6xl font-bold text-center mb-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }} // Ensures it animates once when visible
      >
        {"EVENTS CATEGORIES".split("").map((letter, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
            className="inline-block"
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.div>

      {/* Event Categories */}
      <div className="w-full max-w-4xl">
        {categories.map((category, index) => (
          <Link
            to={category.link}
            key={index}
            className="group block relative mb-8 border-b border-gray-600 pb-4"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex justify-between items-center"
            >
              <div>
                <motion.h2
                  className="text-3xl md:text-4xl font-extrabold"
                  whileHover={{ scale: 1.05, color: "#ff0000" }}
                >
                  {category.title}
                </motion.h2>
                <p className="text-gray-400 mt-2">{category.description}</p>
              </div>
              <motion.div
                className="text-xl md:text-2xl font-bold text-gray-400 group-hover:text-red-500"
                variants={arrowAnimation}
                initial="hidden"
                whileHover="hover"
              >
                &#8594;
              </motion.div>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Events;
