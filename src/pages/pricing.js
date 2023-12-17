import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Nav from 'react-bootstrap/Nav';


import Tab from 'react-bootstrap/Tab';
import Layout from '../layouts/LayoutHome';
import Table from 'react-bootstrap/Table';

import Accordion from 'react-bootstrap/Accordion';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';







export default function Home() {
  return (
    <Layout>



<section className="cChoreoSection cGrayBackground">
      <Container>
        <Row>
          <Col sm={12} md={1} lg={1}></Col>
          <Col sm={12} md={10} lg={10} className="cCenterTitleContainer" style={{ paddingBottom: 0 }}>
            <h1 style={{ width: '100%', textAlign: 'center' }}>
              Choreo Pricing
            </h1>
            <p style={{ textAlign: 'center' }}>
              {/* Our pricing offers you access to all of the features you'll need to complete your work. <br> */}
              Choreo’s simple and transparent pricing lets you develop and deploy the{' '}
              <a className="cPageLink" aria-label="components">
                components
              </a>{' '}
              (e.g., APIs, microservices, and integrations) needed for your business.
            </p>
          </Col>
          <Col sm={12} md={1} lg={1}></Col>
        </Row>
      </Container>
    </section>






      <section className="cChoreoSection" style={{ paddingTop: 0 }}>
        <Container>
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 cCenterTitleContainer cReducePadding">
              <div className="cTabCompare-1 cShowTab">
                <h2 className="">Compare Plans</h2>



    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Developer and Operational</Accordion.Header>
        <Accordion.Body>
        
        <table class="cTable">
                    <tbody><tr>
                      <td class="cTD1">
                        Manage source with GitHub repo
                      </td>
                      <td class="cTD2">✓ </td>
                      <td class="cTD3">✓
                      </td>
                      <td class="cTD4">✓</td>
                    </tr>
                    <tr>
                      <td class="cTD1">
                        Continuous integration (CI)
                      </td>
                      <td class="cTD2">✓</td>
                      <td class="cTD3">✓</td>
                      <td class="cTD4">✓</td>
                    </tr>
                    <tr>
                      <td class="cTD1">
                        Continuous delivery (CD)
                      </td>
                      <td class="cTD2">✓</td>
                      <td class="cTD3">✓</td>
                      <td class="cTD4">✓</td>
                    </tr>
                    <tr>
                      <td class="cTD1">
                        Deployments to cloud platforms
                      </td>
                      <td class="cTD2">Choreo Cloud</td>
                      <td class="cTD3" >
                        Azure, AWS, GCP, OpenShift, VMWare Tanzu, and any Kubernetes cluster <a tabindex="0" type="button" class="popover-icon" data-popover-content="#Azure" data-toggle="popover" data-placement="top" data-original-title="" title="" aria-label="i">i</a>
                        
                        <div id="Azure" >
                          <div class="popover-body">
                            <a type="button" class="popover-close close" aria-label="
                            ">
                            </a>
                            <p>Support for OpenShift, VMWare Tanzu, and any Kubernetes Cluster is in the
                              roadmap.</p>
                          </div>
                        </div>
                      </td>
                      <td class="cTD4" >
                        Azure, AWS, GCP, OpenShift, VMWare Tanzu, and any Kubernetes cluster <a tabindex="0" type="button" class="popover-icon" data-popover-content="#Azure2" data-toggle="popover" data-placement="top" data-original-title="" title="" aria-label="i">i</a>
                        
                        <div id="Azure2" >
                          <div class="popover-body">
                            <a type="button" class="popover-close close" aria-label="
                            ">
                            </a>
                            <p>Support for OpenShift, VMWare Tanzu, and any Kubernetes Cluster is in the
                              roadmap.</p>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody></table>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>


      <Accordion.Item eventKey="2">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>






    </Accordion>









              </div>
            </div>
          </div>
        </Container>
      </section>






      <div className="cIntro cGrayBackground">
        <Container>
          <Row>
            <Col sm={12} md={6}>
              <h1>Choreo Pricing</h1>
              
            </Col>
            <Col sm={12} md={2}>&nbsp;</Col>
            <Col sm={12} md={4}></Col>
          </Row>


        </Container>

      </div>



      <div className="cSection cWhiteBG">
        <Container>
          <Row>
            <Col sm={12} md={12}>
              <h2>Discover building blocks for your Cloud Native Application</h2>

            </Col>
            <Col sm={12} md={2}>&nbsp;</Col>
            <Col sm={12} md={8}>
              <Row>
                <Col sm={12} md={2}>
                  <div className='cWhiteRoundedHighlightedBox cLogoTile'>
                    <img src="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/ballerinax_trigger.slack_0.8.0.png" />
                  </div>
                </Col>
                <Col sm={12} md={2}>
                  <div className='cWhiteRoundedHighlightedBox cLogoTile'>
                    <img src="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/ballerinax_trigger.github_0.9.0.png" />
                  </div>
                </Col>
                <Col sm={12} md={2}>
                  <div className='cWhiteRoundedHighlightedBox cLogoTile'>
                    <img src="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/ballerinax_trigger.asgardeo_0.5.0.png" />
                  </div>
                </Col>
                <Col sm={12} md={2}>
                  <div className='cWhiteRoundedHighlightedBox cLogoTile'>
                    <img src="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/ballerinax_trigger.asb_1.2.0.png" />
                  </div>
                </Col>
                <Col sm={12} md={2}>
                  <div className='cWhiteRoundedHighlightedBox cLogoTile'>
                    <img src="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/ballerinax_trigger.salesforce_0.10.0.png" />
                  </div>
                </Col>
                <Col sm={12} md={2}>
                  <div className='cWhiteRoundedHighlightedBox cLogoTile'>
                    <img src="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/ballerinax_trigger.google.calendar_0.11.0.png" />
                  </div>
                </Col>
                <Col sm={12} md={2}>
                  <div className='cWhiteRoundedHighlightedBox cLogoTile'>
                    <img src="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/ballerinax_trigger.shopify_1.4.1.png" />
                  </div>
                </Col>
                <Col sm={12} md={2}>
                  <div className='cWhiteRoundedHighlightedBox cLogoTile'>
                    <img src="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/ballerinax_trigger.hubspot_0.9.0.png" />
                  </div>
                </Col>
                <Col sm={12} md={2}>
                  <div className='cWhiteRoundedHighlightedBox cLogoTile'>
                    <img src="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/ballerinax_trigger.google.mail_0.10.0.png" />
                  </div>
                </Col>
                <Col sm={12} md={2}>
                  <div className='cWhiteRoundedHighlightedBox cLogoTile'>
                    <img src="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/ballerinax_trigger.google.sheets_0.9.0.png" />
                  </div>
                </Col>
                <Col sm={12} md={2}>
                  <div className='cWhiteRoundedHighlightedBox cLogoTile'>
                    <img src="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/ballerinax_trigger.quickbooks_1.2.0.png" />
                  </div>
                </Col>
                <Col sm={12} md={2}>
                  <div className='cWhiteRoundedHighlightedBox cLogoTile'>
                    <img src="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/ballerinax_trigger.twilio_0.9.0.png" />
                  </div>
                </Col>

              </Row>
            </Col>
            <Col sm={12} md={2}>&nbsp;</Col>




          </Row>
        </Container>
      </div>


      <div className="cSection cWhiteBG">
        <Container>
          <Row>
            <Col sm={12} md={12}>
              <h2>Full stack hosting, with security: webapps, jobs, databases, APIs</h2>

            </Col>
            <Col sm={12} md={4}>
              <div className='cGrayRoundedHighlightedBox'>
                <h3>Troubleshooting with logs, metrics, alerts, observability</h3>
                {/* <h4>webapps, jobs, databases, APIs</h4> */}
                <img src="https://dummyimage.com/170x170/D9D9D9" />

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <a href="" className='cLearnMore'>Learn More</a>
              </div>

            </Col>
            <Col sm={12} md={4}>
              <div className='cGrayRoundedHighlightedBox'>
                <h3>Troubleshooting with logs, metrics, alerts, observability</h3>
                <img src="https://dummyimage.com/170x170/D9D9D9" />

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <a href="" className='cLearnMore'>Learn More</a>
              </div>

            </Col>
            <Col sm={12} md={4}>
              <div className='cGrayRoundedHighlightedBox'>
                <h3>Troubleshooting with logs, metrics, alerts, observability</h3>
                <img src="https://dummyimage.com/170x170/D9D9D9" />

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <a href="" className='cLearnMore'>Learn More</a>
              </div>

            </Col>
            <Col sm={12} md={4}>
              <div className='cGrayRoundedHighlightedBox'>
                <h3>Troubleshooting with logs, metrics, alerts, observability</h3>
                {/* <h4>webapps, jobs, databases, APIs</h4> */}
                <img src="https://dummyimage.com/170x170/D9D9D9" />

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <a href="" className='cLearnMore'>Learn More</a>
              </div>

            </Col>
            <Col sm={12} md={4}>
              <div className='cGrayRoundedHighlightedBox'>
                <h3>Troubleshooting with logs, metrics, alerts, observability</h3>
                <img src="https://dummyimage.com/170x170/D9D9D9" />

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <a href="" className='cLearnMore'>Learn More</a>
              </div>

            </Col>
            <Col sm={12} md={4}>
              <div className='cGrayRoundedHighlightedBox'>
                <h3>Troubleshooting with logs, metrics, alerts, observability</h3>
                <img src="https://dummyimage.com/170x170/D9D9D9" />

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                <a href="" className='cLearnMore'>Learn More</a>
              </div>

            </Col>
            </Row>


            <Row>
            <Col sm={12} md={4} className='cCenterButton'></Col>

            <Col sm={12} md={4} className='cCenterButton'>
           
            <a className="cChoreoButton cMainSignupButtom cLearnMore cLearnMoreX" href="/choreo/" target="_blank" rel="noopener" aria-label="Learn More">Explore all Choreo features</a>


            </Col>

            <Col sm={12} md={4} className='cCenterButton'></Col>

          </Row>

         

        </Container>

      </div>








      <div className="cSection cWhiteBG">
        <Container>
          <Row>
            <Col sm={12} md={12}>
              <h2>What can you build with Choreo?</h2>

            </Col>
            <Col sm={12} md={12}>





              <div className='cWhiteRoundedHighlightedBox'>
                <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                  <Row>
                    <Col sm={5}>
                      <Nav variant="pills" className="flex-column cTabs">
                        <Nav.Item>
                          <Nav.Link eventKey="first"><h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</h3></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="second"><h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</h3></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="th"><h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</h3></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="4th"><h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod</h3></Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </Col>
                    <Col sm={7}>
                      <Tab.Content>
                        <Tab.Pane eventKey="first">
                          <video autoplay="" loop="" muted="" playsinline="" width="100%" height="auto"><source src="//wso2.cachefly.net/wso2/sites/all/2023/choreo/choreo-deployment.mp4" type="video/mp4" /></video>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                          <video autoplay="" loop="" muted="" playsinline="" width="100%" height="auto"><source src="//wso2.cachefly.net/wso2/sites/all/2023/choreo/choreo-deployment.mp4" type="video/mp4" /></video>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="th">
                          <video autoplay="" loop="" muted="" playsinline="" width="100%" height="auto"><source src="//wso2.cachefly.net/wso2/sites/all/2023/choreo/choreo-deployment.mp4" type="video/mp4" /></video>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        </Tab.Pane>
                        <Tab.Pane eventKey="4th">
                          <video autoplay="" loop="" muted="" playsinline="" width="100%" height="auto"><source src="//wso2.cachefly.net/wso2/sites/all/2023/choreo/choreo-deployment.mp4" type="video/mp4" /></video>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        </Tab.Pane>
                      </Tab.Content>
                    </Col>
                  </Row>
                </Tab.Container>
              </div>







            </Col>






          </Row>
        </Container>
      </div>





      <div className="cSection cWhiteBG">
        <Container>
          <Row>
            <Col sm={12} md={12}>
              <h2>Resource Cost Estimation</h2>

            </Col>
            <Col sm={12} md={12}>





              <div className='cWhiteRoundedHighlightedBox'>
              <Row>

             
           
              <Col sm={12} md={6} className='cCommunityText'>
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit Sed do eiusmod</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
<a className="cChoreoButton cMainSignupButtom cLearnMore cLearnMoreX" href="/pricing/" target="_blank" rel="noopener" aria-label="Learn More">Lorem ipsum </a>

              </Col>
              <Col sm={12} md={6}></Col>



              </Row>

              </div>

            </Col>
          </Row></Container>
      </div>




      <div className="cSection cWhiteBG">
        <Container>
          <Row>
            <Col sm={12} md={12}>
              <h2>Resources</h2>

            </Col>
            <Col sm={12} md={4}>
              <div className='cWhiteRoundedHighlightedBox cResourcesTile'>
                <img src="https://dummyimage.com/420x200/D9D9D9" />

                <div className='cResourcesInfo'>
                  <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    Sed do eiusmod</h3>





                  <a href="" className='cLearnMore'>Watch Video</a>
                </div>

              </div>

            </Col>
           
            <Col sm={12} md={4}>
              <div className='cWhiteRoundedHighlightedBox cResourcesTile'>
                <img src="https://dummyimage.com/420x200/D9D9D9" />

                <div className='cResourcesInfo'>
                  <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    Sed do eiusmod</h3>





                  <a href="" className='cLearnMore'>Watch Video</a>
                </div>

              </div>

            </Col>
            <Col sm={12} md={4}>
              <div className='cWhiteRoundedHighlightedBox cResourcesTile'>
                <img src="https://dummyimage.com/420x200/D9D9D9" />

                <div className='cResourcesInfo'>
                  <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    Sed do eiusmod</h3>





                  <a href="" className='cLearnMore'>Watch Video</a>
                </div>

              </div>

            </Col>

            <Col sm={12} md={6}>
              <div className='cWhiteRoundedHighlightedBox cResourcesTile'>
                <img src="https://dummyimage.com/640x200/D9D9D9" />

                <div className='cResourcesInfo'>
                  <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    Sed do eiusmod</h3>





                  <a href="" className='cLearnMore'>Watch Video</a>
                </div>

              </div>

            </Col>
            <Col sm={12} md={6}>
              <div className='cWhiteRoundedHighlightedBox cResourcesTile'>
                <img src="https://dummyimage.com/640x200/D9D9D9" />

                <div className='cResourcesInfo'>
                  <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    Sed do eiusmod</h3>





                  <a href="" className='cLearnMore'>Watch Video</a>
                </div>

              </div>

            </Col>






          </Row>

          <Row>
            <Col sm={12} md={4} className='cCenterButton'></Col>

            <Col sm={12} md={4} className='cCenterButton'>
           
            <a className="cChoreoButton cMainSignupButtom cLearnMore cLearnMoreX" href="/choreo/" target="_blank" rel="noopener" aria-label="Learn More">More  Choreo Resources</a>


            </Col>

            <Col sm={12} md={4} className='cCenterButton'></Col>

          </Row>


        </Container>

      </div>







      <div className="cSection cWhiteBG">
        <Container>
          <Row>
            <Col sm={12} md={12}>
              <h2>Community</h2>

            </Col>
            <Col sm={12} md={12}>





              <div className='cWhiteRoundedHighlightedBox'>
              <Row>

              <Col sm={12} md={3}></Col>
              <Col sm={12} md={2}>
                <img src="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/discord-icon-choreo.png"/>
              </Col>
              <Col sm={12} md={4} className='cCommunityText'>
                <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit Sed do eiusmod</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
<a className="cChoreoButton cMainSignupButtom cLearnMore cLearnMoreX" href="/choreo/" target="_blank" rel="noopener" aria-label="Learn More">More  Choreo Resources</a>

              </Col>
              <Col sm={12} md={3}></Col>



              </Row>

              </div>

            </Col>
          </Row></Container>
      </div>






      <div className="cSection cGrayBackground">
        <Container>
          <Row>
            <Col sm={12} md={12} className="cCenterButton">
              <h2>Get Started with Choreo</h2>
  
           
            </Col>

            <Col sm={12} md={4} className="cCenterButton">

            </Col>
            <Col sm={12} md={4} className="cCenterButton">
            <a class="cChoreoButton cMainSignupButtom cLearnMore cLearnMoreX cSignupbutton" href="/choreo/" target="_blank" rel="noopener" aria-label="Learn More">Sign up to continue</a>
            </Col>
            <Col sm={12} md={4} className="cCenterButton">

            </Col>

          
          </Row>
          </Container>
      </div>



    </Layout>
  )
}
