import { useState } from "react";

export default function Navbar(props) {
  const [current, setCurrent] = useState(0);

  const handleScroll = () => {};

  return (
    <div className="nav-bar">
      <div className="nav-item">
        <div className="content" onClick={() => props.handleScroll()}>
          About
        </div>
      </div>
      <div className="nav-item">
        <div className="content" onClick={() => props.handleScroll()}>
          Location
        </div>
      </div>
      <div className="nav-item">
        <div className="content" onClick={() => props.handleScroll()}>
          RSVP
        </div>
      </div>
      <div className="nav-item">
        <div className="content" onClick={() => props.handleScroll()}>
          Galleria
        </div>
      </div>
    </div>
  );
}
