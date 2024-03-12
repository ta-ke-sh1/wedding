import Landing from "./parts/landing";
import { ReactLenis } from "@studio-freight/react-lenis";
import "./styles/main.scss";
import "./styles/fonts.scss";
import { Invitation } from "./parts/weddingCard";
import Story from "./parts/story";
import Galleria from "./parts/galleria";
import Invite from "./parts/invite";
import Contact from "./parts/contact";

function App() {
    return (
        <ReactLenis
            root
            options={{
                lerp: 0.05,
                wheelMultiplier: 0.5,
                touchMultiplier: 0.5,
            }}
        >
            <main className="App">
                <Landing />
                <Contact />
                <Story />
                <Invitation />
                <Invite />
                <Galleria />
            </main>
            <div style={{
                textAlign: 'center',
                paddingBottom: '10px'
            }}>
                <p>2024© Design & developed by ta-ke-sh1</p>
            </div>

        </ReactLenis>
    );
}

export default App;
