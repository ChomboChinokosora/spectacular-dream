import React from 'react';

const styles = {
  svg: {
    width: '100%',
    height: '100%',
  },
  pulsar: {
    strokeDasharray: 281,
    animation: 'dash 2.5s infinite linear forwards',
  },
  jugular: {
    strokeDasharray: 497,
    animation: 'dash 1.4s infinite ease forwards',
  },
  bleed: {
    strokeDasharray: 437,
    animation: 'dash 1.2s infinite ease-out',
  },
  flat: {
    strokeDasharray: 814,
    animation: 'dash 10s infinite linear',
  },
  '@keyframes dash': {
    from: {
      strokeDashoffset: 814,
    },
    to: {
      strokeDashoffset: -814,
    },
  },
};

const Logo = () => {
  return (
    <div className='frame_links'>
     
      <svg version="1.2" height="300" width="600" xmlns="http://www.w3.org/2000/svg"
           viewBox="0 0 60 60" xmlnsXlink="http://www.w3.org/1999/xlink">
        <path stroke="rgba(155,55,255,0.4)" fill="none" strokeWidth="3" strokeLinejoin="round"
              d="M0,90L150,90M150,90Q158,60 162,87T167,95 170,88 173,92t6,35 7,-60T190,127 197,107s2,-11 10,-10 1,1 8,-10T219,95c6,4 8,-6 10,-17s2,10 9,11h110" /> 
        <path id="longbeat" style={{stroke: '#00AEAA', fill: 'none', strokeWidth: 1, strokeLinejoin: 'round'}}
              d="M0,90L150,90M150,90Q158,60 162,87T167,95 170,88 173,92t6,35 7,-60T190,127 197,107s2,-11 10,-10 1,1 8,-10T219,95c6,4 8,-6 10,-17s2,10 9,11h110" /> 
        <rect x="-3" y="-4" height="8" width="6" rx="20" ry="20" fill="red">
          <animateMotion dur="2s" repeatCount="indefinite">
            <mpath xlinkHref="#longbeat"/>
          </animateMotion>
        </rect>               
      </svg>
    </div>
  );
};

export default Logo;