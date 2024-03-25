import { Grid } from "@mui/material";
import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function Navbar(props) {
  const navBar = useRef()

  useEffect(() => {
    gsap.set(navBar.current, {
      y: '-150%',
      duration: 0,
    })

    gsap.to(navBar.current, {
      delay: 4.25,
      y: '0%',
      ease: 'power',
      duration: 1.4
    })
  }, [])

  return (
    <div className="nav-bar" ref={navBar}>
      <Grid
        container
        sx={{
          width: "100%",
        }}
      >
        <Grid item xs={3}>
          <div className="nav-item" href="#landing">
            <div className="content" onClick={() => props.handleScroll("#landing")}>
              Home
            </div>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="nav-item" href="#contact">
            <div className="content" onClick={() => props.handleScroll("#contact")}>
              About
            </div>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="nav-item" href="#rsvp">
            <div className="content" onClick={() => props.handleScroll("#rsvp")}>
              RSVP
            </div>
          </div>
        </Grid>
        <Grid item xs={3}>
          <div className="nav-item" href="#galleria">
            <div className="content" onClick={() => props.handleScroll("#galleria")}>
              Galleria
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
