import { motion } from "framer-motion";
import bride from "../assets/Bride.jpeg";
import groom from "../assets/Groom.jpeg";

export default function Couple() {
  return (
    <section id="couple" className="couple-section">
      
      <motion.div
        className="couple-row"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.3
            }
          }
        }}
      >

        {/* Bride */}
        <motion.div
          className="person"
          variants={{
            hidden: { opacity: 0, x: -60 },
            visible: { opacity: 1, x: 0 }
          }}
          transition={{ duration: 1 }}
        >
          <div className="oval-frame">
            <motion.img
              src={bride}
              alt="Dr Priyanka"
              className="oval-image"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.6 }}
            />
          </div>
          <p className="person-name">Dr Priyanka</p>
        </motion.div>

        {/* Animated Gold Ampersand */}
        <motion.div
          className="ampersand"
          variants={{
            hidden: { opacity: 0, scale: 0.5 },
            visible: { opacity: 1, scale: 1 }
          }}
          transition={{ duration: 0.8 }}
        >
          &
        </motion.div>

        {/* Groom */}
        <motion.div
          className="person"
          variants={{
            hidden: { opacity: 0, x: 60 },
            visible: { opacity: 1, x: 0 }
          }}
          transition={{ duration: 1 }}
        >
          <div className="oval-frame">
            <motion.img
              src={groom}
              alt="Mr Sumeet"
              className="oval-image"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.6 }}
            />
          </div>
          <p className="person-name">Mr Sumeet</p>
        </motion.div>

      </motion.div>

      {/* Bigger Animated Invite Line */}
      <motion.p
        className="invite-line"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        Request the honor of your presence at their wedding celebration
      </motion.p>

    </section>
  );
}