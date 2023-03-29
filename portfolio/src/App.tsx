import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import About from "./components/About";
import Home from "./components/Home";
import Contact from "./components/Contact";
import "./App.css";
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <div className="d-flex">
      <Container className=" flex-grow-1">
        <Router>
          <Navbar bg="none" variant="dark">

            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/" >home</Nav.Link>
                <Nav.Link href="/about">about</Nav.Link>
                <Nav.Link href="/projects">projects</Nav.Link>
                <Nav.Link href="/contact">contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/about" Component={About} />
            <Route path="/contact" Component={Contact} />
          </Routes>
        </Router>
      </Container>
    </div>
  );
}

export default App;
