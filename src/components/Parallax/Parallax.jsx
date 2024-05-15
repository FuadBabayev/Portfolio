import { useRef } from "react";
import "./parallax.scss";
import { motion, useScroll, useTransform } from "framer-motion";

function Parallax() {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "500%"]);

  return (
    <div
      ref={ref}
      className="parallax"
      style={{ background: "linear-gradient(180deg, #111132, #505064)" }}
    >
      <motion.h1 style={{ y: yText }}>My Projects</motion.h1>
      <motion.div className="mountains"></motion.div>
      <motion.div style={{ y: yBg }} className="planets"></motion.div>
      <motion.div style={{ x: yBg }} className="stars"></motion.div>
    </div>
  );
}

export default Parallax;
