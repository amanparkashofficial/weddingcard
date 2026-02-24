import { motion } from "framer-motion";
import { useState } from "react";
import om from "../assets/Om.png";

export default function OpeningScreen({ openInvite }) {
  const [startAnimation, setStartAnimation] = useState(false);

  const handleClick = () => {
    setStartAnimation(true);

    setTimeout(() => {
      openInvite();
    }, 1800);
  };

  return (
    <div className="opening-container">
      {/* Om Logo */}
      {!startAnimation && (
        <div className="om-wrapper">
          <motion.img
            src={om}
            alt="Om"
            className="om-logo"
            onClick={handleClick}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2 }}
            whileTap={{ scale: 0.95 }}
          />
          {/* Tap to open text */}
          <motion.p
            className="tap-text"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            Tap to open
          </motion.p>
        </div>
      )}

      {/* Welcome Text (center seam) */}
      {startAnimation && (
        <motion.h1
          className="welcome-text"
          initial={{ opacity: 0, letterSpacing: "10px" }}
          animate={{ opacity: 1, letterSpacing: "4px" }}
          transition={{ duration: 0.8 }}
        >
          WELCOME
        </motion.h1>
      )}

      {/* Split Panels */}
      {startAnimation && (
        <>
          <motion.div
            className="panel left"
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
          />
          <motion.div
            className="panel right"
            initial={{ x: 0 }}
            animate={{ x: "100%" }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
          />
        </>
      )}
    </div>
  );
}