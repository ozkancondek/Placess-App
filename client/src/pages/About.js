import React from "react";
import "../styles/Pages.css";
export const About = () => {
  return (
    <div className="about">
      <br />
      <br />
      <br />
      <div className="text">
        There are many places in the world that need to be explored. With
        Blueberry you can discover the most interesting places you have never
        seen before and make your own roadmap.
      </div>
      <br />
      <br />
      <br />
      <div
        className="text"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
          padding: "10px",
          borderRadius: "5px",
          paddingTop: "10px",
          paddingBottom: "10px",
        }}
      >
        <p>
          PLease do not hesitate to contact with us if you have further
          suggestions or problems.
        </p>

        <br />
        <p style={{ textAlign: "right" }}>Ertugrul Gazi Gültekin</p>
        <p style={{ textAlign: "right" }}>fsujena.ertugrulgultekin@gmail.com</p>
      </div>
    </div>
  );
};
