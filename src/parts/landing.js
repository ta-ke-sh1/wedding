import { Box } from "@mui/material";

export default function Landing(props) {
  const h1Style = {
    fontFamily: "italic",
    textAlign: "center",
    lineHeight: "72px",
    fontSize: "36px",
  };

  return (
    <>
      <div className="full-view section" style={{ height: "100vh", minHeight: "1000px" }}></div>
      <div
        className="full-view absolute-position"
        style={{
          minHeight: "1000px",
          height: "100vh",
          left: 0,
          top: 0,
          overflowX: "hidden",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundImage: "linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url(/banner.jpg)",
          boxShadow: "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
        }}
      >
        <div
          className="center-position"
          style={{
            top: "45%",
          }}
        >
          <Box display="flex" flexDirection={"column"} justifyContent="center" alignItems="center">
            <div
              style={{
                ...h1Style,
                color: "white",
                wordSpacing: "2px",
              }}
            >
              Thiệp mời
            </div>
            <img
              src={"/title.png"}
              width={"95%"}
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
            {
              props.invitation.name ? <div
                style={{
                  minWidth: '340px',
                  marginTop: '10px',
                  color: "white",
                  wordSpacing: "2px",
                  fontSize: "24px",
                }}
              >
                Gửi: <span style={{
                  marginLeft: '5px',
                  padding: '5px 10px 0px 5px',
                  borderBottom: '1px solid white'
                }}>{props.invitation.name}</span>
              </div> : <></>
            }
          </Box>
        </div>
      </div>
    </>
  );
}
