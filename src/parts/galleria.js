import { Grid } from "@mui/material";

export default function Galleria() {
    const bgImage = {
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
    }

    const images = [
        {
            id: 1,
            display: true,
        },
        {
            id: 2,
            display: true,
        },
        {
            id: 23,
        },
        {
            id: 4,
            display: true,
        }, {
            id: 5, display: true,
        }, {
            id: 6, display: true,
        }, {
            id: 7, display: true,
        }, {
            id: 82,
        }, {
            id: 9, display: true,
        }, {
            id: 102,
        }, {
            id: 11, display: true,
        }, {
            id: 12, display: true,
        }, {
            id: 13, display: true,
        },
    ]
    return (
        <>
            <div style={{
                marginTop: '50px',
                width: '100vw',
                textAlign: 'center'
            }}>
                <h1 style={{
                    lineHeight: '64px',
                    fontSize: '52px',
                    marginBottom: '20px'
                }}>Galleria</h1>
            </div>
            <div style={{
                padding: '40px'
            }}>
                <Grid container spacing={5}>
                    {
                        images.map((image) => {
                            return (
                                <Grid item xs={12} sm={6} md={4} key={"galleria-item-" + image.id}>
                                    <div style={{
                                        height: image.display ? '420px' : '0px',
                                        backgroundImage: "url(/images/" + image.id + ".jpg)",
                                        ...bgImage,
                                    }}>
                                    </div>
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </div>
        </>
    )
}