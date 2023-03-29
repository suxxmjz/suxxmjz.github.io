// About.js

import React,{useState} from "react";
import { Container } from "react-bootstrap";
import ReactCardFlip from "react-card-flip";

function Contact() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Container>
      <h1 style={{ color: "#f2e5ce", fontSize: "3rem", fontWeight: "bold", textAlign: "center"}}>let's talk!</h1>
            <h5 style={{ color: "#f2e5ce", fontSize: "1rem", textAlign: "center", textTransform: "lowercase"}}>
                <a href="https://www.linkedin.com/in/sukritisharma02/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none"}}> linkedin</a>
            </h5>
            <h5 style={{ color: "#f2e5ce", fontSize: "1rem", textAlign: "center", textTransform: "lowercase"}}>
                <a href="mailto:sukriti.sharma@ucalgary.ca" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none"}}> email</a>
            </h5>
    </Container>
  );
}

export default Contact;
