import { useLenis } from "@studio-freight/react-lenis";
import { useEffect, useState } from "react";

export default function Navbar(props) {
  const [current, setCurrent] = useState(0);

  useEffect(() => { }, []);

  return (
    <div className="nav-bar">
      <div className="nav-item" href="#landing">
        <div className="content" onClick={() => props.handleScroll("#landing")}>
          Home
        </div>
      </div>
      <div className="nav-item" href="#contact">
        <div className="content" onClick={() => props.handleScroll("#contact")}>
          About
        </div>
      </div>
      <div className="nav-item" href="#rsvp">
        <div className="content" onClick={() => props.handleScroll("#rsvp")}>
          RSVP
        </div>
      </div>
      <div className="nav-item" href="#galleria">
        <div className="content" onClick={() => props.handleScroll("#galleria")}>
          Galleria
        </div>
      </div>
    </div>
  );
}
