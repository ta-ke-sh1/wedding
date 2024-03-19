import { Box, Grid } from "@mui/material";

export function WeddingCard(props) {
  const h1Style = {
    fontFamily: "italic",
    textAlign: "center",
    lineHeight: "38px",
    fontSize: "36px",
    margin: "5px",
  };

  const h2Style = {
    fontFamily: "italic",
    textAlign: "center",
    lineHeight: "26px",
    fontSize: "30px",
    margin: "5px",
  };

  const pStyle = {
    textAlign: "center",
    lineHeight: "28px",
    fontSize: "20px",
    maxWidth: "380px",
    margin: "5px",
  };

  return (
    <Grid
      id="rsvp"
      container
      alignItems="center"
      justify="center"
      rowSpacing={6}
      sx={{
        marginLeft: "2.5vw",
        width: "95vw",
        marginTop: "80px",
        paddingTop: "80px",
      }}
    >
      <Grid sx={{ width: "100%", marginBottom: "40px" }} item sm={12} md={12}>
        <Box display="flex" flexDirection={"column"} justifyContent="center" alignItems="center">
          <iframe
            title="map-to-venue"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6365.13698448108!2d105.82689714171673!3d20.96945411566573!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135acf8cb3861d9%3A0xd294605a751a1c4a!2zS2jDoWNoIHPhuqFuIE3GsOG7nW5nIFRoYW5oIEdyYW5kIEjDoCBO4buZaQ!5e0!3m2!1svi!2s!4v1710251388680!5m2!1svi!2s"
            width="100%"
            height="200px"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box>
      </Grid>
      <Grid sx={{ width: "100%" }} item sm={12} md={12}>
        <Box display="flex" flexDirection={"column"} justifyContent="center" alignItems="center">
          <h1
            style={{
              marginTop: "-30px",
              lineHeight: "54px",
              fontSize: "52px",
              marginBottom: "10px",
            }}
          >
            Save the date
          </h1>
          <p style={pStyle}>Trân trọng kính mời</p>
          <h1 style={h1Style}>{props.invitation.name}</h1>
          <p style={pStyle}>tới dự lễ thành hôn của hai chúng tôi vào lúc</p>
          <div
            style={{
              width: "95%",
              margin: "15px 0",
              maxWidth: "650px",
              minWidth: "540px"
            }}
          >
            <Grid container spacing={0}>
              <Grid item xs={4} sm={4} md={4}>
                <Box
                  sx={{
                    padding: "5px 0",
                  }}
                  flexDirection={"column"}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <p style={h2Style}>11 giờ 30'</p>
                </Box>
              </Grid>
              <Grid item xs={4} sm={4} md={4}>
                <Box
                  sx={{
                    padding: "5px 0",
                    borderLeft: "1px solid black",
                    borderRight: "1px solid black",
                  }}
                  flexDirection={"column"}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <p style={{ ...h2Style }}>Thứ tư</p>
                </Box>
              </Grid>
              <Grid item xs={4} sm={4} md={4}>
                <Box
                  sx={{
                    padding: "5px 0",
                  }}
                  flexDirection={"column"}
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <p style={{ ...h2Style }}>17. 04. 2024</p>
                </Box>
              </Grid>
            </Grid>
          </div>
          <p style={pStyle}>tại: Trung tâm tiệc cưới </p>
          <h1 style={h1Style}>Mường Thanh Grand</h1>
          <p style={pStyle}>CC2 Linh Đàm, Hoàng Mai, Hà Nội</p>
        </Box>
      </Grid>
    </Grid>
  );
}
