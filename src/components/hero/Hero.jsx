import "./hero.scss";
import BilalResume from "../../../public/BilalResume.pdf"
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
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  const handleResume = () => {
    window.open(BilalResume);
  };


  return (
    <>
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Bilal Ahmad</motion.h2>
          <motion.h1 variants={textVariants}>
            Full Stack Developer
          </motion.h1>
          <motion.div>
            I am a passionate and results-driven Software Engineer currently working at OnGraph Technologies Pvt Ltd in Jaipur, India. With a robust foundation in computer science and a proven track record of delivering high-quality software solutions, I bring years of experience in the industry. I have honed my skills in software development, problem-solving, and teamwork to ensure that I can meet and exceed your project requirements.
          </motion.div>         
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>

      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        MERN & ROR
      </motion.div>    
     
      <div className="imageContainer">
        <img src="/hero.png" alt="" />
      </div>
    </div>    
    </>
  );
};

export default Hero;