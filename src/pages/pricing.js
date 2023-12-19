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
import Ratio from 'react-bootstrap/Ratio';







export default function Pricing() {
  return (
    <Layout>
<script src="https://code.jquery.com/jquery-3.6.0.js" crossorigin="anonymous"></script>

<link rel="stylesheet" href="https://wso2.cachefly.net/wso2/sites/all/2023/sliders/jqueryui.min.css" crossorigin="anonymous"/>
  <link rel="stylesheet" href="https://wso2.cachefly.net/wso2/sites/all/2023/sliders/jquery-ui-slider-pips.css" crossorigin="anonymous"/>
  <script src="https://wso2.cachefly.net/wso2/sites/all/2023/sliders/jquery-ui.min.js" crossorigin="anonymous"></script>
  <script src="https://wso2.cachefly.net/wso2/sites/all/2023/sliders/jquery-ui-slider-pips.js" crossorigin="anonymous"></script>
  <script src=" https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/choreo-calculator.js" crossorigin="anonymous"></script>
 
<section className="cChoreoSection cGrayBackground cInnerPage">
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


    <section className="cChoreoSection cSectionBelowHighlight cChoreoSectionx">
  <Container className="cWhiteBoxRound">
    <Row>
      <Col lg={12} className="cCenterTitleCOniatier">
      <div>
        <div>
          <Row className="cHighlightedRow">
            <div className="clearfix cfix"></div>
            <Col lg={2} ></Col>
            <Col lg={4} className="cPriceColContainer">
            <Card className="cPriceCol cMiddle cFreeCol">
              <div className="h4ContainerFree">
                <h4>Developer</h4>
                <br />
                <span className="cPrice">
                  <div className="cFirstRow">
                    <span className="b2cBasic">$0</span>
                  </div>
                </span>
                <p className="DecMinH">Ideal for developers.</p>
                <div className="Sadd">
                  <p className="DecMinH2 mB">Upto 5 components free</p>
                  <p className="DecMinH"> +$5 per additional component +{' '} <a href="#Calculator" aria-label="resource usage"> resource usage </a>{' '} ($100 credits per month free)</p>
                </div>
              </div>
              <div className="cBoxCTAcontainer">
                <a className="cContactSales TRPricingGetStart" href="https://console.choreo.dev/" aria-label="Get Started"> Get Started </a>
              </div>
              <ul>
                <li>2 projects</li>
                <li>5 developers</li>
                <li> Public repo </li>
                <li>Scales down to 0 when not in use</li>
                <li>Up to 10 transactions per second</li>
                <li>Supports only Choreo’s Cloud Data Plane or a personal private data plane</li>
              </ul>
              <p></p>
            </Card>
            </Col>
            <Col lg={4} className="cPriceColContainer">
            <Card className="cPriceCol cMiddle cFreeCol">
              <div className="h4ContainerFree">
                <h4>Pay-As-You-Go</h4>
                <br />
                <span className="cPrice">
                  <div className="cFirstRow">
                    <span className="b2cBasic">$150</span>
                    <span className="cNormalText">/component per month</span>
                  </div>
                </span>
                <p className="DecMinH">Ideal for teams collaboratively building cloud native apps.</p>
                <div className="Sadd">
                  <p className="DecMinH2">Sign up with your work email to get 5 components free for 6 months</p>
                  <p className="DecMinH"> +{' '} <a href="#Calculator" aria-label="resource usage"> resource usage </a>{' '} ($1000 credits for 6 months free) </p>
                </div>
              </div>
              <div className="cBoxCTAcontainer">
                <a className="cContactSales TRPricingGetStart" href="https://console.choreo.dev/" aria-label="Get Started"> Get Started </a>
              </div>
              <ul>
                <li>Unlimited projects</li>
                <li>Unlimited developers</li>
                <li>Private or public repo</li>
                <li>Can scale up without restrictions</li>
                <li>You decide how to scale down</li>
                <li>Unlimited transactions per second</li>
                <li>Supports both Choreo’s Cloud Data Plane and Private Data Planes</li>
              </ul>
              <p></p>
            </Card>
            </Col>
            <Col lg={2} ></Col>
          </Row>
        </div>
      </div>
      </Col>
    </Row>
  </Container>
</section>



<section className="cChoreoSection cGrayBackground">
<Container>
 <Row>
      <Col sm={12} md={12} lg={12}>
        <div className="cSuppport">
          <h2>Resource Cost Estimation</h2>
        </div>
      </Col>
      <Col sm={12} md={4} lg={4}>&nbsp;</Col>
  
     <Col sm={12} md={4} lg={4}>
        <div className="cTabCOntrolContainer ">
          <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
            <li className="nav-item">
              <a className="nav-link cPricingTabs cRightButton active" id="monthly" data-toggle="pill" href="" role="tab" aria-controls="pills-home" aria-selected="true" aria-label="Monthly">Monthly</a>
            </li>
            <li className="nav-item">
              <a className="nav-link cPricingTabs cLeftButton" id="hourly" data-toggle="pill" href="" role="tab" aria-controls="pills-profile" aria-selected="false" aria-label="Hourly">Hourly</a>
            </li>
          </ul>
        </div>
      </Col>
     <Col sm={12} md={4} lg={4}>&nbsp;</Col>
      <Col sm={12} md={12} lg={12}>
        <div className="cPriceCol tab-content" id="pills-tabContent">
          <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
           <Col sm={12} md={4} lg={4}>&nbsp;</Col>
            <div className="col-sm-12 col-md-4 col-lg-4 cTextAlignCenter cTopTotalCost">
              <span className="cSubTotalTitle" id="total_cost_lable">Total Cost</span>
              <span className="b2cBasic" id="total_cost_amount">$0.00</span>
              <span className="cSubTotalTitle" id="required_more">If you require more <a href="/contact/?ref=choreopricing" aria-label="contact us">contact us</a>.</span>
            </div>
           <Col sm={12} md={4} lg={4}>&nbsp;</Col>
            <div className="clearfix"></div>
            <Row>
            <Col sm={12} md={8} lg={8} className='cSpLine'>
              <div className="colwrap cRightCol">


                <Col sm={12} md={4} lg={4} className='cSmallCol'>
                  <div className="cSliderContainer">
                    <label>CPU</label>
                    <div className="cSlider">
                      <div id="memory-slider" className="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all ui-slider-float"><div className="ui-slider-range ui-widget-header ui-corner-all ui-slider-range-min"></div><span className="ui-slider-handle ui-state-default ui-corner-all" tabindex="0" ><span className="ui-slider-tip">0.0</span></span></div>
                    </div>
                  </div>
                </Col>

                <Col sm={12} md={4} lg={4} className='cSmallCol'>
                  <div className="cSliderContainer">
                    <label>RAM</label>
                    <div className="cSlider">
                      <div id="memory-slider2" className="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all ui-slider-float"><div className="ui-slider-range ui-widget-header ui-corner-all ui-slider-range-min" ></div><span className="ui-slider-handle ui-state-default ui-corner-all" tabindex="0" ><span className="ui-slider-tip">0.0</span></span></div>
                    </div>
                  </div>
                </Col>

                <Col sm={12} md={4} lg={4} className='cSmallCol'>
                  <div className="cSliderContainer">
                    <label>Storage</label>
                    <div className="cSlider">
                      <div id="memory-slider4" className="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all ui-slider-float"><div className="ui-slider-range ui-widget-header ui-corner-all ui-slider-range-min" ></div><span className="ui-slider-handle ui-state-default ui-corner-all" tabindex="0" ><span className="ui-slider-tip">0</span></span></div>
                    </div>
                  </div>
                </Col>
             
                <Col sm={12} md={12} lg={2} className='cSmallCol'>
                  <div className="cSliderContainer">
                    <label>Network Egress</label>
                    <div className="cSlider">
                      <div id="memory-slider3" className="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all ui-slider-float"><div className="ui-slider-range ui-widget-header ui-corner-all ui-slider-range-min" ></div><span className="ui-slider-handle ui-state-default ui-corner-all" tabindex="0" ><span className="ui-slider-tip">0</span></span></div>
                    </div>
                  </div>
                </Col>
                <div className="cTextAlignCenter cSubTotals" id="resource_cost_section">
                  <span className="cSubTotalTitle">Resource Cost</span>
                  <span className="b2cBasic" id="resource_cost_amount">$0.00</span>
                </div>
              </div>
            </Col>
           <Col sm={12} md={4} lg={4}>
              <div className="colwrap cLeftCol">
                <div className="cSliderContainer">
                  <div className="form__group">
                    <div className="form__radio-group">
                      <ul className="cRadioUL">
                        <li>
                          <input type="radio" name="component_options" id="developer" value="developer" className="form__radio-input" checked="checked"/>
                          <label className="form__label-radio" for="developer">
                            <span className="form__radio-button"></span>Developer
                          </label>
                        </li>
                        <li>
                          <input type="radio" name="component_options" id="payg" value="payg" className="form__radio-input"/>
                          <label className="form__label-radio" for="payg">
                            <span className="form__radio-button"></span> PAYG
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="cSliderContainer" id="work_email_div">
                  <div className="form__group">
                    <div className="form__radio-group">
                      <label for="work_email">
                        <input type="checkbox" id="work_email" name="work_email"/> Sign up with work email
                      </label>
                    </div>
                  </div>
                </div>

                <div className="cSliderContainer">
                  <label>Components</label>
                  <div className="cSlider">
                    <div id="memory-slider5" className="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all ui-slider-float"><div className="ui-slider-range ui-widget-header ui-corner-all ui-slider-range-min" ></div><span className="ui-slider-handle ui-state-default ui-corner-all" tabindex="0" ><span className="ui-slider-tip">0</span></span></div>
                  </div>
                </div>
                <div className="cTextAlignCenter cSubTotals" id="component_cost_section">
                  <span className="cSubTotalTitle">Component Cost</span>
                  <span className="b2cBasic" id="component_cost_amount">$0.00</span>
                </div>
              </div>
            </Col>
            </Row>
          </div>

        </div>
      </Col>
   </Row>
   </Container>
</section>








<iframe src="https://wso2.com/choreo/pricing-calculator/" width="100%" type="text/html" frameBorder="0" allowTransparency="true" ></iframe>
       




      <section className="cChoreoSection" style={{ paddingTop: 0 }}>
        <Container>
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-12 cCenterTitleContainer cReducePadding">
              <div className="cTabCompare-1 cShowTab">
                <h2 className="">Compare Plans</h2>



    <Accordion>


    <table className="cTable cTHeaders">
                <tbody><tr>
                  <td className="cTD1"></td>
                  <td className="cTD2">
                    Developer
           
                  </td>
                  <td className="cTD3">
                    Pay-As-You-Go
               
               
                  </td>
            
  
  
                </tr>
              </tbody>
              </table>

      <Accordion.Item eventKey="0">
        <Accordion.Header>Developer and Operational</Accordion.Header>
        <Accordion.Body className='card-body'>
        <table className="cTable">
                              <tbody>
                                 <tr>
                                    <td className="cTD1">
                                       Manage source with GitHub repo
                                    </td>
                                    <td className="cTD2">✓ </td>
                                    <td className="cTD3">✓
                                    </td>
                                    <td className="cTD4">✓</td>
                                 </tr>
                                 <tr>
                                    <td className="cTD1">
                                       Continuous integration (CI)
                                    </td>
                                    <td className="cTD2">✓</td>
                                    <td className="cTD3">✓</td>
                                    <td className="cTD4">✓</td>
                                 </tr>
                                 <tr>
                                    <td className="cTD1">
                                       Continuous delivery (CD)
                                    </td>
                                    <td className="cTD2">✓</td>
                                    <td className="cTD3">✓</td>
                                    <td className="cTD4">✓</td>
                                 </tr>
                                 <tr>
                                    <td className="cTD1">
                                       Deployments to cloud platforms
                                    </td>
                                    <td className="cTD2">Choreo Cloud</td>
                                    <td className="cTD3" >
                                       Azure, AWS, GCP, OpenShift, VMWare Tanzu, and any Kubernetes cluster 
                                    </td>
                                    <td className="cTD4">
                                       Azure, AWS, GCP, OpenShift, VMWare Tanzu, and any Kubernetes cluster
                                    </td>
                                 </tr>
                              </tbody>
                           </table>


        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Integration</Accordion.Header>
        <Accordion.Body className='card-body'>

 <table className="cTable">
                              <tbody>
                                 <tr>
                                    <td className="cTD1">
                                       Triggers
                                    </td>
                                    <td className="cTD2">✓</td>
                                    <td className="cTD3">✓</td>
                                    <td className="cTD4">✓</td>
                                 </tr>
                                 <tr>
                                    <td className="cTD1">
                                       Scheduled jobs
                                    </td>
                                    <td className="cTD2">✓</td>
                                    <td className="cTD3">✓</td>
                                    <td className="cTD4">✓</td>
                                 </tr>
                              </tbody>
                           </table>
                           

        
        </Accordion.Body>
      </Accordion.Item>


      <Accordion.Item eventKey="2">
        <Accordion.Header> AI-Assisted</Accordion.Header>
        <Accordion.Body className='card-body'>
        <table className="cTable">
                      <tbody>
                                 <tr>
                                    <td className="cTD1">
                                       API testing with natural language
                                    </td>
                                    <td className="cTD2">✓</td>
                                    <td className="cTD3">✓</td>
                                    <td className="cTD4">✓ </td>
                                 </tr>
                                 <tr>
                                    <td className="cTD1">
                                       Anomaly detection
                                    </td>
                                    <td className="cTD2">✓</td>
                                    <td className="cTD3">✓</td>
                                    <td className="cTD4">✓ </td>
                                 </tr>
                               </tbody>
                           </table>

        </Accordion.Body>
      </Accordion.Item>



      <Accordion.Item eventKey="3">
        <Accordion.Header>API Management</Accordion.Header>
        <Accordion.Body className='card-body'>
        
<table className="cTable">
                              <tbody>
                                 <tr>
                                    <td className="cTD1">
                                       Create new APIs
                                    </td>
                                    <td className="cTD2">✓</td>
                                    <td className="cTD3">✓</td>
                                    <td className="cTD4">✓</td>
                                 </tr>
                                 <tr>
                                    <td className="cTD1">
                                       Secure APIs
                                    </td>
                                    <td className="cTD2">✓</td>
                                    <td className="cTD3">✓</td>
                                    <td className="cTD4">✓</td>
                                 </tr>
                                 <tr>
                                    <td className="cTD1">
                                       Test APIs
                                    </td>
                                    <td className="cTD2">✓ </td>
                                    <td className="cTD3">✓ </td>
                                    <td className="cTD4">✓</td>
                                 </tr>
                                 <tr>
                                    <td className="cTD1">
                                       API developer portal
                                    </td>
                                    <td className="cTD2">✓ </td>
                                    <td className="cTD3">✓ </td>
                                    <td className="cTD4">✓</td>
                                 </tr>
                                 <tr>
                                    <td className="cTD1">
                                       API analytics and insights
                                    </td>
                                    <td className="cTD2">
                                       Limited
                                    </td>
                                    <td className="cTD3">✓ </td>
                                    <td className="cTD4">✓</td>
                                 </tr>
                                 <tr>
                                    <td className="cTD1">
                                       API requests and calls
                                    </td>
                                    <td className="cTD2">
                                       Limited
                                    </td>
                                    <td className="cTD3">
                                       Limited
                                    </td>
                                    <td className="cTD4">Unlimited</td>
                                 </tr>
                                 <tr>
                                    <td className="cTD1">
                                       API monetization
                                    </td>
                                    <td className="cTD2">✓ </td>
                                    <td className="cTD3">✓ </td>
                                    <td className="cTD4">✓</td>
                                 </tr>
                              </tbody>
                           </table>

        </Accordion.Body>
      </Accordion.Item>


      <Accordion.Item eventKey="4">
        <Accordion.Header>Monitoring and Observability</Accordion.Header>
        <Accordion.Body className='card-body'>
        <table className="cTable">
                              <tbody>
                                 <tr>
                                    <td className="cTD1">
                                       Monitoring dashboard
                                    </td>
                                    <td className="cTD2">✓</td>
                                    <td className="cTD3">✓</td>
                                    <td className="cTD4">✓</td>
                                 </tr>
                                 <tr>
                                    <td className="cTD1">
                                       Logs
                                    </td>
                                    <td className="cTD2">
                                       Limited
                                    </td>
                                    <td className="cTD3">
                                       Limited
                                    </td>
                                    <td className="cTD4">✓</td>
                                 </tr>
                                 <tr>
                                    <td className="cTD1">
                                       Traces
                                    </td>
                                    <td className="cTD2">
                                       Limited
                                    </td>
                                    <td className="cTD3">
                                       Limited
                                    </td>
                                    <td className="cTD4">✓</td>
                                 </tr>
                                 <tr>
                                    <td className="cTD1">
                                       Alerting
                                    </td>
                                    <td className="cTD2">
                                       Limited
                                    </td>
                                    <td className="cTD3">✓</td>
                                    <td className="cTD4">✓</td>
                                 </tr>
                                 <tr>
                                    <td className="cTD1">
                                       Third-party extensions
                                    </td>
                                    <td className="cTD2">
                                       <strong>-</strong>
                                    </td>
                                    <td className="cTD3">
                                       Limited
                                    </td>
                                    <td className="cTD4">✓</td>
                                 </tr>
                              </tbody>
                           </table>

        </Accordion.Body>
      </Accordion.Item>



      <Accordion.Item eventKey="5">
        <Accordion.Header>Security</Accordion.Header>
        <Accordion.Body className='card-body'>
        <table className="cTable">
                              <tbody>
                                 <tr>
                                    <td className="cTD1">
                                       SSO for API developer portal
                                    </td>
                                    <td className="cTD2">✓</td>
                                    <td className="cTD3">✓</td>
                                    <td className="cTD4">✓</td>
                                 </tr>
                                 <tr>
                                    <td className="cTD1">
                                       Enterprise login
                                    </td>
                                    <td className="cTD2"><strong>-</strong></td>
                                    <td className="cTD3">✓</td>
                                    <td className="cTD4">✓
                                    </td>
                                 </tr>
                                 <tr>
                                    <td className="cTD1">
                                       Container manifest scanning
                                    </td>
                                    <td className="cTD2">✓</td>
                                    <td className="cTD3">✓</td>
                                    <td className="cTD4">✓</td>
                                 </tr>
                                 <tr>
                                    <td className="cTD1">
                                       Container static scanning
                                    </td>
                                    <td className="cTD2">✓</td>
                                    <td className="cTD3">✓</td>
                                    <td className="cTD4">✓</td>
                                 </tr>
                                 <tr>
                                    <td className="cTD1">
                                       Run-time container security
                                    </td>
                                    <td className="cTD2">✓</td>
                                    <td className="cTD3">✓</td>
                                    <td className="cTD4">✓</td>
                                 </tr>
                                 <tr>
                                    <td className="cTD1">
                                       Role-based access control
                                    </td>
                                    <td className="cTD2">✓</td>
                                    <td className="cTD3">✓</td>
                                    <td className="cTD4">✓</td>
                                 </tr>
                                 <tr>
                                    <td className="cTD1">
                                       Third party identity provider (IdP)
                                    </td>
                                    <td className="cTD2">-</td>
                                    <td className="cTD3">✓</td>
                                    <td className="cTD4">✓</td>
                                 </tr>
                              </tbody>
                           </table>

        </Accordion.Body>
      </Accordion.Item>








      <Accordion.Item eventKey="7">
        <Accordion.Header>Platform Services</Accordion.Header>
        <Accordion.Body className='card-body'>
        <table className="cTable">
                              <tbody>
                                 <tr>
                                    <td className="cTD1">
                                       MySQL
                                    </td>
                                    <td className="cTD2">
                                       Limited
                                    </td>
                                    <td className="cTD3">Select a plan that suits you</td>
                                    <td className="cTD4">Select a plan that suits you</td>
                                 </tr>
                                 <tr>
                                    <td className="cTD1">
                                       PostgreSQL
                                    </td>
                                    <td className="cTD2">
                                       Limited
                                    </td>
                                    <td className="cTD3">Select a plan that suits you</td>
                                    <td className="cTD4">Select a plan that suits you
                                    </td>
                                 </tr>
                                 <tr>
                                    <td className="cTD1">
                                       Redis
                                    </td>
                                    <td className="cTD2">
                                       Limited
                                    </td>
                                    <td className="cTD3">Select a plan that suits you</td>
                                    <td className="cTD4">Select a plan that suits you</td>
                                 </tr>
                                 <tr>
                                    <td className="cTD1">
                                       Scale to zero
                                    </td>
                                    <td className="cTD2">✓</td>
                                    <td className="cTD3">✓</td>
                                    <td className="cTD4">✓</td>
                                 </tr>
                              </tbody>
                           </table>

        </Accordion.Body>
      </Accordion.Item>




      <Accordion.Item eventKey="8">
        <Accordion.Header>Utility Services</Accordion.Header>
        <Accordion.Body className='card-body'>
        <table className="cTable">
                              <tbody>
                                 <tr>
                                    <td className="cTD1">
                                       Custom domain mapping
                                    </td>
                                    <td className="cTD2">
                                       -
                                    </td>
                                    <td className="cTD3">✓</td>
                                    <td className="cTD4">✓</td>
                                 </tr>
                                 <tr>
                                    <td className="cTD1">
                                       Creating new user roles
                                    </td>
                                    <td className="cTD2">
                                       Only default roles allowed
                                 </td>
                                    <td className="cTD3">✓</td>
                                    <td className="cTD4">✓
                                    </td>
                                 </tr>
                                 <tr>
                                    <td className="cTD1">
                                       Number of environments
                                    </td>
                                    <td className="cTD2">
                                       2
                                    </td>
                                    <td className="cTD3">Unlimited</td>
                                    <td className="cTD4">Unlimited</td>
                                 </tr>
                              </tbody>
                           </table>

        </Accordion.Body>
      </Accordion.Item>







    </Accordion>









              </div>
            </div>
          </div>
        </Container>
      </section>







    </Layout>
  )
}



