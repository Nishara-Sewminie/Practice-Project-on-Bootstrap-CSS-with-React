import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import one from './images/one.jpg';
import two from './images/two.jpg';
import three from './images/three.jpg';


function App() {
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Brand Name</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Services" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Contact</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Visit Store
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* Jumborton starts here */}
      <div class="bg-primary text-white">
        <p>15% offer! for newly Registered Accounts.. &nbsp;<u>Claim</u> your membership today!</p>
      </div>

      {/* <!-- Carousel --> */}
      <div id="demo" class="carousel slide" data-bs-ride="carousel">

        {/* <!-- Indicators/dots --> */}
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
        </div>

        {/* <!-- The slideshow/carousel --> */}
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={one} alt="Los Angeles" class="d-block" style={{ width: "100%", height: "500px" }} />
            <div class="carousel-caption">
              <h3>Sample 1</h3>
              <p>Description of Sample 1</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={two} alt="Chicago" class="d-block" style={{ width: "100%", height: "500px" }} />
            <div class="carousel-caption">
              <h3>Sample 2</h3>
              <p>Description of Sample 2</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src={three} alt="New York" class="d-block" style={{ width: "100%", height: "500px" }} />
            <div class="carousel-caption">
              <h3>Sample 3</h3>
              <p>Description of Sample 3</p>
            </div>
          </div>
        </div>

        {/* <!-- Left and right controls/icons --> */}
        <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
          <span class="carousel-control-next-icon"></span>
        </button>
      </div>


      {/* Services starts here */}
      <div class="d-inline-flex p-3">

      <div class="container mt-3">
        <div class="card" style={{ width: "400px" }}>
          <img class="card-img-top" src={three} alt="Card image" style={{ width: "100%" }} />
          <div class="card-body">
            <h4 class="card-title">Product 1</h4>
            <p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>
            <a href="#" class="btn btn-primary">See More</a>
          </div>
        </div>
      </div>

      <div class="container mt-3">
        <div class="card" style={{ width: "400px" }}>
          <img class="card-img-top" src={three} alt="Card image" style={{ width: "100%" }} />
          <div class="card-body">
            <h4 class="card-title">Product 2</h4>
            <p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>
            <a href="#" class="btn btn-primary">See More</a>
          </div>
        </div>
      </div>

      <div class="container mt-3">
        <div class="card" style={{ width: "400px" }}>
          <img class="card-img-top" src={three} alt="Card image" style={{ width: "100%" }} />
          <div class="card-body">
            <h4 class="card-title">Product 3</h4>
            <p class="card-text">Some example text some example text. John Doe is an architect and engineer</p>
            <a href="#" class="btn btn-primary">See More</a>
          </div>
        </div>
      </div>

      
      </div>

    </div>
  );
}

export default App;
