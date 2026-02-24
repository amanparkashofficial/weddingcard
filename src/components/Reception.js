import { motion } from "framer-motion";
import floral from "../assets/floral.png";
import coupleImg from "../assets/couple.png";

export default function Reception() {
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
    <section id="reception" className="wedding-section">
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

        {/* Couple Image */}
        <div className="couple-image-wrapper">
          <motion.img
            src={coupleImg}
            alt="Reception Couple"
            className="couple-image"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
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
            Reception
          </motion.h1>

          <motion.div className="event-schedule" variants={itemVariants}>
            <p><span>8:00 PM</span> Reception Begins</p>
            <p><span>10:00 PM</span> Dinner</p>
          </motion.div>

          <motion.h2 className="event-date" variants={itemVariants}>
            13 March 2026
          </motion.h2>

          <motion.p className="event-venue" variants={itemVariants}>
            National Sailing Centre <br />
            Street No. 19, Block 6, Boat Basin <br />
            Block 6 Clifton, Karachi, 75600, Pakistan
          </motion.p>
        </motion.div>

        {/* Bottom Border */}
        <div className="card-border-bottom"></div>
      </motion.div>
    </section>
  );
}