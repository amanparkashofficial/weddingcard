import { motion } from "framer-motion";
import god from "../assets/god.jpeg";
import floral from "../assets/floral.png";

export default function Satsang() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="satsang" className="wedding-section">
      <motion.div
        className="wedding-card"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
       

        {/* Top Border */}
        <div className="card-border-top"></div>

        {/* God Image */}
        <div className="god-frame">
          <motion.img
            src={god}
            alt="Divine Blessings"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8 }}
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
            ॥ Satsang ॥
          </motion.h1>

          <motion.p className="blessing-text" variants={itemVariants}>
            Ladies Only Event
          </motion.p>

          <motion.div className="schedule-box" variants={itemVariants}>
            <p><span>7:00 PM</span> Rehras Sahib</p>
            <p><span>8:00 PM</span> Kirtan</p>
            <p><span>10:00 PM</span> Bhandaro</p>
          </motion.div>

          <motion.h2 className="event-date" variants={itemVariants}>
            11 March 2026
          </motion.h2>

          <motion.p className="event-venue" variants={itemVariants}>
            13th Floor, Tai Safa Tower <br />
            Civil Lines, Cantt Station <br />
            Karachi
          </motion.p>

          <motion.p className="final-blessing" variants={itemVariants}>
            Your presence and blessings will grace the evening with divine joy.
          </motion.p>
        </motion.div>

        {/* Bottom Border */}
        <div className="card-border-bottom"></div>
      </motion.div>
    </section>
  );
}