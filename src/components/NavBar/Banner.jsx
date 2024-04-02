import React from "react";
import "./Banner.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Banner() {
  // State to detect if the user scrolled or not
  const [isScrolled, setIsScrolled] = useState(false);
  // Framer Motion animation variants
  const variants = {
    visible: {
      opacity: 1,
      translateY: 0, //Adjust for downwards animation
      transition: {
        duration: 0.5,
      },
    },
    hidden: {
      opacity: 0,
      translateY: -100, //Adjust for upwards animation
      transition: {
        duration: 0.5,
      },
    },
  };
  // Function to detect if the user scrolled nested in a useEffect hook
  useEffect(() => {
    window.addEventListener(
      "scroll",
      () => {
        if (window.scrollY > 0) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      },
      [isScrolled]
    );
  });
  return (
    <>
        <motion.div
          className="banner"
          initial="hidden"
          variants={variants}
          animate={isScrolled ? "visible" : "hidden"}
          >
      <span className="banner-text">MiState</span>
      </motion.div>
    </>
  );
}
