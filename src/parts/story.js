import { Grid } from "@mui/material";
import { Parallax } from "react-scroll-parallax";

export default function Story() {
  const pStyle = {
    textAlign: "center",
    lineHeight: "26px",
    fontSize: "16px",
    marginBottom: "40px",
  };

  const bgImage = {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div id="story">
      <Grid
        container
        sx={{
          marginTop: "0px",
          height: "fit-content",
          width: "100vw",
        }}
      >
        <Grid
          sx={{
            width: "100%",
            position: "relative",
            minHeight: "500px",
            zIndex: 100,
          }}
          item
          sm={12}
          md={4}
        >
          <Parallax translateY={["350px", "280px"]} rotate={[-10, 5]}>
            <div
              className="polaroid-frame show-image"
              style={{
                position: "absolute",
                left: "52.5%",
                top: "55.5%",
                backgroundImage: "url(/images/2.jpg)",
                transform: "rotate(-20deg) translate(-50%, -50%)",
                ...bgImage,
              }}
            ></div>
          </Parallax>
          <Parallax translateY={["500px", "280px"]} rotate={[-10, 5]}>
            <div
              className="polaroid-frame show-image"
              style={{
                position: "absolute",
                left: "62.5%",
                top: "45.5%",
                backgroundImage: "url(/images/3.jpg)",
                transform: "rotate(-7deg) translate(-50%, -50%)",
                ...bgImage,
              }}
            ></div>
          </Parallax>
        </Grid>
        <Grid
          sx={{
            width: "100%",
            minHeight: "700px",
            position: "relative",
          }}
          item
          sm={12}
          md={4}
        >
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              padding: "0px 50px",
              width: "80%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <p style={pStyle}>
              Elizabeth and Hudson met in 2009 during senior year of high school, during an Intro to Photography class. Students were assigned a project that required them to shoot architectural buildings throughout San Francisco. One afternoon, they ran into each other on the
              street - they were photographing the same building, just from different vantage points! - and decided to shoot together.
            </p>

            <p style={pStyle}>
              The afternoon turned to evening and ended with ice cream, where they talked until the shop closed. And the rest, as they say, is history. In November, after dinner at Little Star (where they had their first "real" date!), Hudson surprised Elizabeth by proposing in
              Buena Vista Park, where they often take their dog Luna for walks.
            </p>
          </div>
        </Grid>
        <Grid
          sx={{
            width: "100%",
            position: "relative",
            zIndex: 100,
            minHeight: "400px",
          }}
          item
          sm={12}
          md={4}
        >
          <Parallax
            translateY={["0px", "70px"]}
            rotate={[15, -10]}
            style={{
              position: "absolute",
              left: "50%",
              top: "30.5%",
            }}
          >
            <div
              className="polaroid-frame show-image"
              style={{
                backgroundImage: "url(/images/7.jpg)",
                transform: " translate(-50%, -50%)",
                ...bgImage,
              }}
            >
              <Parallax
                translateY={["-60px", "-180px"]}
                style={{
                  position: "absolute",
                  left: "-70px",
                  bottom: "-200px",

                  transform: "rotate(-4deg)",
                }}
              >
                {" "}
                <img height={"190px"} src={"/garment/right.png"} />
              </Parallax>
            </div>
          </Parallax>
        </Grid>
      </Grid>
    </div>
  );
}
