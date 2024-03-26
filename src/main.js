import Landing from "./parts/landing";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { WeddingCard } from "./parts/weddingCard";
import Story from "./parts/story";
import Galleria from "./parts/galleria";
import Invite from "./parts/invite";
import Contact from "./parts/contact";
import Navbar from "./components/navbar";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import FirebaseService from "./db/firestore";
import { usePreloader } from "./components/preloader";

export default function Main() {
  const preloader = usePreloader();
  const lenis = useLenis();
  const scrollRef = useRef(null);
  const [invitation, setInvitation] = useState({});
  const { id } = useParams();
  // in seconds
  const cacheExpiry = 500;


  useLayoutEffect(() => {
    window.addEventListener("load", () => {
      if (lenis) {
        lenis.stop();
        setTimeout(() => {
          lenis.start();
        }, 4000);
      }
      preloader.tl.play();
    });

  }, [lenis]);

  useEffect(() => {
    if (id === "home") {
      sessionStorage.clear();
      setInvitation({});
    } else if (id && id !== "home") {
      const sessionData = sessionStorage.getItem("invitationCache");
      if (sessionData) {
        const parsed = JSON.parse(sessionData);
        if (parsed.cacheExpiration < new Date().getTime() / 1000) {
          fetchInvitation(id);
        } else if (parsed.id !== id) {
          fetchInvitation(id);
        } else {
          setInvitation(parsed);
        }
      } else {
        fetchInvitation(id);
      }
    }

    return function () {
      window.removeEventListener("load", () => {
        console.log("Detached");
      });
    };
  }, [id]);

  const fetchInvitation = async (id) => {
    const firebaseService = new FirebaseService();
    await firebaseService.getReplyById(id).then((result) => {
      if (result) {
        result.cacheExpiration = new Date().getTime() / 1000 + cacheExpiry;
        sessionStorage.setItem("invitationCache", JSON.stringify(result));
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
            2024? Design & Developed by Trung.Ha
          </p>
        </div>
      </ReactLenis>
    </div>
  );
}
