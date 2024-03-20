import Landing from "./parts/landing";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { WeddingCard } from "./parts/weddingCard";
import Story from "./parts/story";
import Galleria from "./parts/galleria";
import Invite from "./parts/invite";
import Contact from "./parts/contact";
import Navbar from "./components/navbar";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import FirebaseService from "./db/firestore";

export default function Main() {
  const lenis = useLenis();

  const scrollRef = useRef(null);

  const [invitation, setInvitation] = useState({});

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      fetchInvitation(id);
    }
  }, [id]);

  const fetchInvitation = (id) => {
    const firebaseService = new FirebaseService();
    firebaseService.getReplyById(id).then((result) => {
      if (result) {
        result.cacheExpiration = new Date().getTime() / 1000;
        localStorage.setItem("invitationCache", JSON.stringify(result));
        setInvitation(result);
      }
    });
  };

  const handleScroll = (id) => {
    lenis.scrollTo(id);
  };

  return (
    <div ref={scrollRef}>
      <ReactLenis
        root
        options={{
          syncTouch: true,
          lerp: 0.05,
          wheelMultiplier: 0.5,
          touchMultiplier: 0.4,
        }}
      >
        <div id="landing"></div>
        <Navbar handleScroll={handleScroll} />
        <main className="App">
          <Landing invitation={invitation} />
          <Contact />
          <Story />
          <WeddingCard invitation={invitation} />
          <Invite invitation={invitation} />
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
    </div>
  );
}
