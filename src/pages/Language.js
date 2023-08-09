import React, { useState, useEffect } from "react";

import Logo from "../assets/a1 1.png";
import Logoo from "../assets/Logo.png";
import {  useNavigate } from "react-router-dom";
import audio from "../assets/intero.mp3"
function Language() {
 const navigate=useNavigate()
 const playAudio = () => {
    audio.play();
  };


  return (
    <div className="= h-screen  flex-col relative ">
      <div className=" absolute top-5 right-5 hidden sm:visible">
        <img src={Logo} alt="" className=" w-32" />
      </div>
      <div className=" absolute top-5 left-5 hidden sm:visible">
        <img src={Logoo} alt="" className=" w-32" />
      </div>
   
      <div className="flex justify-center mx-auto ">
      <div className=" mt-[10%] ">
      <img src={Logoo} alt="" className=" w-52 mb-10 "  />
      <button className="bg-[#F4ECE5] w-[130%] h-16 mb-6 -ml-8 rounded-lg shadow-sm shadow-white" onClick={()=>{{localStorage.setItem('lan','en');
      const audioElement = new Audio(audio);
      audioElement.play();
      navigate('/home')}}}>
      <h2 className="text-[#2F2424] text-lg">English</h2>
      </button>
      <button
      className="bg-[#F4ECE5] w-[130%] h-16 -ml-8 rounded-lg shadow-sm shadow-white"
      onClick={() => {
        localStorage.setItem("lan", "ar");
        // Here, you can play the audio using the <audio> element
        const audioElement = new Audio(audio);
        audioElement.play();
        navigate('/home');
      }}
    >      <h2 className="text-[#2F2424] text-lg ">العربية</h2>
      </button>
      </div>
      </div>
    {/**  <p className="py-2 font-medium text-white/75  ">Asian Fusion Food</p>*/} 
    </div>
  );
}

export default Language;
