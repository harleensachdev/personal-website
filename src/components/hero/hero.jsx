import "./hero.css";
import { motion } from "motion/react";
import { Canvas } from "@react-three/fiber";
import Shape from "./shape";
import Speech from "./speech";
import { Suspense } from "react";

// Importing PNG images
import instagramImg from "/instagram.png";
import linkedinImg from "/linkedin2.webp";
import youtubeImg from "/youtube.png";

// MOTION ELEMENTS FROM https://motion.dev/docs/react-quick-start
const awardVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};
const followVariants = {
  initial: {
    y: -100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="hSection left">
        {" "}
        {/* divides hero section into two sides */}
        {/* TITLE */}
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="hTitle"
        >
          Hi,
          <br />
          <span>I'm Harleen!</span>
        </motion.h1>
        {/* AWARDS */}
        <motion.div
          variants={awardVariants}
          initial="initial"
          animate="animate"
          className="awards"
        >
          <motion.h2 variants={awardVariants}>
            Garden International School Student
          </motion.h2>
          <motion.p variants={awardVariants}>
            Scroll down to see my portfolio or contact me!
          </motion.p>
        </motion.div>
        {/* SCROLLSVG - scalable vector graphics*/}
        <motion.a></motion.a>
      </div>
      <div className="hSection right">
        {/*FOLLOW*/}
        <motion.div
          variants={followVariants}
          initial="initial"
          animate="animate"
          className="follow"
        >
          <motion.a
            variants={followVariants}
            href="https://www.instagram.com/harleensch/"
          >
            <img src={instagramImg} alt="Instagram" />
          </motion.a>
          <motion.a
            variants={followVariants}
            href="https://www.linkedin.com/in/harleen-sachdev-66a572336/"
          >
            <img src={linkedinImg} alt="LinkedIn" />
          </motion.a>
          <motion.a
            variants={followVariants}
            href="https://www.youtube.com/@harleensachdev9461"
          >
            <img src={youtubeImg} alt="YouTube" />
          </motion.a>
          <motion.div variants={followVariants} className="followTextContainer">
            <div className="followText">CLICK TO FIND ME</div>
          </motion.div>
        </motion.div>
        {/* BUBBLE */}
        <Speech />
        {/* CERTIFICATE */}
        <motion.div
          animate={{ opacity: [0, 1] }}
          transition={{ duration: 1 }}
          className="certificate"
        ></motion.div>
        {/* CONTACT BUTTON */}
        <motion.a
          href="/#contact"
          className="contactLink"
          animate={{
            x: [200, 0],
            opacity: [0, 1],
          }}
          transition={{
            duration: 2,
          }}
        >
          <motion.div
            className="contactButton"
            animate={{ rotate: [0, 360] }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <svg viewBox="0 0 200 200" width="150" height="150">
              <circle cx="100" cy="100" r="90" fill="pink" />
              <path
                id="innerCirclePath"
                fill="none"
                d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
              />
              <text className="circleText">
                <textPath href="#innerCirclePath"> Portfolio •</textPath>
              </text>
              <text className="circleText">
                <textPath href="#innerCirclePath" startOffset="44%">
                  Contact Me •
                </textPath>
              </text>
            </svg>
            <div className="arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="50"
                height="50"
                fill="none"
                stroke="black"
                strokeWidth="2"
              >
                <line x1="6" y1="18" x2="18" y2="6" />
                <polyline points="9 6 18 6 18 15" />
              </svg>
            </div>
          </motion.div>
        </motion.a>
      </div>
      <div className="bg">
        {/* 3d */}
        <Canvas>
          {/* canvas call sets up a screen for rendering 3d components */}
          <Suspense fallback="loading...">
            {" "}
            {/* command suspense from react automatically switches to a fallback page when waiting for a child to load*/}
            <Shape />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default Hero;
