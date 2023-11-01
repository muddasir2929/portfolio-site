import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Digital Marketing Expert",
          "Web Designer & Developer",
          "Custom Application Developer",
          "Igniting Business With Proven SEO, SEM, SMM, & Application Development 🚀",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 40,
      }}
    />
  );
}

export default Type;
