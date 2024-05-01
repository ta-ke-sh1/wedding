import { Container, Grid, IconButton, ImageList, ImageListItem } from "@mui/material";
import { useRef, useState } from "react";

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import gsap from "gsap";



export default function ListViewImages() {
    const imageCount = 83

    const thumbnails = useRef()
    const images = [...Array(imageCount).keys()];

    const [current, setCurrent] = useState(0);

    const handleNext = (index) => {
        if (index === 69) return;
        setCurrent(index + 1)

        gsap.to(thumbnails.current, {
            x: `-= ${120}px`
        })

    }

    const handlePrevious = (index) => {
        if (index === 0) return;
        setCurrent(index - 1)

        gsap.to(thumbnails.current, {
            x: `+= ${120}px`
        })
    }

    return (
        <>
            <Container maxWidth="md" style={{
                position: 'absolute',
                top: '42%',
                left: '50%',
                transform: 'translate(-50%, -52.5%)',
                height: '70vh',
                padding: 0,
            }}>
                <div className="relative-position" style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    margin: 0,
                }}>
                    <div className="absolute-position" style={{
                        top: 10,
                        left: 10,
                        transform: 'rotate(90deg)'
                    }}>
                        <Bracket />
                    </div>
                    <div className="absolute-position" style={{
                        top: 10,
                        right: 10,
                        transform: 'rotate(180deg)'
                    }}>
                        <Bracket />
                    </div>
                    <div className="absolute-position" style={{
                        bottom: 10,
                        left: 10,
                        transform: 'rotate(0deg)'
                    }}>
                        <Bracket />
                    </div>
                    <div className="absolute-position" style={{
                        bottom: 10,
                        right: 10,
                        transform: 'rotate(-90deg)'
                    }}>
                        <Bracket />
                    </div>
                    <div className="absolute-position" style={{
                        bottom: 10,
                        right: 10,
                        transform: 'rotate(-90deg)'
                    }}>
                        <Bracket />
                    </div>
                    <div className="absolute-position italic" style={{
                        bottom: -20,
                        left: '50%',
                        fontWeight: 700,
                        transform: 'translateX(-50%)',
                        justifyContent: 'center',
                        alignItems: 'center',
                        display: 'flex',
                        fontSize: '19px',
                        minWidth: '300px'
                    }}>

                        <IconButton variant="contained" style={{
                            marginTop: '-5px',
                            marginRight: '20px'
                        }}>
                            <ArrowBackIcon onClick={() => handlePrevious(current)} />
                        </IconButton>

                        <span style={{
                            color: 'crimson',
                            marginRight: '8px'
                        }}>{current + 1}</span> / {imageCount}

                        <IconButton IconButton variant="contained" style={{
                            marginTop: '-5px',
                            marginLeft: '20px'
                        }}>
                            <ArrowForwardIcon onClick={() => handleNext(current)} />
                        </IconButton>

                    </div>
                    <div className="absolute-position italic" style={{
                        top: -10,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        fontSize: '19px',
                        textAlign: 'center',
                        minWidth: '300px'
                    }}>
                        Use the arrows to navigate
                    </div>
                    <Grid container spacing={0} className="absolute-position italic" style={{
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                        zIndex: 10,
                        width: '90%',
                        height: '90%',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <img width={'auto'} height={"95%"} style={{
                            maxWidth: '90vw',
                            maxHeight: '80vmin',
                            objectFit: 'cover',
                        }} src={"/wedding/" + current + ".jpg"} />
                    </Grid>
                </div>
            </Container >
            <div class="filmstrip" ref={thumbnails} style={{
                position: 'fixed',
                bottom: '40px',
                left: '20px',
                width: '8400px',
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'nowrap',

                    height: '120px'
                }}>
                    {
                        images.map((index) => {
                            return (
                                <Thumbnail onClick={() => {
                                    console.log(index)
                                    setCurrent(index)
                                }} height={"120px"} index={index} src={"/wedding/" + index + ".jpg"} current={current} />
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

function Thumbnail(props) {
    return (
        <div onClick={props.onClick} style={{
            boxSizing: 'border-box',
            height: 'inherit',
            marginRight: '20px',
            ...props.style,
            filter: props.index === props.current ? 'grayscale(0)' : 'grayscale(1)'
        }}>
            <LazyLoadImage
                style={{
                    objectFit: 'cover'
                }}
                effect="blur"
                height={props.height}
                src={props.src} // use normal <img> attributes as props
                width={"100px"} />
        </div>
    )
}

function Bracket(props) {
    return <svg xmlns="http://www.w3.org/2000/svg" height={"20px"} viewBox="0 0 58 58" style={{
        ...props.style,
        fill: '#FF5D73',
    }}>
        <g >
            <g >
                <polygon points="6 52 6 0 0 0 0 52 0 58 6 58 58 58 58 52 6 52" />
            </g>
        </g>
    </svg>
}