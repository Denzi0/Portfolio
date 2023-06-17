import "./App.css";
import Home from "./pages/Home/index";
import { motion, useScroll, useSpring } from "framer-motion";
import AnimatedCursor from "react-animated-cursor";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <div>
      <AnimatedCursor
        innerSize={20}
        outerSize={20}
        color="255, 255, 255"
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={5}
        clickables={[
          "a",
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          "label[for]",
          "select",
          "textarea",
          "button",
          ".link",
        ]}
      />
      <motion.div className="progress-bar" style={{ scaleX }} />
      <Home />
    </div>
  );
}

export default App;
