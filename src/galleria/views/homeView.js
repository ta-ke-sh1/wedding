export default function HomeView() {
    return (
        <>
            <div className="" style={{
                position: 'fixed',
                top: '50%',
                left: '50%',
                transform: "translate(-50%, -50%)",
                zIndex: 100,
            }}>
                <div style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    width: '40vw',
                    minWidth: "320px"
                }} >
                    <div style={{
                        position: 'relative',
                        height: '360px',
                        width: '100%',
                        margin: '0 auto'
                    }}>
                        <div style={{
                            position: 'absolute',
                            left: '37.5%',
                            top: '55%',
                            transform: 'translate(-50%, -50%) rotate(-4deg)',
                            height: '260px',
                            width: '200px',
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundImage: 'url("/wedding/hn.jpg")',
                            border: '15px solid white',
                            borderBottom: '35px solid white',
                            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)'
                        }}></div>
                        <div style={{
                            position: 'absolute',
                            left: '60%',
                            top: '40%',
                            transform: 'translate(-50%, -50%) rotate(5deg)',
                            height: '260px',
                            width: '200px',
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundImage: 'url("/wedding/hp.jpg")',
                            border: '15px solid white',
                            borderBottom: '35px solid white',
                            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)'
                        }}></div>
                        <div style={{
                            position: 'absolute',
                            left: '72%',
                            top: '75%',
                            transform: 'translate(-50%, -50%) rotate(17deg)',
                            height: '200px',
                            width: '140px',
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundImage: 'url("/garment/rose.png")',
                        }}></div>
                    </div>
                    <div className="italic" style={{
                        marginTop: '30px',
                        fontSize: '44px',
                        marginBottom: "20px",
                        lineHeight: '42px',
                    }}>
                        Thank you,
                    </div>
                    <div className="italic" style={{
                        fontSize: '20px',
                        lineHeight: '32px',
                    }}>
                        “We would like to thank you for sharing in our wedding celebration. We are grateful for your presence, warm wishes, and your generous gift. We look forward to our future together and to making more memories with you.”
                    </div>
                    <div className="regular" style={{
                        fontSize: '20px',
                        marginTop: "20px",
                        lineHeight: '32px',
                    }}>
                        Thế Trung & Hà Phương <br />
                        30.04.2024
                    </div>
                </div>
            </div>
        </>
    )
}