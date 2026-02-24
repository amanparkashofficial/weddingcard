import { motion } from "framer-motion";

export default function Contact() {

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
    <section id="contact" className="contact-section">
      <motion.div
        className="wedding-card"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        {/* Top Border */}
        <div className="card-border-top"></div>

        <motion.div
          className="card-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <motion.h1 className="card-heading" variants={itemVariants}>
            ॥ Contact ॥
          </motion.h1>

          {/* Bride Side */}
          <motion.div variants={itemVariants} className="contact-group">
          
            <p>Prem Kumar Mankani</p>
            <p1>03333951483</p1>

            <p>Dilip Kumar Mankani</p>
            <p1>0332 8426681</p1>
          </motion.div>

        </motion.div>

        {/* Bottom Border */}
        <div className="card-border-bottom"></div>
      </motion.div>
    </section>
  );
}