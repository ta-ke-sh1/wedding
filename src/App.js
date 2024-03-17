import Landing from "./parts/landing";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import "./styles/main.scss";
import "./styles/fonts.scss";
import "./styles/nav.scss";
import "./styles/admin.scss"
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Routes, Route } from "react-router-dom";
import Main from "./main";
import Admin from "./admin";
gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <Routes>
      <Route path="*" element={<Main />} />
      <Route path="/invitation/:id" element={<Main />} />
      <Route path="secret/admin" element={<Admin />} />
    </Routes>
  );
}

export default App;
