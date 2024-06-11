import React, { useContext, useEffect, useState } from "react";

import "./About.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import { aboutData } from "../../data/aboutData";

function About() {
  const { theme } = useContext(ThemeContext);
  const [typedBio, setTypedBio] = useState("");

  useEffect(() => {
    const typingInterval = setInterval(() => {
      const nextCharIndex = typedBio.length + 1;
      const nextChar = aboutData.description3.substring(
        0,
        nextCharIndex % aboutData.description3.length
      );
      setTypedBio(nextChar);
    }, 300);

    return () => clearInterval(typingInterval);
  }, [typedBio]);

  const textShadowStyle = {
    textShadow: `1px 1px 2px ${theme.primary}`,
    fontWeight: "bold",
  };

  return (
    <div
      className="about"
      id="about"
      style={{ backgroundColor: theme.secondary }}
    >
      <div className="line-styling">
        <div
          className="style-circle"
          style={{ backgroundColor: theme.primary }}
        ></div>
        <div
          className="style-circle"
          style={{ backgroundColor: theme.primary }}
        ></div>
        <div
          className="style-line"
          style={{ backgroundColor: theme.primary }}
        ></div>
      </div>
      <div className="about-body">
        <div className="about-description">
          <h2 style={{ color: theme.primary }}>{aboutData.title}</h2>
          <p style={{ color: theme.tertiary80 }}>
            <span style={textShadowStyle}>{aboutData.description1}</span>
            <br />
            <br />
            {aboutData.description2}
            <br />
            <span style={textShadowStyle}>{typedBio}</span>
            <br />
            {aboutData.description4}
          </p>
        </div>
        <div className="about-img">
          <img src={aboutData.image} alt="" />
        </div>
      </div>
    </div>
  );
}

export default About;
