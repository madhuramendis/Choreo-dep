
import Container from 'react-bootstrap/Container';


import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';





const TopNav = () => {
  return (
    <>

      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary fixed-top cChoreoNav">
        <Container>
          <Navbar.Brand href="/"><img src="https://wso2.cachefly.net/wso2/sites/all/2020-theme/images/choreo-logo-black.svg" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">

            </Nav>
            <Nav>
                          <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                              <NavDropdown.Item href="#action/3.1">Support</NavDropdown.Item>
                              <NavDropdown.Item href="#action/3.2">  Another action  </NavDropdown.Item>
                              <NavDropdown.Item href="#action/3.3">Community</NavDropdown.Item>
                              {/* <NavDropdown.Divider /> */}
                              <h3> By Technology</h3>
                              <NavDropdown.Item href="#action/3.4">  Separated link  </NavDropdown.Item>
                          </NavDropdown>




              <Nav.Link href="#deets">Solutions</Nav.Link>
              <Nav.Link href="#deets">Solutions</Nav.Link>
              <Nav.Link href="#deets">Solutions</Nav.Link>
              <Nav.Link href="#deets">Solutions</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
              Docs
              </Nav.Link>
              <Nav.Link href="#features">Resources</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Support</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Community</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
{/* 

<Navbar className="cChoreoNav navbar navbar-expand-lg navbar-light bg-light sticky-top cSmallNav">
    <div className="container-fluid container-transition" id="myContainer">
      <a className="navbar-brand" href="/choreo" aria-label="">
        <img src="//wso2.cachefly.net/wso2/sites/all/2020-theme/images/choreo-logo-black.svg" alt="Choreo Logo" className=" ls-is-cached lazyloaded" loading="lazy"/>
      </a>
      <button className="navbar-toggler cnavbutton" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="">Menu</span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav mr-auto"></ul>
        <ul className="navbar-nav"></ul>
        <ul className="navbar-nav navbar-light cMenuMargin">
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownSolutions" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-label="
                 Solutions
                 "> Solutions </a>
            <div className="dropdown-menu cDropUse" aria-labelledby="navbarDropdown">
              <div className="cSelectedChoreo"></div>
              <br/>
              <div className="col-sm-12 col-md-5 col-lg-5">
                <p>
                  <strong>By Technology</strong>
                </p>
                <ul>
                  <li>
                    <a className="dropdown-item" href="/choreo/api-management" aria-label="API Management">API Management</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/choreo/integration" aria-label="Integration">Integration</a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-12 col-md-7 col-lg-7">
                <p>
                  <strong>By Use Case</strong>
                </p>
                <ul>
                  <li>
                    <a className="dropdown-item" href="https://wso2.com/choreo/usecases/integrate-shopify-slack-and-email/" aria-label="Shopify with Slack and Email">Shopify with Slack and Email</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="https://wso2.com/choreo/usecases/event-driven-graphql-bff-with-real-time-notifications/" aria-label="Event-driven GraphQL BFF">Event-driven GraphQL BFF</a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="https://wso2.com/choreo/usecases/b2b-edi-integration-with-choreo/" aria-label="B2B EDI Integration">B2B EDI Integration</a>
                  </li>
                </ul>
                <br/>
              </div>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/choreo/docs/" id="ChoreoDocs" target="_blank" aria-label="Docs">Docs</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownResources" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-label="
                 Resources
                 "> Resources </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <div className="cSelectedChoreo"></div>
              <a className="dropdown-item" href="https://wso2.com/library/?product=choreo&amp;type=blogs" aria-label="Blog">Blog</a>
              <a className="dropdown-item" href="https://wso2.com/choreo/changelog/" aria-label="Product Changelog">Product Changelog</a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/choreo/pricing" aria-label="Pricing">Pricing</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/choreo/customer-support" aria-label="Support">Support</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="https://discord.com/invite/wso2" target="_blank" aria-label="Community">Community</a>
          </li>
       
          <li className="nav-item dmenu dropdown">
            <a className="cMenuLinkTracking nav-link imagelink cChoreoButton cNavButton trDemoMenu" href="https://wso2.com/contact/" id="main_menu_contact" target="_blank" aria-haspopup="true" aria-expanded="false" aria-label="
                 Contact Us
                 "> Contact Us </a>
          </li>
          <li className="nav-item dmenu dropdown">
            <a className="nav-link trDemoMenu" href="http://console.choreo.dev?visitor_id=645a0e2fd804a5.76180292&amp;utm_source=site&amp;utm_medium=organic" target="_blank" aria-label="
                 Login
                 "> Login </a>
          </li>
          <li className="nav-item fixedBtn">
            <a className="cChoreoButton cMainSignupButtom cMenuGetStarted cTopMenu_GetStarted" href="https://console.choreo.dev?visitor_id=645a0e2fd804a5.76180292&amp;utm_source=site&amp;utm_medium=organic" id="get_started_free_menu" target="_blank" rel="noopener" aria-label="Get Started Free">Get Started Free</a>
          </li>
        </ul>
      </div>
    </div>
  </Navbar>

       */}








    </>
  )
}
export default TopNav;