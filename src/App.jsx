import Contact from "./components/Contact";
import Introduction from "./components/Introduction";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

export default function App() {
  return (
    <div>
      <Navbar />
      <Introduction />
      <Projects />
      <Contact />
    </div>
  );
}
