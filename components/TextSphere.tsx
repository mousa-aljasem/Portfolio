import React, { useEffect, useState } from "react";
import TagCloud from "TagCloud";
import "./TextSphere.css";

type Props = {};

function getWindowDimensions() {
  if (typeof window !== 'undefined') {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    }
  }
  
  return {
    width: 0,
    height: 0
  }
}

export default function TextSphere({}: Props) {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);

    return () => {
      let container = "#tagcloud1";
      let radius = 0;
      if (getWindowDimensions().width < 400) {
        radius = 150;
      } else if (getWindowDimensions().width < 600) {
        radius = 180;
      } else if (getWindowDimensions().width < 800) {
        radius = 230;
      } else {
        container = "#tagcloud2";
        radius = 400;
      }
      const texts = [
        "C#",
        ".NET",
        "Java",
        "SQL",
        "JavaScript",
        "jQuery",
        "HTML",
        "CSS",
        "C++",
        "Kotlin",
        "Swift",
        "Python",
        "PHP",
        "Git",
        "Node.js",
        "Flask",
        "React",
        "Next.js",
        "TypeScript",
        "Bootstrap",
        "Tailwind",
      ];
      const options = {
        radius: radius,
        maxSpeed: "fast",
        useHTML: true,
        keep: true,
      };

      TagCloud(container, texts, options);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <span
        id="tagcloud1"
        className="text-sm tracking-[2px] font-light decoration-primary-color text-primary-color"
      ></span>
      <span
        id="tagcloud2"
        className="text-1xl tracking-[5px] font-light decoration-primary-color text-primary-color"
      ></span>
    </>
  );
}
