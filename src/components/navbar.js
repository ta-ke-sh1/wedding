import { Grid } from "@mui/material";

export default function Navbar(props) {
  return (
    <div className="nav-bar">
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
