import { Box, Grid } from "@mui/material";

export function Invitation() {
  const h1Style = {
    fontFamily: "italic",
    textAlign: "center",
    lineHeight: "38px",
    fontSize: "36px",
  };

  const pStyle = {
    textAlign: "center",
    lineHeight: "28px",
    fontSize: "20px",
    maxWidth: "380px",
  };

  return (
    <Grid
      container
      alignItems="center"
      justify="center"
      sx={{
        width: "100vw",
        padding: "120px 0",
      }}
    >
      <Grid sx={{ width: "100%", marginBottom: "40px", marginTop: "40px" }} item sm={12} md={6}>
        <Box display="flex" flexDirection={"column"} justifyContent="center" alignItems="center">
          <iframe
            title="map-to-venue"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6365.13698448108!2d105.82689714171673!3d20.96945411566573!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135acf8cb3861d9%3A0xd294605a751a1c4a!2zS2jDoWNoIHPhuqFuIE3GsOG7nW5nIFRoYW5oIEdyYW5kIEjDoCBO4buZaQ!5e0!3m2!1svi!2s!4v1710251388680!5m2!1svi!2s"
            width="90%"
            height="420px"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box>
      </Grid>
      <Grid sx={{ width: "100%" }} item sm={12} md={6}>
        <Box display="flex" flexDirection={"column"} justifyContent="center" alignItems="center">
          <h1
            style={{
              lineHeight: "54px",
              fontSize: "52px",
              marginBottom: "25px",
            }}
          >
            Save the date
          </h1>
          <p style={pStyle}>
            Trân trọng kính mời tới dự lễ
            <br />
            thành hôn của hai chúng tôi vào
          </p>
          <h1 style={h1Style}>ngày 17 tháng 4 năm 2024</h1>
          <p style={pStyle}>Trung tâm tiệc cưới Mường Thanh Grand, CC2 Linh Đàm, Hoàng Mai, Hà Nội</p>
        </Box>
      </Grid>
    </Grid>
  );
}
