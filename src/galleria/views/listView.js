import { Container } from "@mui/material";

export default function ListViewImages() {
    const images = [...Array(40).keys()];

    return (
        <>
            <Container className="center-position" maxWidth="md" style={{
                height: '50vh',
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
                    <div>

                    </div>
                </div>
            </Container>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'nowrap',
                position: 'fixed',
                bottom: '20px',
                left: '20px',
                width: '100%',
                height: '120px'
            }}>
                {
                    images.map((index) => {
                        return (
                            <Thumbnail index={index} />
                        )
                    })
                }
            </div>
        </>
    )
}

function Thumbnail(props) {
    return (
        <div style={{
            boxSizing: 'border-box',
            height: 'inherit',
            minWidth: '100px',
            backgroundColor: 'blue',
            marginRight: '30px'
        }}>

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