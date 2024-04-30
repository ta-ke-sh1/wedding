import { Grid } from "@mui/material";
import gsap from "gsap";
import { useEffect, useState } from "react";

export default function GridViewImages() {

    const [images, setImages] = useState([[]]);

    const columns = 4;

    useEffect(() => {
        let mtrx = createImageMapping(50, columns);
        setImages(mtrx);
    }, [])

    function createImageMapping(n, col) {
        let res = [];

        for (let i = 0; i < col; i++) {
            let row = [];
            for (let j = 0; j < n; j += col) {
                if (i + j <= n) {
                    row.push(i + j);
                }

            }
            res.push(row)
        }

        return res;
    }

    function onMouseEnter(index) {
        const elem = document.getElementById("grid-item-" + index)
        gsap.to(elem, {
            duration: 0.4,
            ease: 'power',
            filter: 'grayscale(0)'
        })
    }

    function onMouseLeave(index) {
        const elem = document.getElementById("grid-item-" + index)
        gsap.to(elem, {
            duration: 0.4,
            ease: 'power',
            filter: 'grayscale(40)'
        })
    }

    return (
        <Grid container spacing={3} className="grid-image-container">
            {
                images.map((colData) => {
                    return (
                        <Grid item xs={3}>
                            {
                                colData.map((item) => {
                                    return (<>
                                        <img
                                            onMouseEnter={() => onMouseEnter(item)}
                                            onMouseLeave={() => onMouseLeave(item)}
                                            id={"grid-item-" + item}
                                            width={'100%'} height={'auto'} src={"/wedding/" + item + ".jpg"} style={{
                                                filter: 'grayscale(20)',
                                                marginBottom: '2vmin'
                                            }} />
                                    </>)
                                })
                            }
                        </Grid>
                    )
                })
            }
        </Grid >
    )
}
