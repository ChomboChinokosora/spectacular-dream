import React, {useRef, useEffect} from "react"
import {gsap} from "gsap"


const Loading = () => {

    return (
        <>
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
      <h2>Lets go on an adventure.</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem culpa
        vero quae perferendis molestiae exercitationem nemo atque veritatis
        ratione rem dolore quibusdam quia, a totam quidem nostrum iusto!
        Reiciendis, rem.
      </p>
      <button>Explore</button>
    </div>
  </section>
</>

    )
}