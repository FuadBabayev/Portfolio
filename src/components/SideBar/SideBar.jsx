import { useState, useEffect } from "react";
import Links from "./Links";
import ToggleButton from "./ToggleButton";
import "./sideBar.scss";
import { motion } from "framer-motion";

const variants = {
  open: {
    clipPath: "circle(900px at 50px 50px)",
    transition: { type: "spring", stiffness: 20 },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: { delay: 0.5, type: "spring", stiffness: 400, damping: 40 },
  },
};

function SideBar() {
  const [open, setOpen] = useState(false);

  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowButton(true);
    }, 4700); // Delay in milliseconds (2 seconds)
    return () => clearTimeout(timeout); // Clean up
  }, []);

  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      {showButton && (
        <motion.div className="bg" variants={variants}>
          <Links />
        </motion.div>
      )}
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
}

export default SideBar;
