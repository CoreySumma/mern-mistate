import React from "react";
import { motion } from "framer-motion";
import "./NavBar.css";
import * as userService from "../../utilities/users-service";

export default function NavBarItems({ isToggled, setUser }) {
  // Function for log out link in the navbar
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }
  // Array of navbar items
  const items = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "New Entry",
      link: "/entries/new",
    },
    {
      name: "My Week",
      link: "/entries",
    },
    {
      name: "Everyone Else",
      link: "/everyone",
    },
    {
      name: "Logout",
      link: "",
      onClick: handleLogOut,
    },
  ];
// Variants for Framer Motion animations
  const navList = {
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.07,
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const navItem = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    hidden: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
  };

  return (
    <>
      <motion.ul
        className="navList"
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={navList}
      >
        {items.map((item) => (
          <motion.li className="nav-item" variants={navItem} key={item.name}>
            <a
              href={item.link}
              onClick={item.onClick}
              rel="noopener noreferrer"
            >
              {item.name}
            </a>
          </motion.li>
        ))}
      </motion.ul>
    </>
  );
}
