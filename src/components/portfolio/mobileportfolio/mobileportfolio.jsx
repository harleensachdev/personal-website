import { useEffect, useRef, useState } from "react";
import "./mobileportfolio.css";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { Link } from "react-scroll";

const items = [
  {
    id: 1,
    type: "Mobile Development Project",
    img: "./violintutor.png",
    title: "ViolinTutor",
    desc: "An IOS mobile application developed in Swift for advanced violin learners. Allows higher grade musicians to input complex lines of their violin scores and play through it. Has a rhythm test feature that allows students to test their tempo maintenence with an inbuilt metronome, along with their accuracy at various speeds. Aims to support violin learners in remote communities with limited access to violin tutoring and external support. ",
    link: "https://github.com/harleensachdev/tutorviolin",
  },
];

const imgVariants = {
  initial: {
    x: -500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const textVariants = {
  initial: {
    x: 500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.05,
    },
  },
};

const ListItem = ({ item }) => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <div className="pItem" ref={ref}>
      <motion.div
        variants={imgVariants}
        animate={isInView ? "animate" : "initial"}
        className="pImg"
      >
        <img src={item.img} alt="" />
      </motion.div>
      <motion.div
        variants={textVariants}
        animate={isInView ? "animate" : "initial"}
        className="mobilepText"
      >
        <motion.h1 variants={textVariants}>{item.title}</motion.h1>
        <motion.h2 variants={textVariants}>{item.type}</motion.h2>
        <motion.p variants={textVariants}>{item.desc}</motion.p>
        <motion.a variants={textVariants} href={item.link}>
          <button>View Project</button>
        </motion.a>
        <motion.a variants={textVariants}>
          {" "}
          <motion.i variants={textVariants}>
            Scroll down to flip through other mobile development projects,
            research projects and competition projects (in this order). Scroll
            up to go back to the previous project, or the web development
            projects.
          </motion.i>
        </motion.a>

        <Link
          variants={textVariants}
          className="backbutton"
          to="services"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          Back to my portfolio
        </Link>
      </motion.div>
    </div>
  );
};

const MobilePortfolio = () => {
  const [containerDistance, setContainerDistance] = useState(0);
  const ref = useRef(null);

  // useEffect(() => {
  //   if (ref.current) {
  //     const rect = ref.current.getBoundingClientRect();
  //     setContainerDistance(rect.left);
  //   }
  // }, []);

  // FIX: Re-calculate when screen size changes
  useEffect(() => {
    const calculateDistance = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setContainerDistance(rect.left);
      }
    };

    calculateDistance();

    window.addEventListener("resize", calculateDistance);

    return () => {
      window.removeEventListener("resize", calculateDistance);
    };
  }, []);

  const { scrollYProgress } = useScroll({ target: ref });

  const xTranslate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -window.innerWidth * items.length]
  );

  return (
    <div className="mobileportfolio" ref={ref}>
      <motion.div className="pList" style={{ x: xTranslate }}>
        <div
          className="empty"
          style={{
            width: window.innerWidth - containerDistance,
            // backgroundColor: "pink",
          }}
        />
        {items.map((item) => (
          <ListItem item={item} key={item.id} />
        ))}
      </motion.div>
      <section />
      <div className="pProgress">
        <svg width="100%" height="100%" viewBox="0 0 160 160">
          <circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#ddd"
            strokeWidth={20}
          />
          <motion.circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#dd4c62"
            strokeWidth={20}
            style={{ pathLength: scrollYProgress }}
            transform="rotate(-90 80 80)"
          />
        </svg>
      </div>
    </div>
  );
};

export default MobilePortfolio;
