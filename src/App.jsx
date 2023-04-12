import "./App.css";
import Home from "./pages/Home/index";
import { motion, useScroll, useSpring } from "framer-motion";

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <div>
      <motion.div className="progress-bar" style={{ scaleX }} />
      <Home />
    </div>
  );
}

export default App;
