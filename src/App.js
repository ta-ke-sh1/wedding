import "./styles/main.scss";
import "./styles/fonts.scss";
import "./styles/nav.scss";
import "./styles/preloader.scss";
import "./styles/admin.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Routes, Route, Navigate } from "react-router-dom";
import Main from "./main";
import Admin from "./admin";
gsap.registerPlugin(ScrollTrigger);


function App() {
  return (
    <Routes>
      <Route path="*" element={<Navigate replace to="/invitation/home" />} />
      <Route path="/invitation/:id" element={<Main />} />
      <Route path="secret/admin" element={<Admin />} />
    </Routes>
  );
}

export default App;
