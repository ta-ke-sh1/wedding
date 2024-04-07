import { Box } from "@mui/material";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Landing(props) {
  const text1 = useRef(null);
  const text2 = useRef(null);
  const landingImg = useRef();

  const h1Style = {
    fontFamily: "italic",
    textAlign: "center",
    lineHeight: "72px",
    fontSize: "36px",
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(text1.current, {
        y: "100%",
      });
      gsap.set(text2.current, {
        y: "100%",
      });

      gsap.to(landingImg.current, {
        scrollTrigger: {
          trigger: landingImg.current,
          scrub: true,
          start: "top center",
          end: () => {
            let height = window.innerHeight;
            return `+=${height * 1.6}px`;
          },
        },
        backgroundPosition: window.innerWidth < 1000 ? "90% 57%" : "0% 57%",
      });

      gsap.to(text1.current, {
        delay: 4.5,
        duration: 2,
        y: "0%",
        ease: "power4",
      });
      gsap.to(text2.current, {
        delay: 4.75,
        duration: 2,
        y: "0%",
        ease: "power4",
      });
    }, []);

    return function () {
      ctx.revert();
    };
  }, []);

  return (
    <>
      <div className="full-view section" style={{ height: "100vh", minHeight: "1000px" }}></div>
      <div
        ref={landingImg}
        className="full-view absolute-position"
        style={{
          height: "100dvh",
          left: 0,
          top: 0,
          overflowX: "hidden",
          backgroundRepeat: "none",
          backgroundSize: "cover",
          backgroundImage: "linear-gradient( rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.2) ), url(/banner.jpg)",
          boxShadow: "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
        }}
      >
        <div
          className="center-position"
          style={{
            top: "45%",
          }}
        >
          <Box
            display="flex"
            flexDirection={"column"}
            justifyContent="center"
            alignItems="center"
            sx={{
              minWidth: "400px",
            }}
          >
            <div className="wrapper-text">
              <div
                ref={text1}
                style={{
                  ...h1Style,
                  color: "white",
                  wordSpacing: "2px",
                }}
              >
                Thiệp mời
              </div>
            </div>

            <img
              src={"/title.png"}
              width={"95%"}
              style={{
                userSelect: "none",
              }}
            />
            <div className="wrapper-text">
              <div
                ref={text2}
                style={{
                  ...h1Style,
                  color: "white",
                  wordSpacing: "2px",
                }}
              >
                17 . 04 . 24
              </div>
            </div>

            {props.invitation.name ? (
              <>
                <div
                  style={{
                    marginTop: "10px",
                    color: "white",
                    wordSpacing: "2px",
                    fontSize: "24px",
                  }}
                >
                  Gửi:
                </div>
                <div
                  style={{
                    marginTop: "10px",
                    color: "white",
                    wordSpacing: "2px",
                    fontSize: "24px",
                  }}
                >
                  <span
                    style={{
                      marginLeft: "5px",
                      padding: "5px 10px 0px 5px",
                      borderBottom: "1px solid white",
                    }}
                  >
                    {props.invitation.name}
                  </span>
                </div>
              </>
            ) : (
              <></>
            )}
          </Box>
        </div>
      </div>
    </>
  );
}
