/*using motion react library https://motion.dev/docs/react-quick-start */

import { motion } from "motion/react";

const shapeVariants = {
  /* declare variants for your animation*/
  initialRect: {
    /* initialpositioning*/ x: -100,
    opacity: 0,
  },
  animateRect: {
    /*increase opacity over 2 seconds*/ x: 0,
    opacity: 1,
    transition: {
      duration: 2,
    },
  },
  initialCirc: {
    y: -100,
    opacity: 0,
  },
  animateCirc: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 3,
    },
  },
};

const listVariants = {
  initial: {
    x: -100,
    y: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 3,
      staggerChildren: 1 /* all children will also experience same animation but 1 second later, all components that use listVariants after the first one are considered children of the first component, and will experience the animation 1 second later*/,
    },
  },
};

const Test = () => {
  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <motion.div
        // initial={{ x: 0, y: 0, opacity: 0 }}
        // animate={{ x: [0, 100], y: [0, -200], opacity: [0, 1] }}
        // transition={{
        //   duration: 2,
        //   // delay: 4,
        //   ease: "easeInOut",
        //   repeat: Infinity,
        // }}
        variants={
          shapeVariants
        } /*MUST DECLARE THESE THREE PARAMETERS IN THE MOTION.DIV TAGS - VARIANTS, INITIAL (POSITION), ANIMATE*/
        initial="initialRect"
        animate="animateRect"
        style={{ width: 300, height: 300, background: "red" }}
      ></motion.div>
      <motion.div
        variants={shapeVariants}
        initial="initialCirc"
        animate="animateCirc"
        style={{
          width: 300,
          height: 300,
          background: "green",
          borderRadius: "100%",
        }}
      ></motion.div>
      <motion.ul variants={listVariants} initial="initial" animate="animate">
        <motion.li variants={listVariants}>Javascript</motion.li>{" "}
        {/* considered to be parent, as this is first usage of variants */}
        <motion.li variants={listVariants}>React</motion.li>{" "}
        {/* considered to be child of first used component*/}
        <motion.li variants={listVariants}>Next.js</motion.li>
        {/* considered to be child of first used component*/}
      </motion.ul>
    </section>
  );
};

export default Test;
