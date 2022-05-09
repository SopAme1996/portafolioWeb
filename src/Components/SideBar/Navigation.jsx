import React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";

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
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const Navigation = ({ toggle }) => {
  const img = require.context("../../assets/img", true);

  const itemIds = [0, 1, 2, 3, 4];
  return (
    <>
      <motion.ul variants={variants}>
        <motion.img
          variants={variantsMenuActive}
          src={img("./logo.svg")}
          className="logo-sidebar"
        />
        {itemIds.map((i) => (
          <MenuItem
            i={i}
            key={i}
            liToggle={toggle}
            variantsMenuActive={variantsMenuActive}
          />
        ))}
      </motion.ul>
    </>
  );
};
