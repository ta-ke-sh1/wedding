import Landing from "./parts/landing";
import { ReactLenis } from "@studio-freight/react-lenis";
import "./styles/main.scss";
import "./styles/fonts.scss";
import "./styles/nav.scss";
import { Invitation } from "./parts/weddingCard";
import Story from "./parts/story";
import Galleria from "./parts/galleria";
import Invite from "./parts/invite";
import Contact from "./parts/contact";
import Navbar from "./components/navbar";

function App() {
  const handleScroll = () => {
    console.log("SCroll")
  };

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.05,
        wheelMultiplier: 0.5,
        touchMultiplier: 0.5,
      }}
    >
      <Navbar handleScroll={handleScroll} />
      <main className="App">
        <Landing />
        <Contact />
        <Story />
        <Invitation />
        <Invite />
        <Galleria />
      </main>
      <div
        style={{
          textAlign: "center",
          paddingBottom: "10px",
        }}
      >
        <p
          style={{
            lineHeight: "22px",
          }}
        >
          2024© Design & Developed by Trung.Ha
        </p>
      </div>
    </ReactLenis>
  );
}

export default App;
