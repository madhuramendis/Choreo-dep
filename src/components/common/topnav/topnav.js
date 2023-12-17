
import Container from 'react-bootstrap/Container';


import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const TopNav = () => {
    return (
        <>



<Navbar bg="light" expand="lg" variant="light" sticky="top" className="cChoreoNav cSmallNav ">
      <Container fluid className="container-transition" id="myContainer">
        <Navbar.Brand href="/" aria-label="">
          <img
            src="//wso2.cachefly.net/wso2/sites/all/2020-theme/images/choreo-logo-black.svg"
            alt="Choreo Logo"
            className="ls-is-cached lazyloaded"
            loading="lazy"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarTogglerDemo02" className="cnavbutton">
          Menu
        </Navbar.Toggle>
        <Navbar.Collapse id="navbarTogglerDemo02">
          <Nav className="me-auto"></Nav>
          <Nav>
          <Nav.Link href="https://wso2.com/choreo/docs/" id="ChoreoDocs" target="_blank">
              Docs
            </Nav.Link>
            <NavDropdown title="Use Cases" id="navbarDropdownSolutions" >
            <div class="cSelectedChoreo"></div>
              <Row>
    <div className='cDropUse'>
    <Row>
   
   
                <Col sm={12} md={7} lg={7}>
                 
                  <ul>
                   
                   


                            <li><a className="dropdown-item" href="https://wso2.com/choreo/usecases/b2b-edi-integration-with-choreo/" aria-label="B2B EDI Integration">B2B EDI Integration</a></li>
                            <li><a className="dropdown-item" href="https://wso2.com/choreo/usecases/deploy-your-web-application-with-choreo/" aria-label="Deploy a Web App">Deploy a Web App</a></li>
                            <li><a className="dropdown-item" href="https://wso2.com/choreo/usecases/elevate-your-devops-journey-with-choreo/" aria-label="DevOps">DevOps</a></li>
                            <li><a className="dropdown-item" href="https://wso2.com/choreo/usecases/event-driven-graphql-bff-with-real-time-notifications/" aria-label="Event-driven GraphQL BFF">Event-driven GraphQL BFF</a></li>
                            <li><a className="dropdown-item" href="https://wso2.com/choreo/usecases/deploying-scalable-microservices-with-choreo/" aria-label="Microservices">Microservices</a></li>
                            <li><a className="dropdown-item" href="https://wso2.com/choreo/usecases/integrate-shopify-slack-and-email/" aria-label="Shopify with Slack and Email">Shopify with Slack and Email</a></li>
                
              








                  </ul>
                </Col>
                </Row>
    </div>
                
              </Row>
            </NavDropdown>
            <Nav.Link href="/blog" id="Blog" target="_blank">
              Blog
            </Nav.Link>

            <Nav.Link href="/pricing" id="Blog" target="_blank">
              Pricing
            </Nav.Link>

            <Nav.Link href="/community" id="Blog" target="_blank">
            Community
            </Nav.Link>

            <Nav.Link href="http://wso2.com/choreo" id="Blog" target="_blank">
            Enterprise
            </Nav.Link>

            <Nav.Link href="/" id="Blog" target="_blank">
            Login
            </Nav.Link>
           
           
           
     
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>







        </>
    )
}
export default TopNav;






