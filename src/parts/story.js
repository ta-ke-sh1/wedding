import { Grid } from "@mui/material";
import { Parallax } from "react-scroll-parallax";

export default function Story() {
  const pStyle = {
    textAlign: "center",
    marginBottom: "25px",
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
          marginTop: "100px",
          height: "fit-content",
          width: "100vw",
          minHeight: {
            xs: "800px",
            md: "600px"
          }
        }}
      >
        <Grid
          sx={{
            width: "100%",
            position: "relative",
            minHeight: {
              xs: "700px",
              md: "600px"
            },
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
                backgroundImage: "url(/images/5.jpg)",
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
            minHeight: "800px",
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
              top: "40%",
              padding: "0px 50px",
              width: "80%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <p style={pStyle} className="bodyText">
              Chúng mình lần đầu gặp nhau vào một ngày Hà Nội sang thu, khi tiết trời se se lạnh, những tia nắng nhẹ trong vắt len lỏi nơi góc sân trường.
            </p>
            <p style={pStyle} className="bodyText">
              Bẵng đi một năm sau đó, cũng vẫn vào một ngày trời thu, chúng mình gặp lại nhau, như thể mọi thứ đã được sắp đặt từ trước. Cả hai có cơ hội được làm việc, trò chuyện để hiểu thêm về nhau, và câu chuyện tình yêu cũng bắt đầu nở rộ từ đó.
            </p>
            <p style={pStyle} className="bodyText">
              2000 ngày yêu.
            </p>
            <p style={pStyle} className="bodyText">
              Một con số không quá lớn, nhưng đủ để chúng mình hiểu thế nào là yêu, để chúng mình thêm nâng niu và trân quý từng khoảnh khắc bên nhau. Cả hai đã chứng kiến nhau trưởng thành, cùng nắm tay nhau đi qua mọi nỗi buồn, niềm vui của những năm tháng tuổi trẻ.
            </p>
            <p style={pStyle} className="bodyText">
              Cảm ơn chúng mình vì đã biến những điều nhỏ bé trở nên diệu kì. Cảm ơn chúng mình đã khiến mọi điều phức tạp trở nên giản đơn. Cảm ơn chúng mình đã dùng sự dịu dàng để ôm ấp những ngày nắng, và dùng sự bao dung để che chở nhau đi qua những ngày mưa.
            </p>
            <p style={pStyle} className="bodyText">
              Mong anh và em có thể cùng nhau đi đến nhiều nơi, cùng khám phá những điều nhỏ bé bình dị, cùng cố gắng vì những ấp ủ cho tương lai sau này. Mong anh và em sẽ luôn nắm tay kiên định bước về phía trước, để cùng nhau viết tiếp câu chuyện của 2000 ngày yêu.
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
                backgroundImage: "url(/images/4.jpg)",
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
                <img height={"190px"} src={"/garment/rose.png"} />
              </Parallax>
            </div>
          </Parallax>
        </Grid>
      </Grid>
    </div>
  );
}
