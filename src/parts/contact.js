import { Grid } from "@mui/material";

export default function Contact() {
  return (
    <>
      <div
        style={{
          marginTop: '240px',
          width: "100vw",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            fontSize: "52px",
            marginBottom: "50px",
          }}
        >
          Lễ Thành Hôn
        </h1>
        <Grid container spacing={4}>
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
                <div
                  style={{
                    marginBottom: "30px",
                    minWidth: "250px",
                    height: "30vh",
                    width: "30vw",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundImage: "url(/images/groom.jpg)",
                  }}
                ></div>
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
                  style={{
                    marginBottom: "30px",
                    minWidth: "250px",
                    height: "30vh",
                    width: "30vw",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundImage: "url(/images/bride.jpg)",
                  }}
                ></div>
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
