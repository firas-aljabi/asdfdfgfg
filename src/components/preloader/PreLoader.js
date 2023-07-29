import React, { useEffect } from "react";
import "./preloader.css";
import { preLoaderAnim } from "../../animations";
import O from "../../assets/o.png";
import R from "../../assets/r.png";
import Y from "../../assets/y.png";
import Z from "../../assets/z.png";
import E from "../../assets/e.png";
import Logo from "../../assets/a1 1.png";
import Photo from "../../assets/preload.png";
import Sound from "../../assets/Skillet - Whispers in the Dark (320).mp3";
import useSound from "use-sound";

function PreLoader() {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="preloader  flex-col relative ">
      <div className=" absolute top-5 left-5">
        <img src={Logo} alt="" className=" w-32" />
      </div>
      <div className=" absolute top-5 right-0">
        <img src={Photo} alt="" className=" w-72" />
      </div>
      <div className="texts-container ">
        <span>
          <img src={O} alt="" className="w-36" />
        </span>
        <span>
          <img src={R} alt="" className="w-20" />
        </span>
        <span>
          <img src={Y} alt="" className="w-20" />
        </span>
        <span>
          <img src={Z} alt="" className="w-24" />
        </span>
        <span>
          <img src={E} alt="" className=" w-32" />
        </span>
      </div>
      <p className="py-2 font-medium text-white/75  ">Asian Fusion Food</p>
    </div>
  );
}

export default PreLoader;
