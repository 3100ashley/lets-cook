import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function BasicExample() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  return (
    <Navbar expand="lg" className="bg-body-tertiary mb-16" data-bs-theme="dark">
      <Container className="">
        <Navbar.Brand href="/">Recipes</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <NavDropdown title="Created" id="basic-nav-dropdown">
              <NavDropdown.Item href="/createdrecipes">Created Recipes</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Saved Recipes
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <div className="flex justify-center ">
            <form
              className="flex flex-wrap gap-2"
              onSubmit={() => {
                navigate(`/allrecipes/${search}`)
              }}
            >
              <input
                className="px-2 py-1 rounded min-w-0 bg-white"
                placeholder="chicken"
                type="text"
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
              />
              <button className="bg-sky-900 hover:bg-sky-700 text-white font-bold py-1 px-2 rounded">
                Search
              </button>
            </form>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
