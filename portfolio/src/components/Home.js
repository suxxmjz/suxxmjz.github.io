import React from "react";
import { Container } from "react-bootstrap";
import './styles.css';

function Home() {

  return (
<div style={{ backgroundColor: "#fcf7f2", padding: "2rem"}}>
  <Container>
    <h1 style={{ color: "#f2e5ce", fontSize: "2rem", textAlign: "center", textTransform: "lowercase", letterSpacing: "0.1em"}}>
      hey, I'm
    </h1>
    <h3 style={{ color: "#d5c5af", fontSize: "4rem", fontWeight: "bold", textAlign: "center", textTransform: "lowercase", letterSpacing: "0.1em" ,animation: "bounce 2s infinite"}}>
      sukriti
    </h3>
    <div className="box-wrapper" style={{ backgroundColor: "#d5c5af", padding: "1rem", marginTop: "2rem" }}>
      <div className="box" style={{ backgroundColor: "#fff", padding: "1rem" }}>
        <h5 style={{ color: "#d5c5af", fontSize: "1rem", textAlign: "center", textTransform: "lowercase"}}>
          i'm a software engineering student passionate about creating change through
          software and excited to see what the future holds! this is a portal for you to discover more about me!
        </h5>
      </div>
    </div>
  </Container>
        <div className="image-container">
        <img src={require("./image1.jpg")} className="image" />
        <img src={require("./image2.jpg")} className="image" />
        <img src={require("./image3.jpg")} className="image" />
        <img src={require("./image6.jpg")} className="image" />
        <img src={require("./image4.jpg")} className="image" />
        <img src={require("./image7.jpg")} className="image" />
        <img src={require("./image5.jpg")} className="image" />

      </div>
</div>


  );
}

export default Home;
