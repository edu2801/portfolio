import { useState } from "react";
import Contact from "./components/Contact";
import Introduction from "./components/Introduction";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

export default function App() {
  const [isPortuguese, setIsPortuguese] = useState(true);
  return (
    <div>
      <Navbar isPortuguese={isPortuguese} setIsPortuguese={setIsPortuguese} />
      <Introduction isPortuguese={isPortuguese} />
      <Projects isPortuguese={isPortuguese} />
      <Contact isPortuguese={isPortuguese} />
    </div>
  );
}
