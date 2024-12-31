import { useEffect, useRef, useState } from "react";
import "./webportfolio.css";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import { Link } from "react-scroll";

const items = [
  {
    id: 1,
    type: "Web Development Project",
    img: "/reportbullyingnow.png",
    title: "ReportBullyingNow",
    desc: "Created ReportBullyingNow, an anti-bullying platform adopted by schools in Kuala Lumpur. The platform includes an anonymous reporting system and data analytics tools for identifying bullying trends. Worked with school administrators to implement policies, promote a safer environment, and empower students to report issues without fear",
    link: "https://reportbullyingnow.online",
  },
  {
    id: 2,
    type: "Web Development Project",
    img: "/teachmemusic.png",
    title: "Teach Me Music",
    desc: "Developed TeachMeMusic, a web-based application to support music students, particularly those in remote or underserved areas. The app provides rhythm checking, pitch accuracy, and interactive score display, with immediate feedback on timing, intonation, and musicality. Currently supports MusicXML and MIDI file formats, with Optical Music Recognition (OMR) in development to allow uploads of sheet music images or PDFs, further enhancing accessibility..",
    link: "https://teachmemusic.onrender.com",
  },
  {
    id: 3,
    type: "Web Development Project",
    img: "/interactivemap.png",
    title: "Interactive Map",
    desc: "Designed and implemented an interactive digital map for my school, allowing new students, staff, and visitors to navigatethe campus with ease. The map includes clickable areas, room details, accessibility information, and navigation instructions.",
    link: "https://harleensachdev.github.io/interactiveschoolmap/",
  },
  {
    id: 4,
    type: "Web Development Project",
    img: "/pizzafusion.png",
    title: "Pizza Fusion Game",
    desc: "A remix of the popular 2048 game. ",
    link: "https://harleensachdev.github.io/pizzafusion/",
  },
  {
    id: 5,
    type: "Web Development Project",
    img: "/personalwebsite.png",
    title: "Personal Website",
    desc: "A personal website using symbols from LAMADEV to collate my personal projects in one place",
    link: "https://harleensachdev.com.my",
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
        className="webpText"
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
            Scroll down to flip through other web development projects, mobile
            development projects, research projects and competition projects (in
            this order). Scroll up to go back to the previous project.
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

const WebPortfolio = () => {
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
    <div className="webportfolio" ref={ref}>
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

export default WebPortfolio;
