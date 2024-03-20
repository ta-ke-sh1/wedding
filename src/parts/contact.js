import { Grid } from "@mui/material";
import { Parallax } from "react-scroll-parallax";

export default function Contact() {
  return (
    <>
      <div
        className="section"
        id="contact"
        style={{
          paddingTop: "140px",
          width: "100vw",
          textAlign: "center",
        }}
      >
        <h1
          className="title"
          style={{
            textAlign: "center",
            marginBottom: "50px",
          }}
        >
          Lễ Thành Hôn
        </h1>
        <Grid container rowSpacing={7}>
          <Grid item sm={12} md={2} xs={12}></Grid>
          <Grid item sm={12} md={4} xs={12} sx={{ position: "relative" }}>
            <div className="center-positioned">
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <div>
                  <div
                    className="polaroid-frame"
                    style={{
                      transform: "rotate(4deg)",
                      marginBottom: "30px",
                      minWidth: "250px",
                      height: "30vh",
                      width: "20vw",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundImage: "url(/images/groom.jpg)",
                    }}
                  >
                    <Parallax
                      translateY={["-10px", "-80px"]}
                      style={{
                        position: "absolute",
                        left: "-70px",
                        bottom: "-100px",

                        transform: "rotate(-4deg)",
                      }}
                    >
                      <img height={"230px"} src={"/garment/left.png"} />
                    </Parallax>
                  </div>
                </div>
                <h2>Chú rể</h2>
                <h1>Hà Thế Trung</h1>
                <p
                  style={{
                    lineHeight: "20px",
                  }}
                >
                  Số điện thoại: (+84) 818 16 1998
                  <br />
                  Email: ha.the.trung.1698@gmail.com
                </p>
              </div>
            </div>
          </Grid>
          <Grid item sm={12} md={4} xs={12} sx={{ position: "relative" }}>
            <div className="center-positioned">
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <div
                  className="polaroid-frame"
                  style={{
                    transform: "rotate(-4deg)",
                    marginBottom: "30px",
                    minWidth: "250px",
                    height: "30vh",
                    width: "20vw",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundImage: "url(/images/bride.jpg)",
                  }}
                >
                  <Parallax
                    translateY={["10px", "-120px"]}
                    style={{
                      position: "absolute",
                      right: "-90px",
                      bottom: "-110px",
                      transform: "rotate(2deg)",
                    }}
                  >
                    <img height={"180px"} src={"/garment/right.png"} />
                  </Parallax>
                </div>
                <h2>Cô dâu</h2>
                <h1>Hoàng Hà Phương</h1>
                <p
                  style={{
                    lineHeight: "20px",
                  }}
                >
                  Số điện thoại: (+84) 943 540 255 <br />
                  Email: phuongha.2510@gmail.com
                </p>
              </div>
            </div>
          </Grid>
          <Grid item sm={12} md={2} xs={12}></Grid>
        </Grid>
      </div>
    </>
  );
}
