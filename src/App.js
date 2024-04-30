import "./styles/main.scss";
import "./styles/fonts.scss";
import "./styles/nav.scss";
import "./styles/preloader.scss";
import "./styles/admin.scss";
import "./styles/galleria.scss"
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Routes, Route, Navigate } from "react-router-dom";
import Main from "./main";
import Admin from "./admin";
import MainGalleria from "./galleria/main";
gsap.registerPlugin(ScrollTrigger);


function App() {
  return (
    <Routes>
      <Route path="*" element={<Navigate replace to="/" />} />
      <Route path="/invitation/:id" element={<Main />} />
      <Route path="secret/admin" element={<Admin />} />
      <Route path="/" element={<MainGalleria />} />
    </Routes>
  );
}

export default App;
