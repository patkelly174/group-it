import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Login from "./Login.js"
import JoinOrder from "./JoinOrder.js"

function Landing() {
  return (

    <div className="landing-page">
        <h1>Group-It</h1>

        
        <JoinOrder />
        <Login />



    {/* Footer for the landing page */}
    <div class="landing-navbar">
        <Navbar variant="default">
                <Nav>
                    <Nav.Link className="landing-nav-link" href="/about">About</Nav.Link>
                    {/* add logo which will send home */}
                    <Nav.Link className="landing-nav-link" href="/contact">Contact</Nav.Link>
                </Nav>
        </Navbar> 
    </div>

    </div>
    
    );
}

export default Landing;
