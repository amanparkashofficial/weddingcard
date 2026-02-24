import { motion } from "framer-motion";
import god from "../assets/god.jpeg";
import floral from "../assets/floral.png";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="home" className="wedding-section" style={{ padding: "50px 10px" }}>
      <motion.div
        className="wedding-card"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        style={{ padding: "30px 20px", maxWidth: "400px" }} // smaller card
      >
        {/* Floral Decoration */}
        <div className="floral-deco" style={{ marginBottom: "10px" }}>
          <img src={floral} alt="Floral Decoration" style={{ width: "80px", height: "60px" }} />
        </div>

        {/* Top Border */}
        <div className="card-border-top" style={{ height: "3px", margin: "15px 0" }}></div>

        {/* God Image */}
        <div className="god-frame" style={{ marginBottom: "15px" }}>
          <motion.img
            src={god}
            alt="Divine Blessing"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
            style={{ width: "80px", height: "100px" }}
          />
        </div>

        {/* Invitation Content */}
        <motion.div
          className="card-content"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.h1 className="card-heading" variants={itemVariants} style={{ fontSize: "22px", marginBottom: "12px" }}>
            ॥Wedding Invitation॥
          </motion.h1>

          <motion.p className="blessing-text" variants={itemVariants} style={{ fontSize: "14px", margin: "6px 0" }}>
            By the divine blessings of <br />
            <span>Babal Sain</span>
          </motion.p>

          <motion.p className="memory-text" variants={itemVariants} style={{ fontSize: "14px", margin: "6px 0" }}>
            and in loving memory of <br />
            Late Mr. Anil Kumar Mankani & Late Mr. Vijay Kumar Khatri
          </motion.p>

          <motion.p className="invite-text" variants={itemVariants} style={{ fontSize: "14px", margin: "6px 0" }}>
            Mrs. Sangeeta Mankani requests the honour of your gracious presence
            at the wedding ceremony of her beloved daughter
          </motion.p>

          <motion.h2 className="bride-name" variants={itemVariants} style={{ fontSize: "18px", margin: "8px 0" }}>
            Dr. Priyanka Mankani
          </motion.h2>

          <motion.p className="parent-text" variants={itemVariants} style={{ fontSize: "13px", margin: "4px 0" }}>
            Daughter of Late Mr. Anil Kumar Mankani & Mrs. Sangeeta Mankani
          </motion.p>

          <motion.div className="with-text" variants={itemVariants} style={{ fontSize: "14px", margin: "6px 0" }}>
            With
          </motion.div>

          <motion.h2 className="groom-name" variants={itemVariants} style={{ fontSize: "18px", margin: "8px 0" }}>
            Mr. Sumeet Khatri
          </motion.h2>

          <motion.p className="parent-text" variants={itemVariants} style={{ fontSize: "13px", margin: "4px 0" }}>
            Son of Late Mr. Vijay Kumar Khatri & Mrs. Poonam Khatri
          </motion.p>

          <motion.p className="closing-text" variants={itemVariants} style={{ fontSize: "13px", margin: "6px 0" }}>
            Together with the Mankani and Khatri families,<br />
            we invite you to join us in celebrating this joyous and auspicious union.
          </motion.p>

          <motion.p className="final-blessing" variants={itemVariants} style={{ fontSize: "13px", marginTop: "8px" }}>
            Your presence and blessings will make our happiness complete.
          </motion.p>
        </motion.div>

        {/* Bottom Border */}
        <div className="card-border-bottom" style={{ height: "3px", margin: "15px 0" }}></div>
      </motion.div>
    </section>
  );
}