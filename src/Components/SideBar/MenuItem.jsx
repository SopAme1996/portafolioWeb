import React from "react";
import { motion } from "framer-motion";

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

export const MenuItem = ({ i, liToggle, variantsMenuActive }) => {
  const style = { border: `2px solid ${colors[i]}` };
  return (
    <motion.li
      variants={variantsMenuActive}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => liToggle()}
    >
      <div className="icon-placeholder" style={style} />
      <div className="text-placeholder" style={style} />
    </motion.li>
  );
};
