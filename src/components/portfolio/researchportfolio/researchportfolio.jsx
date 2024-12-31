import { useEffect, useRef, useState } from "react";
import "./researchportfolio.css";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { Link } from "react-scroll";

const items = [
  {
    id: 1,
    type: "Research Project",
    img: "/blank.png",
    title: "Human Activity Recognition System",
    desc: "Currently working with a team of students at University Malaya to develop a Human Activity Recognition model for Wearable Deviceswith practical accuracy that requires minimal computational resources. The model will be integrated into an app designed for wearable devices, specifically AR glasses, which will allow real-time recognition. The primary purpose of this project is to reduce computational resource of the model so it can have a greater accuracy in wearable devices. ",
    link: "",
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
        className="researchpText"
      >
        <motion.h1 variants={textVariants}>{item.title}</motion.h1>
        <motion.h2 id="researchheading" variants={textVariants}>
          {item.type}
        </motion.h2>
        <motion.p variants={textVariants}>{item.desc}</motion.p>
        <motion.a variants={textVariants} href={item.link}>
          <button>View Project</button>
        </motion.a>
        <motion.a variants={textVariants}>
          {" "}
          <motion.i variants={textVariants}>
            Scroll down to flip through other research projects, and competition
            projects (in this order). Scroll up to go back to the previous
            project, the mobile development projects, or the web development
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

const ResearchPortfolio = () => {
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
    <div className="researchportfolio" ref={ref}>
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

export default ResearchPortfolio;
