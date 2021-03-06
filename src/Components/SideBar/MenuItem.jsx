import React from "react";
import { motion } from "framer-motion";
import { Link, animateScroll as scroll } from "react-scroll";

export const MenuItem = ({ i, variantsMenuActive, item }) => {
  const style = { border: `2px solid white` };
  return (
    <motion.li
      variants={variantsMenuActive}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
    >
      <Link
        activeClass="active"
        to={`${item}`}
        spy={true}
        smooth={true}
        duration={100}
        isDynamic={true}
        spyThrottle={500}
        className="link-menu"
      >
        <div className="icon-placeholder" style={style}></div>
        <div className="text-placeholder" style={style}>
          {item}
        </div>
      </Link>
    </motion.li>
  );
};
