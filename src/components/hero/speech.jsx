// TYPING ANIMATION: https://www.npmjs.com/package/react-type-animation
import { TypeAnimation } from "react-type-animation";

const Speech = () => {
  return (
    <div className="bubbleContainer">
      <div className="bubble">
        <TypeAnimation
          sequence={[
            1000,
            // Same substring at the start will only be typed out once, initially
            "Scroll down to see my collection of web application!",
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            "Scroll down to see my collection of research projects!",
            1000,
            "Scroll down to see my collection of mobile applications!",
            1000,
            "Scroll down to see competitions and hackathons I have participated in!",
            1000,
            "Scroll down to contact me!",
            1000,
          ]}
          wrapper="span"
          speed={40}
          deletionSpeed={60}
          repeat={Infinity}
        />
      </div>
    </div>
  );
};

export default Speech;
