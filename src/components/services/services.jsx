import ComputerModelContainer from "./computer/ComputerModelContainer";
import CubeModelContainer from "./cube/CubeModelContainer";
import IphoneModelContainer from "./iphone/IphoneModelContainer";
import MountainModelContainer from "./mountain/MountainModelContainer";
import Counter from "./Counter";
import { useRef } from "react";
import "./services.css";
import { useState } from "react";
import { useInView } from "motion/react";
import { transition } from "three/examples/jsm/tsl/display/TransitionNode.js";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";
import service1 from "/service1.png"; // Replace with the correct path to your images if needed
import service2 from "/service2.png"; // Replace with the correct path to your images if needed
import service3 from "/service3.png"; // Replace with the correct path to your images if needed

const listVariants = {
  initial: {
    x: -100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.5,
    },
  },
};
const textVariants = {
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
      duration: 1,
    },
  },
};
const services = [
  {
    id: 1,
    img: service1,
    title: "Web Development",
    counter: 5,
  },
  {
    id: 2,
    img: service1,
    title: "Mobile Development",
    counter: 0,
  },
  {
    id: 3,
    img: service2,
    title: "Research",
    counter: 1,
  },
  {
    id: 4,
    img: service3,
    title: "Competitions + Hackathons",
    counter: 10,
  },
];
const Services = ({ webRef }) => {
  const [currentServiceId, setCurrentServiceId] = useState(1);
  const ref = useRef();
  const isInView = useInView(ref, { margin: "-200px" });
  return (
    <div className="services" ref={ref}>
      <div className="sSection left">
        <motion.h1
          variants={textVariants}
          animate={isInView ? "animate" : "initial"}
          className="sTitle"
        >
          {" "}
          My portfolio
        </motion.h1>
        <motion.h2
          variants={textVariants}
          animate={isInView ? "animate" : "initial"}
          className="sSubTitle"
        >
          {" "}
          Click to see more...
        </motion.h2>
        <motion.div
          variants={textVariants}
          animate={isInView ? "animate" : "initial"}
          className="serviceList"
        >
          {services.map((service) => (
            <motion.div
              variants={listVariants}
              className="service"
              key={service.id}
              onClick={() => setCurrentServiceId(service.id)}
            >
              <div className="serviceIcon">
                <img src={service.img} alt="" />
              </div>
              <div className="serviceInfo">
                <h2>{service.title}</h2>
                <h3>{service.counter} Projects</h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div className="counterList">
          <Counter from={0} to={16} text="Projects Completed" />
        </div>
      </div>
      <div className="sSection right">
        {currentServiceId === 1 ? (
          <>
            <ComputerModelContainer />
            <Link
              className="viewProjectsButton"
              to="web-portfolio"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              See Web Development Projects
            </Link>
          </>
        ) : currentServiceId === 2 ? (
          <>
            <IphoneModelContainer />
            <Link
              className="viewProjectsButton"
              to="mobile-portfolio"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              See Mobile Development Projects
            </Link>
          </>
        ) : currentServiceId === 3 ? (
          <>
            <CubeModelContainer />
            <Link
              className="viewProjectsButton"
              to="research-portfolio"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              See Research Projects
            </Link>
          </>
        ) : (
          <>
            <MountainModelContainer />
            <Link
              className="viewProjectsButton"
              to="comp-portfolio"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              See Competitions
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Services;
