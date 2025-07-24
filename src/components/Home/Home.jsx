import "./home.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 4.7,
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const sliderVariants = {
  initial: {
    x: "30%",
  },
  animate: {
    x: "-380%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 15,
    },
  },
};

function Home() {
  return (
    <div className="home">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Fuad Babayev</motion.h2>
          <motion.h1 variants={textVariants}>
            Frontend <br /> Web Developer
          </motion.h1>
          {/* <motion.div variants={textVariants} className="buttons">
            <motion.a variants={textVariants} href="#Contact">
              Contact Me
            </motion.a>
            <motion.a href="/Fuad Babayev.pdf" donwload="true" variants={textVariants} target="_blank">Download CV</motion.a>
          </motion.div> */}
          <motion.img
            variants={textVariants}
            src="/scroll.png"
            alt="Scroll"
            animate="scrollButton"
          />
        </motion.div>

        <div className="imageContainer">
        <img src="/me.png" alt="Fuad Babayev" />
      </div>
      </div>

      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Frontend Web Developer
      </motion.div>

      {/* <div className="imageContainer">
        <img src="/hero.png" alt="Fuad Babayev" />
      </div> */}
    </div>
  );
}

export default Home;
                                                        