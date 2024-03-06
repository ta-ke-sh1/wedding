import Landing from "./parts/landing";
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'
import "./styles/main.scss"
import "./styles/fonts.scss"
import Location from "./parts/location";
import { Invitation } from "./parts/invitation";
import Story from "./parts/story";

function App() {

  useLenis(() => {
    // called every scroll
  })

  return (
    <ReactLenis root options={{
      lerp: 0.05,
      wheelMultiplier: 0.5,
      touchMultiplier: 0.5
    }}>
      <main className="App">
        <Landing />
        <Invitation />
        <Story />
        <Location />
      </main>
    </ReactLenis>
  );
}

export default App;
