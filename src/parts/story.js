import { Box, Grid } from "@mui/material";

export default function Story() {
    const h1Style = {
        fontFamily: "italic",
        textAlign: "center",
        lineHeight: '64px',
        fontSize: '52px',
        marginBottom: '40px'
    }

    const pStyle = {
        textAlign: "center",
        lineHeight: '26px',
        fontSize: '16px',
        marginBottom: '40px'
    }

    const polaroidStyle = {
        borderRadius: '1px',
        border: '15px solid #fafafa',
        borderBottom: '70px solid #fafafa',
        boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
    }

    const bgImage = {
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
    }

    return (
        <>
            <Grid
                container
                sx={{
                    marginTop: '30px',
                    minHeight: '100vh',
                    height: 'fit-content',
                    width: '100vw',
                }}>
                <Grid sx={{ width: '100%', position: 'relative', minHeight: '820px', zIndex: 100 }} item sm={12} md={4}>
                    <div style={{
                        position: 'absolute',
                        left: '55%',
                        top: '52.5%',
                        width: '300px',
                        height: '360px',
                        backgroundImage: 'url(/images/2.jpg)',
                        transform: 'rotate(-20deg) translate(-50%, -50%)',
                        ...bgImage,
                        ...polaroidStyle
                    }}>
                    </div>
                    <div style={{
                        position: 'absolute',
                        left: '57.5%',
                        top: '52.5%',
                        width: '300px',
                        height: '360px',
                        backgroundImage: 'url(/images/3.jpg)',
                        transform: 'rotate(-7deg) translate(-50%, -50%)',
                        ...bgImage,
                        ...polaroidStyle
                    }}>
                    </div>
                </Grid>
                <Grid sx={{ width: '100%', minHeight: '700px', position: 'relative' }} item sm={12} md={4}>
                    <div style={{
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        padding: '50px',
                        width: '80%',
                        transform: 'translate(-50%, -50%)',
                    }}>
                        <h1 style={h1Style}>Our story</h1>
                        <p style={pStyle}>Elizabeth and Hudson met in 2009 during senior year of high school, during an Intro to Photography class. Students were assigned a project that required them to shoot architectural buildings throughout San Francisco. One afternoon, they ran into each other on the street - they were photographing the same building, just from different vantage points! - and decided to shoot together.
                        </p>

                        <p style={pStyle}>The afternoon turned to evening and ended with ice cream, where they talked until the shop closed. And the rest, as they say, is history.
                            In November, after dinner at Little Star (where they had their first "real" date!), Hudson surprised Elizabeth by proposing in Buena Vista Park, where they often take their dog Luna for walks.</p>
                    </div>
                </Grid>
                <Grid sx={{ width: '100%', position: 'relative', minHeight: '520px', zIndex: 100 }} item sm={12} md={4}>
                    <div style={{
                        position: 'absolute',
                        left: '50%',
                        top: '47.5%',
                        width: '300px',
                        height: '360px',
                        backgroundImage: 'url(/images/7.jpg)',
                        transform: 'rotate(6deg) translate(-50%, -50%)',
                        ...bgImage,
                        ...polaroidStyle
                    }}>
                    </div>
                </Grid>
            </Grid>
        </>

    )
}