"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const TypeWriter = () => {
  return (
    <TypeAnimation
      // Las tres frases tienen ~22 caracteres para que ninguna corte de línea
      // ni cambie el alto del bloque al rotar.
      sequence={[
        "Lorenzo Javier Colodro",
        1400,
        "a Full Stack Developer",
        1400,
        "an AWS Cloud Developer",
        1400,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
      className="text-white"
      style={{
        display: "inline-block",
        lineHeight: "1.2",
        overflowWrap: "break-word",
      }}
    />
  );
};

export default TypeWriter;
