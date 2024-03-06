import { Box, Grid } from "@mui/material";

export function Invitation() {
    const h1Style = {
        fontFamily: "italic",
        textAlign: "center",
        lineHeight: '72px',
        fontSize: '36px'
    }

    const pStyle = {
        textAlign: "center",
        lineHeight: '32px',
        fontSize: '24px'
    }

    return (
        <Grid
            container
            alignItems="center"
            justify="center" sx={{
                marginTop: '30px',
                height: { sm: '90vh', md: '60vh', },
                width: '100vw',
            }}>
            <Grid sx={{ width: '100%', marginBottom: '40px', marginTop: '40px' }} item sm={12} md={6}>
                <Box display="flex"
                    flexDirection={"column"}
                    justifyContent="center"
                    alignItems="center">
                    <div style={{
                        width: '90%',
                        height: '420px',
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundImage: 'url(/images/6.jpg)'
                    }}></div>
                </Box>
            </Grid>
            <Grid sx={{ width: '100%' }} item sm={12} md={6}>
                <Box
                    display="flex"
                    flexDirection={"column"}
                    justifyContent="center"
                    alignItems="center"><h1 style={{
                        lineHeight: '64px',
                        fontSize: '52px',
                        marginBottom: '25px'
                    }}>Save the date</h1>
                    <p style={pStyle}>We are delighted to invite you to join</p>
                    <p style={pStyle}>our wedding celebration on</p>
                    <h1 style={h1Style}>17th April, 2024</h1>
                    <p style={pStyle}>Muong Thanh Grand Hotel Linh Dam </p>
                    <p style={pStyle}>142 Nghiem Xuan Yen</p>
                    <p style={pStyle}>Hoang Mai, Ha Noi</p>
                </Box>
            </Grid>
        </Grid>
    )
}