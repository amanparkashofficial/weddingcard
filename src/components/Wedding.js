import { motion } from "framer-motion";
import floral from "../assets/floral.png";
import weddingImg from "../assets/Wedding.png";

export default function Wedding() {
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

  // Curtains animation: slide from center to sides
  const curtainLeftVariants = {
    hidden: { x: 0 },
    show: { x: "-100%", transition: { duration: 1.8, ease: "easeInOut" } },
  };

  const curtainRightVariants = {
    hidden: { x: 0 },
    show: { x: "100%", transition: { duration: 1.8, ease: "easeInOut" } },
  };

  return (
    <section id="wedding" className="wedding-section wedding-festive">

      {/* Left Curtain */}
      <motion.div
        className="curtain left-curtain"
        initial="hidden"
        animate="show"
        variants={curtainLeftVariants}
      />

      {/* Right Curtain */}
      <motion.div
        className="curtain right-curtain"
        initial="hidden"
        animate="show"
        variants={curtainRightVariants}
      />

      {/* Wedding Card */}
      <motion.div
        className="wedding-card wedding-card-festive"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* Floral Decoration */}
        <div className="floral-deco">
          <img src={floral} alt="Floral Decoration" />
        </div>

        <div className="card-border-top wedding-border"></div>

        <div className="wedding-image-wrapper">
          <motion.img
            src={weddingImg}
            alt="Wedding Ceremony"
            className="wedding-image"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          />
        </div>

        <motion.div
          className="card-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.h1 className="card-heading wedding-heading" variants={itemVariants}>
            Wedding Ceremony
          </motion.h1>

          <motion.div className="event-schedule" variants={itemVariants}>
            <p><span>8:00 PM</span> Ceremony Begins</p>
            <p><span>10:00 PM</span> Dinner</p>
          </motion.div>

          <motion.h2 className="event-date" variants={itemVariants}>
            14 March 2026
          </motion.h2>

          <motion.p className="event-venue" variants={itemVariants}>
            National Sailing Centre <br />
            Street No. 19, Block 6, Boat Basin <br />
            Block 6 Clifton, Karachi, 75600, Pakistan
          </motion.p>
        </motion.div>

        <div className="card-border-bottom wedding-border"></div>
      </motion.div>
    </section>
  );
}