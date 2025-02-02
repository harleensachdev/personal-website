import React, { useEffect, useRef, useState } from "react";
import "./compportfolio.css";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { Link } from "react-scroll";
import blankImage from "/blank.png";
import copilotPreview from "/gisaimodel.png"; // Replace with the correct path to your images if needed

const items = [
  {
    id: 1,
    type: "Competitions",
    img: copilotPreview,
    date: "02/02/2025",
    title: "School AI chatbot",
    desc: "Created an AI chatbot to provide information to prospective parents",
    link: "",
  },
  {
    id: 2,
    type: "Competitions",
    img: blankImage,
    date: "19/12/2023",
    title: "American Scholastic Mathematics Competition",
    desc: "Highest scoring student in the American Scholastic Mathematics Association competition.",
    link: "https://www.asan.com/annual-math-contest",
  },
  {
    id: 3,
    type: "Competitions",
    img: blankImage,
    date: "12/08/2023",
    title: "Girls In Code SEA Winner",
    desc: "Awarded for excellence in competitive coding skills, advancing technology, and empowering women in STEM across Asia.",
    link: "https://seamo-official.org/",
  },
  {
    id: 4,
    type: "Competitions",
    img: blankImage,
    date: "01/12/2024",
    title: "KL Coding Cup",
    desc: "2x Overall School Gold Medalist",
    link: "https://seamo-official.org/",
  },
  {
    id: 5,
    type: "Competitions",
    img: blankImage,
    date: "19/12/2024",
    title: "MCC (Malaysian Computing Challenge) + USACO Participant",
    desc: "Issued by Malaysian Informatics And Programming Society. Qualified for the Malaysia Computing Olympiad with a silver medal in the Malaysian Computing Challenge and participated in the United States of America Computing Olympiad rounds.",
    link: "https://usaco.org/",
  },
  {
    id: 6,
    type: "Competitions",
    img: blankImage,
    date: "01/10/2024",
    title: "KL Intermediate Math Challenge",
    desc: "2x Overall Team Gold Medalist",
    link: "",
  },
  {
    id: 7,
    type: "Hackathon",
    img: blankImage,
    date: "10/10/2024",
    title: "Worthy Hacks Hackathon",
    desc: "Participated in my first hackathon - submitting reportbullyingnow web development project",
    link: "https://worthyhacks.devpost.com/?ref_feature=challenge&ref_medium=discover",
  },
  {
    id: 8,
    type: "Competitions",
    date: "31/12/2024",
    img: blankImage,
    title: "IYMC",
    desc: "Finalist + Bronze Medalist in the IYMC (International Youth Math Challenge)",
    link: "https://iymc.info/en/",
  },
  {
    id: 9,
    type: "Competitions",
    img: blankImage,
    date: "10/12/2024",
    title: "UKMT Math Challenge",
    desc: "Gold Medalist in the Junior and Intermediate Math Challenge. Silver Medalist in the Senior Math Challenge.",
    link: "https://www.kangaroomath.com.my/",
  },
  {
    id: 10,
    type: "Competitions",
    img: blankImage,
    date: "10/12/2023",
    title: "Seamo and Seamo X Maths",
    desc: "Achieved a bronze medal in the SEAMO math competition and the SEAMO X math competition - the second round of SEAMO (South East Asian Mathematical Olympiad).",
    link: "https://seamo-official.org/",
  },
  {
    id: 11,
    type: "Competitions",
    img: blankImage,
    date: "05/04/2023",
    title: "SASMO Math Competition",
    desc: "Bronze Medalist in SASMO (Singapore and Asian Schools Math Competition)",
    link: "https://smo-testing.com/sasmo/",
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
        className="comppText"
      >
        <motion.h1 variants={textVariants}>{item.title}</motion.h1>
        <motion.h2 variants={textVariants}>{item.type}</motion.h2>
        <motion.p variants={textVariants}>Created on: {item.date}</motion.p>
        <motion.p variants={textVariants}>{item.desc}</motion.p>
        <motion.a variants={textVariants} href={item.link}>
          <button>View More</button>
        </motion.a>
        <motion.a variants={textVariants}>
          {" "}
          <motion.i variants={textVariants}>
            Scroll down to flip through other competition projects and the
            contact me page. Scroll up to go back to the previous project, the
            research projects, the mobile development projects, or the web
            development projects.
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

const CompPortfolio = () => {
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
    <div className="compportfolio" ref={ref}>
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
      <section />
      <section />
      <section />
      <section />
      <section />
      <section />
      <section />
      <section />
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

export default CompPortfolio;
