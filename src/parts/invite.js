import { Box } from "@mui/material";


export default function Invite() {
    return (
        <div style={{
            height: '100vh',
            position: 'relative'
        }}>
            <div className="center-position">
                <Box
                    display="flex"
                    flexDirection={"column"}
                    justifyContent="center"
                    alignItems="center">
                    <img src="/logo.png" width={'100%'} style={{
                        userSelect: 'none',
                    }} />
                    <h1 style={{
                        textAlign: 'center',
                        fontFamily: "regular",
                        lineHeight: '48px',
                        fontSize: '36px',
                        marginBottom: '20px'
                    }}>welcome you to attend <br /> our journey's beginning</h1>
                </Box>
            </div>
        </div>
    )
}