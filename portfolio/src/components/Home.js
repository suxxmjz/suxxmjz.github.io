import React from "react";
import { Container } from "react-bootstrap";
import './styles.css';

function Home() {

  return (
    <div>
      <Container>
         <h1 style={{ color: "#f2e5ce", fontSize: "2rem", textAlign: "center", textTransform: "lowercase", letterSpacing: "0.1em"}}>
          hey, I'm
        </h1>
        <h3 style={{ color: "#f2e5ce", fontSize: "4rem", fontWeight: "bold", textAlign: "center", textTransform: "lowercase", letterSpacing: "0.1em" ,animation: "bounce 2s infinite"}}>
         sukriti
        </h3>
        <div className="box-wrapper">
          <div className="box">
            <h5 style={{ color: "#f2e5ce", fontSize: "1rem", textAlign: "center", textTransform: "lowercase"}}>
              i'm a software engineering student passionate about creating change through
              software and excited to see what the future holds! this is a portal for you to discover more about me!
            </h5>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Home;
