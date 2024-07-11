import React from "react";
import styles from "./bubble.module.css";

const BubbleText = () => {
  return (
    <h2 className="text-center md:text-7xl text-3xl font-thin text-indigo-300">
      {"Full Stack Developer".split("").map((child, idx) => (
        <span className={styles.hoverText} key={idx}>
          {child}
        </span>
      ))}
    </h2>
  );
};

export default BubbleText;