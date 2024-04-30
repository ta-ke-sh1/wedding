import { Grid } from "@mui/material";
import ReactLenis from "@studio-freight/react-lenis";
import gsap from "gsap";
import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

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
            duration: 0.3,
            ease: 'power',
            filter: 'grayscale(0%)'
        })
    }

    function onMouseLeave(index) {
        const elem = document.getElementById("grid-item-" + index)
        gsap.to(elem, {
            duration: 0.3,
            ease: 'power',
            filter: 'grayscale(100%)'
        })
    }


    return (
        <>
            <ReactLenis
                root
                options={{
                    lerp: 0.05,
                    syncTouch: true,
                    wheelMultiplier: 0.5,
                    touchMultiplier: 0.4,
                }} >

                <Grid container spacing={3} className="grid-image-container" sx={{
                    height: 'fit-content'
                }}>
                    {
                        images.map((colData) => {
                            return (
                                <Grid item xs={12} md={parseInt(12 / columns)}>
                                    {
                                        colData.map((item) => {
                                            return (<>
                                                <CustomImage
                                                    onMouseEnter={() => onMouseEnter(item)}
                                                    onMouseLeave={() => onMouseLeave(item)}
                                                    id={"grid-item-" + item}
                                                    width={'100%'}
                                                    height={'auto'}
                                                    src={"/wedding/" + item + ".jpg"}
                                                    style={{
                                                        filter: window.innerWidth < 1000 ? 'grayscale(0%)' : 'grayscale(100%)',
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
            </ReactLenis>
        </>

    )
}

function CustomImage(props) {
    return <><div
        id={props.id}
        onMouseEnter={props.onMouseEnter}
        onMouseLeave={props.onMouseLeave}
        style={{
            ...props.style
        }}>
        <LazyLoadImage
            effect="blur"
            height={props.height}
            src={props.src} // use normal <img> attributes as props
            width={props.width} />
    </div></>
}
