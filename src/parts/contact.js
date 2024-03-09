import { Grid } from "@mui/material";

export default function Contact() {
    return (
        <>
            <div
                style={{
                    marginTop: "50px",
                    width: "100vw",
                    minHeight: "100vh",
                    textAlign: "center",
                }}>
                <h1
                    style={{
                        lineHeight: "64px",
                        fontSize: "52px",
                        marginBottom: "20px",
                    }}>
                    Contact
                </h1>
                <Grid container spacing={4}>
                    <Grid item sm={3} xs={12}></Grid>
                    <Grid item sm={3} xs={12} sx={{ position: "relative" }}>
                        <div className="center-positioned">
                            <h1>Groom</h1>
                            <img width={"300px"} src={"/images/groom.jpg"} />
                        </div>
                    </Grid>
                    <Grid item sm={3} xs={12} sx={{ position: "relative" }}>
                        <div className="center-positioned">
                            <h1>Bride</h1>
                            <img width={"300px"} src={"/images/bride.jpg"} />
                        </div>
                    </Grid>
                    <Grid item sm={3} xs={12}></Grid>
                </Grid>
            </div>
        </>
    );
}
