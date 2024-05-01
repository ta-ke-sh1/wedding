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
                    width: '30vw',
                    minWidth: "320px"
                }} >
                    <div style={{
                        position: 'relative',
                        height: '360px',
                        width: '100%',
                        margin: '0 auto',
                        transform: 'scale(0.9)'
                    }}>
                        <div style={{
                            position: 'absolute',
                            left: '37.5%',
                            top: '55%',
                            transform: 'translate(-50%, -50%) rotate(-4deg)',
                            height: '240px',
                            width: '180px',
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
                            height: '240px',
                            width: '180px',
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
                        marginTop: '0px',
                        fontSize: '38px',
                        marginBottom: "10px",
                        lineHeight: '42px',
                    }}>
                        Lời cảm ơn,
                    </div>
                    <div className="italic" style={{
                        fontSize: '16px',
                        lineHeight: '24px',
                    }}>
                        <p>
                            Ngày cưới của chúng con đã diễn ra tuyệt vời hơn bao giờ hết nhờ có sự hiện diện của những nụ cười, lời chúc và sự ủng hộ từ tất cả quý cô, chú, anh, chị, bạn bè.
                            Một lần nữa, thay mặt gia đình, chúng con cảm ơn tất cả quý cô, chú, anh, chị và bạn bè đã tới và gửi lời chúc từ mọi nơi.
                            Nếu có bất kỳ thiếu sót nào trong buổi lễ, chúng con hy vọng mọi người sẽ thông cảm và bỏ qua.
                        </p>
                        <p>
                            P/s: Ảnh lễ cưới ở Hải Phòng và Hà Nội có thể xem trực tiếp tại website này.<br />Nếu thiếu ảnh, mọi người hãy ấn vào icon Drive ở dưới ạ.
                        </p>
                    </div>
                    <div className="regular" style={{
                        fontSize: '18px',
                        marginTop: "20px",
                        lineHeight: '28px',
                    }}>
                        Thế Trung & Hà Phương <br />
                        30.04.2024
                    </div>
                </div>
            </div>
        </>
    )
}