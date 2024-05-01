import { Box, Container, Dialog, DialogContent, Grid, IconButton, Tooltip } from "@mui/material";
import ReactLenis from "@studio-freight/react-lenis";
import gsap from "gsap";
import { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import CloseIcon from '@mui/icons-material/Close';

export default function GridViewImages() {
    const imageCount = 83
    const columns = 4;

    const imagesArr = [...Array(imageCount).keys()];

    const [images, setImages] = useState([[]]);

    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(0);

    useEffect(() => {
        shuffleArray(imagesArr)
        let mtrx = createImageMapping(imageCount, columns);
        setImages(mtrx);
    }, [])

    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }

    function createImageMapping(n, col) {
        let res = [];

        for (let i = 0; i < col; i++) {
            let row = [];
            for (let j = 0; j < n; j += col) {
                if (i + j <= n) {
                    row.push(imagesArr[i + j]);
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

    function showImage(index) {
        setSelected(index)
        setOpen(true)
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
                                                    onClick={() => {
                                                        if (window.innerWidth > 600) {
                                                            showImage(item)
                                                        }
                                                    }}
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

            <Dialog open={open} maxWidth="lg" onClose={() => setOpen(false)}>
                <DialogContent>
                    <IconButton onClick={() => setOpen(false)} style={{
                        backgroundColor: 'white',
                        position: 'absolute',
                        top: 4,
                        right: 4,
                    }}>
                        <CloseIcon />
                    </IconButton>
                    <img width={'100%'} style={{
                        maxHeight: '80vh'
                    }} src={"/wedding/" + selected + ".jpg"} />
                </DialogContent>
            </Dialog>
        </>

    )
}

function CustomImage(props) {
    return <><div
        onClick={props.onClick}
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
