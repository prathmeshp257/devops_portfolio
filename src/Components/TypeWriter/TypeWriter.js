import React from "react";
import Typewriter from "typewriter-effect";

function TypeWriter() {
  return (
    <Typewriter
  options={{
    strings: [
      "DevOps Engineer",
      "Cloud Infrastructure Specialist",
      "CI/CD Pipeline Expert",
      "Kubernetes Administrator",
      "Automation Enthusiast",
      "AWS & Azure Professional",
      "Site Reliability Engineer",
    ],
    autoStart: true,
    loop: true,
    deleteSpeed: 50,
  }}
/>

  );
}

export default TypeWriter;