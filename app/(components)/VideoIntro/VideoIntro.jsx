import React from "react";
import { NavBackground } from "../Global";

const VideoIntro = () => (
  <div className="relative w-full h-[650px] overflow-hidden">
    <video autoPlay muted loop playsInline style={{display: 'block', verticalAlign: 'middle', width: '100%', transform: 'translateY(-10%)'}}>
      <source src="http://localhost/accf-org/video/bg.mp4" type="video/mp4" />
      Your browser does not support HTML5 video.
    </video>
    <div className="absolute inset-0 flex items-center justify-end h-full" style={{background:'#0006'}}>
      <div className="flex justify-end items-center h-full w-full">
        <div className="md:w-1/2 text-white">
          <h3 style={{ fontFamily: 'Roboto', fontWeight: 300, lineHeight: '30px', fontSize: 31 }}>
            All citizens of assam can access cancer control services within their state.
          </h3>
          <hr className="my-4 border-white/60" />
          <h3 style={{ fontFamily: 'Roboto', fontWeight: 300, lineHeight: '30px', fontSize: 31 }}>
            Reduce the mortality and morbidity due to cancer through awareness, prevention and early detection.
          </h3>
        </div>
      </div>
    </div>
    <a href="#section2" style={{position: 'absolute',top: '75%', left: '10%'}}>
      <svg className="arrows">
        <path className="a1" d="M0 0 L30 32 L60 0"></path>
        <path className="a2" d="M0 20 L30 52 L60 20"></path>
        <path className="a3" d="M0 40 L30 72 L60 40"></path>
      </svg>
    </a>
  </div>
);

export default VideoIntro;
