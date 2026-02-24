import { motion } from "framer-motion";
import rangoli from "../assets/HaldiDesign1.jpeg";
import floral from "../assets/floral.png";

export default function Haldi() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="haldi" className="wedding-section">
      <motion.div
        className="wedding-card"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* Floral Decoration */}
        <div className="floral-deco">
          <img src={floral} alt="Floral Decoration" />
        </div>

        {/* Top Border */}
        <div className="card-border-top"></div>

        {/* Rotating Rangoli */}
        <div className="rangoli-wrapper">
          <motion.img
            src={rangoli}
            className="rangoli"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
          />
        </div>

        {/* Content */}
        <motion.div
          className="card-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.h1 className="card-heading" variants={itemVariants}>
            Haldi Ceremony
          </motion.h1>

          <motion.div className="event-schedule" variants={itemVariants}>
            <p><span>8:00 PM</span> Ceremony Begins</p>
            <p><span>11:00 PM</span> Dinner</p>
          </motion.div>

          <motion.h2 className="event-date" variants={itemVariants}>
            13 March 2026
          </motion.h2>

          <motion.p className="event-venue" variants={itemVariants}>
            Avenue 105, F-105 Boat <br />
            Zone C - Block 7 Basin <br />
            Karachi, 75600, Pakistan
          </motion.p>
        </motion.div>

        {/* Bottom Border */}
        <div className="card-border-bottom"></div>
      </motion.div>
    </section>
  );
}