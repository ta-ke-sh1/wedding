import { createContext, useRef, useLayoutEffect, useState, useContext, useMemo } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/all";
gsap.registerPlugin(TextPlugin);

const Preloader = createContext();

export function usePreloader() {
  return useContext(Preloader);
}

export function PreloaderWrapper({ children }) {
  const container = useRef(null);
  const preloader = useRef(null);
  const secondText = useRef(null)
  const mainText = useRef(null);

  const delay = 1;

  const [isLoaded, setLoaded] = useState(false);
  const [tl, setTl] = useState(gsap.timeline());

  useLayoutEffect(() => {
    gsap.set(mainText.current, {
      y: "100%",
    });
    gsap.set(secondText.current, {
      y: "100%",
    });

    const tl = gsap.timeline();
    const ctx = gsap.context(() => {
      tl.to(mainText.current, {
        delay: 0.4,
        duration: 1,
        y: "0%",
        ease: "power4",
      }).to(secondText.current, {
        delay: 0,
        duration: 1,
        y: "0%",
        ease: "power4",
      }).to(preloader.current, {
        // TODO: preloader animation here
        opacity: 0,
        delay: delay,
        duration: 1.2,
        ease: "power",
      }).to(preloader.current, {
        y: '-100%',
        duration: 0
      });
    }, container);

    const onPageLoad = () => {
      setLoaded(true);
      tl.play();
    };
    if (document.readyState === "complete") {
      onPageLoad();
    } else {
      window.addEventListener("load", onPageLoad, false);
      return () => {
        window.removeEventListener("load", onPageLoad);
      };
    }
    setTl(tl);

    return function () {
      ctx.revert();
    };
  }, [isLoaded]);

  let value = useMemo(() => ({ tl, isLoaded }), [tl, isLoaded]);

  return (
    <Preloader.Provider value={value}>
      <div
        style={{
          opacity: 1,
        }}
        scroll="no"
      >
        <div className="preloader" id="first-slide" ref={preloader}>
          <div className="wrapper">
            <div
              className="main-text"

            >
              <div className="wrapper-text">
                <div ref={mainText}>
                  Thế Trung{" "}
                  <span
                    className="italic"
                    style={{
                      fontFamily: "italic",
                    }}
                  >
                    {" "}
                    và{" "}
                  </span>
                  Hà Phương
                </div>
              </div>
              <div className="wrapper-text">
                <div ref={secondText}>
                  <span
                    className="italic"
                    style={{
                      fontFamily: "italic",
                    }}
                  >
                    17.04.24
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {children}
    </Preloader.Provider>
  );
}
