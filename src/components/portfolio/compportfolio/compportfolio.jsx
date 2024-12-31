import { useEffect, useRef, useState } from "react";
import "./compportfolio.css";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { Link } from "react-scroll";

const items = [
  {
    id: 1,
    type: "Competitions",
    img: "/blank.png",
    title: "American Scholastic Mathematics Competition",
    desc: "Highest scoring student in the American Scholastic Mathematics Association competition.",
    link: "https://www.asan.com/annual-math-contest",
  },
  {
    id: 2,
    type: "Competitions",
    img: "/blank.png",
    title: "Girls In Code SEA Winner",
    desc: " Awarded for excellence in competitive coding skills, advancing technology, and empowering women in STEM across Asia.",
    link: "https://seamo-official.org/",
  },
  {
    id: 3,
    type: "Competitions",
    img: "/blank.png",
    title: "KL Coding Cup",
    desc: "2x Overall School Gold Medalist",
    link: "https://seamo-official.org/",
  },
  {
    id: 4,
    type: "Competitions",
    img: "/blank.png",
    title: "MCC (Malaysian Computing Challenge) + USACO Participant",
    desc: "Issued by Malaysian Informatics And Programming Society. Qualified for the Malaysia Computing Olympiad with a silver medal in the Malaysian Computing Challenge and participated in the United States of America Computing Olympiad rounds.",
    link: "https://usaco.org/",
  },
  {
    id: 5,
    type: "Competitions",
    img: "/blank.png",
    title: "KL Intermediate Math Challenge",
    desc: "2x Overall Team Gold Medalist",
    link: "",
  },
  {
    id: 6,
    type: "Hackathon",
    img: "/blank.png",
    title: "Worthy Hacks Hackathon",
    desc: "Participated in my first hackathon - submitting reportbullyingnow web development project",
    link: "https://worthyhacks.devpost.com/?ref_feature=challenge&ref_medium=discover",
  },
  {
    id: 7,
    type: "Competitions",
    img: "/blank.png",
    title: "IYMC",
    desc: "Finalist + Bronze Medalist in the IYMC (International Youth Math Challenge)",
    link: "https://iymc.info/en/",
  },

  {
    id: 8,
    type: "Competitions",
    img: "/blank.png",
    title: "Kangaroo Math Challenge",
    desc: "Gold + Bronze Medalist in the Kangaroo Math Challenge",
    link: "https://www.kangaroomath.com.my/",
  },
  {
    id: 9,
    type: "Competitions",
    img: "/blank.png",
    title: "Kangaroo Math Second Round Qualifier",
    desc: "One of 326 students out of 66,000 participants to advance to the second round of the Kangaroo Maths competition.",
    link: "https://www.kangaroomath.com.my/",
  },
  {
    id: 10,
    type: "Competitions",
    img: "/blank.png",
    title: "UKMT Math Challenge",
    desc: "Gold Medalist in the Junior and Intermediate Math Challenge. Silver Medalist in the Senior Math Challenge. ",
    link: "https://www.kangaroomath.com.my/",
  },
  {
    id: 11,
    type: "Competitions",
    img: "/blank.png",
    title: "Seamo and Seamo X Maths",
    desc: "Achieved a gold medal the SEAMO math competition and a silver medal in the SEAMO X math competition - the second round of SEAMO (South East Asian Mathematical Olympiad).",
    link: "https://seamo-official.org/",
  },
  {
    id: 12,
    type: "Competitions",
    img: "/blank.png",
    title: "IMONST National Maths Competition",
    desc: "Silver Medalist in the Malaysian National Maths Competition",
    link: "https://imo-malaysia.org/imonst1/",
  },
  {
    id: 13,
    type: "Competitions",
    img: "/blank.png",
    title: "SASMO Math Competition",
    desc: "Bronze Medalist in SASMO (Singapore and Asian Schools Math Competition0",
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

        <motion.p variants={textVariants}>{item.desc}</motion.p>
        <motion.a variants={textVariants} href={item.link}>
          <button>View More</button>
        </motion.a>
        <motion.a variants={textVariants}>
          {" "}
          <motion.i variants={textVariants}>
            Scroll down to flip through other competition projects. Scroll up to
            go back to the previous project, the research projects, the mobile
            development projects, or the web development projects.
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
