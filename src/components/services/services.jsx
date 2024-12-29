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
    img: "/service1.png",
    title: "Web Development",
    counter: 0,
  },
  {
    id: 2,
    img: "/service1.png",
    title: "Mobile Development",
    counter: 0,
  },
  {
    id: 3,
    img: "/service2.png",
    title: "Research",
    counter: 0,
  },
  {
    id: 4,
    img: "/service3.png",
    title: "Competitions + Hackathons",
    counter: 0,
  },
];
const Services = () => {
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
          <Counter from={0} to={104} text="Projects Completed" />
        </div>
      </div>
      <div className="sSection right">
        {currentServiceId === 1 ? (
          <>
            <ComputerModelContainer />
            <button
              className="viewProjectsButton"
              onClick={() => (window.location.href = "/portfolio")}
            >
              View Web Development Projects
            </button>
          </>
        ) : currentServiceId === 2 ? (
          <>
            <IphoneModelContainer />
            <button
              className="viewProjectsButton"
              onClick={() =>
                (window.location.href = "/mobiledevelopment-portfolio")
              }
            >
              View Mobile Development Projects
            </button>
          </>
        ) : currentServiceId === 3 ? (
          <>
            <CubeModelContainer />
            <button
              className="viewProjectsButton"
              onClick={() => navigate("/webdevelopment-portfolio")}
            >
              View Research Projects
            </button>
          </>
        ) : (
          <>
            <MountainModelContainer />
            <button
              className="viewProjectsButton"
              onClick={() => (window.location.href = "/competition-portfolio")}
            >
              View Competition and Hackathon Projects
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Services;
