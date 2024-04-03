import React, { useState } from "react";
import NavbarItems from "./NavBarItems";
import { motion, AnimatePresence } from "framer-motion";
import "./NavBar.css";

export default function Navbar(user, setUser) {
  const [isToggled, setToggle] = useState(false);


  const navContainer = {
    visible: {
      //x: 0,
      opacity: 1,
      transition: {
        x: { velocity: 100 },
        duration: 0.3
      }
    },
    hidden: {
      //x: -250,
      opacity: 0,
      transition: {
        x: { velocity: 100 },
        duration: 0.2
      }
    }
  };

  return (
    <>
      <button className="btn" onClick={() => setToggle(!isToggled)}>
        =
      </button>
      <AnimatePresence>
        {isToggled && (
          <motion.div
            className="navbar"
            initial="hidden"
            animate={isToggled ? "visible" : "hidden"}
            exit="hidden"
            variants={navContainer}
          >
            <NavbarItems isToggled={isToggled} setUser={setUser}/>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};