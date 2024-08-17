import React, {useRef, useEffect} from "react"
import {gsap} from "gsap"


const Loading = () => {
  const mainRef = useRef();
  const lightCyanSlider = useRef();

  

  useEffect(() => {
    const ctx = gsap.context((self) => {
      const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

      tl.to(".lightCyan-slider", {
        x: "-10%",
        duration: 1,
      });
      
      tl.to(
        ".persianGreen-slider",
        {
          x: "-20%",
          duration: 1.5,
        },
        "-=1"
      );
      
      tl.to(
        ".white-slider",
        {
          x: "-30%",
          duration: 1.5,
        },
        "-=1"
      );
      
      tl.to(".hide", {
        x: "0%",
        duration: 2,
        opacity: 1,
      });
      
      tl.to(".preloader", {
        x: "200%",
        duration: 3,
      });
      
      tl.fromTo(
        "nav",
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1,
        },
        "-=2"
      );
      
      tl.fromTo(
        ".hero-content",
        {
          opacity: 0,
          y: -20,
        },
        {
          opacity: 1,
          duration: 1,
          y: 0,
        },
        "-=1.5"
      );
      
    }, mainRef);
    return () => ctx.revert();
  }, []);

    return (
        <div className="" ref={mainRef}>
  {/* Intro */}
  <div className="preloader">
    <div className="prl-logo">
      <h1 className="hide"> FULLSCREEN TRIANGLE </h1>
    </div>
    <div className="lightCyan-slider" />
    <div className="persianGreen-slider" />
    <div className="white-slider" />
  </div>
  {/*Hero*/}
  <section>
    <nav>
      <a className="logo" href="index.html">
        Excluded From Heaven
      </a>
      <svg className="logo" version="1.2" height="300" width="600" xmlns="http://www.w3.org/2000/svg"
        viewport="0 0 60 60" xmlns:xlink="http://www.w3.org/1999/xlink">
    
        <path  stroke="rgba(155,55,255,0.4)" fill="none"stroke-width="3"stroke-linejoin="round"
              d="
                M0,90L150,90M150,90Q158,60 162,87T167,95 170,88 173,92t6,35 7,-60T190,127 197,107s2,-11 10,-10 1,1 8,-10T219,95c6,4 8,-6 10,-17s2,10 9,11h110
                " 
              /> 
        <path  id="longbeat"style="stroke:#00AEAA; fill:none;stroke-width:1;stroke-linejoin:round"
              d="
                M0,90L150,90M150,90Q158,60 162,87T167,95 170,88 173,92t6,35 7,-60T190,127 197,107s2,-11 10,-10 1,1 8,-10T219,95c6,4 8,-6 10,-17s2,10 9,11h110
                " 
              /> 
          <rect x="-3" y="-4" height="8" width="6" rx="20" ry="20"fill="red">
         <animateMotion dur="2s" repeatCount="indefinite">
                 <mpath xlink:href="#longbeat"/>
              </animateMotion>
        
      </rect>               
    </svg>
    </nav>
    <div className="hero-content">
      <h2>Be the one we need</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem culpa
        vero quae perferendis molestiae exercitationem nemo atque veritatis
        ratione rem dolore quibusdam quia, a totam quidem nostrum iusto!
        Reiciendis, rem.
      </p>
      <button>Fullscreen</button>
    </div>
  </section>
</div>

    )
}