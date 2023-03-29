// About.js
import { Container } from "react-bootstrap";

function About() {


  return (
    <Container>
  <h1 style={{ color: "#f2e5ce", fontSize: "3rem", fontWeight: "bold", textAlign: "center", marginBottom: "3rem" }}>about me</h1>
  <div className="box-wrapper">
      <ul style={{ color: "#f2e5ce", fontSize: "1.2rem", textAlign: "left", padding: "0 1rem", listStyle: "none" }}>
        <li><span style={{ fontWeight: "bold" }}> ☼ 3rd year software engineering student</span> at the university of calgary</li>
        <li>☼ i'm familiar in technologies such as <span style={{ fontWeight: "bold" }}>Javascript, React, Node.js, Typescript</span></li>
        <li>☼ i've developed in <span style={{ fontWeight: "bold" }}>Python, Java, C, C++</span></li>
        <li>☼ i'm an <span style={{ fontWeight: "bold" }}>ambitious learner</span> who wants to contribute <span style={{ fontWeight: "bold" }}>towards real change</span> </li>
      </ul>
  </div>
</Container>

  );
}

export default About;
