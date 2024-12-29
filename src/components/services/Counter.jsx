// What is a hook in react?
// Special function that lets you HOOK INTO reacts features

import { useInView, animate } from "motion/react"; // imports a hook from motion.react library that detects if an element is currently visibile in viewport
import { useEffect, useRef, useState } from "react";
//Usestate is a react hook that allows you to add or manage a state in a functional component
// A state is a variable that react 'remembers' and automatically updates in your component when a value changes
// useRef is a react hook that provides a way to create a mutable (changeable) reference to a dom ELEMENT, it does not trigger rerenders
const Counter = ({ from, to, text }) => {
  const [count, setCount] = useState(from);
  // always cal hooks at the top level, not inside loops
  // creates a variable count with current value of state
  // setCount is a function you call to update state
  // from is the starting value of the state, stored in count variable
  const ref = useRef();
  // creates a ref object

  const isInView = useInView(ref);
  // useinview hook moniters the ref and returns true when element is in viewport (helpful to triger animation only when component becomes visible)

  // useEfect is a reacth ook that lets you run side efects in your component
  // a side effect is any operation that interacts with something outside react's rendering process (modifying dom, animating value, fetching data)

  useEffect(() => {
    // sets up effect, code inside runs after the component renders or when the dependencies(at the end)change
    const animation = animate(from, to, {
      // starts an animation that changes a value smoothly from "from" to "to"
      duration: 4, // animation runs for 4 seconds
      ease: "easeOut",
      onUpdate: (prev) => {
        // a callback function that is called repeatedly during the animation, where prev is the current value of the animation as it progresses
        setCount(Math.floor(prev)); // setCount updates the count state , ensuring the UI shows the changing value, but it must show whole numbers therefore using floor function
        // always update the count state using the setCount function
      },
    });

    return () => animation.cancel(); // this is a cleanup function, react automatically calls this when the component is removed from screen or the effect is about to change due to a dependency change [from, to, isInView]
    // animation.cancel() stops it cleanly
  }, [isInView, from, to]); // tells react when to run this effect, only if one of these values have changed, useEffect runs again if any of these values change

  return (
    <div className="counter" ref={ref}>
      <h1>{count}+</h1>
      <p>{text}</p>
    </div>
  );
};

export default Counter;
