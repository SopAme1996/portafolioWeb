import React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import { menuItems } from "../../Data/Menu";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const variantsMenuActive = {
  open: {
    y: 0,
    opacity: 1,
    display: "flex",
    transition: {
      y: { stiffness: 1000, velocity: -150 },
    },
  },
  closed: {
    display: "none",
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const Navigation = () => {
  const img = require.context("../../assets/img", true);

  return (
    <>
      <motion.ul variants={variants}>
        <motion.img
          variants={variantsMenuActive}
          src={img("./logo.svg")}
          className="logo-sidebar"
        />
        {menuItems.map((item, key) => (
          <MenuItem
            i={key}
            key={key}
            variantsMenuActive={variantsMenuActive}
            item={item}
          />
        ))}
      </motion.ul>
    </>
  );
};
