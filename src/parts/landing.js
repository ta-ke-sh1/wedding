import { Box } from "@mui/material";

export default function Landing() {
  const h1Style = {
    fontFamily: "italic",
    textAlign: "center",
    lineHeight: "72px",
    fontSize: "36px",
  };

  return (
    <>
      <div className="full-view" style={{ height: '100vh' }}></div>
      <div
        className="full-view absolute-position"
        style={{
          height: '100vh',
          left: 0,
          top: 0,
          overflowX: "hidden",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundImage: "linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url(/banner.jpg)",
        }}
      >
        <div className="center-position">
          <Box display="flex" flexDirection={"column"} justifyContent="center" alignItems="center">
            <img
              src={"/title.png"}
              width={"100%"}
              style={{
                userSelect: "none",
              }}
            />
            <div
              style={{
                ...h1Style,
                color: "white",
                wordSpacing: "2px",
              }}
            >
              17 . 04 . 24
            </div>
          </Box>
        </div>
      </div>
    </>
  );
}
