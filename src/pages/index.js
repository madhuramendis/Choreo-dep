import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Nav from 'react-bootstrap/Nav';


import Tab from 'react-bootstrap/Tab';

import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

import Layout from '../layouts/LayoutHome';





import Script from 'next/script';







export default function Home() {



  return (
    <Layout>










      <div className="cIntro cGrayBackground">
        <Container>
          <Row>
            <Col sm={12} md={7}>
              <h1>You code, we engineer.</h1>
              <p>Code is art. To run in production needs engineering. Choreo builds, deploys, tests, runs and monitors so you can just code.</p>
            </Col>
            <Col sm={12} md={1}>&nbsp;</Col>
            <Col sm={12} md={4} className='cIframe'>
              {/* <iframe src="https://consolev2.preview-dv.choreo.dev/signup_embedded" title="Signup IFrame"></iframe> */}
              <img className='cLogin2' src="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/login2.jpg" />

            </Col>
          </Row>


        </Container>

      </div>





      <div className="cSection cWhiteBG">
        <Container>
          <Row>
            <Col sm={12} md={12}>
              <h2>Everything You Need to Build Apps in the Cloud</h2>

            </Col>

           
            <Col sm={12} md={3}>
              <div className='cGrayRoundedHighlightedBox cCat_host' data-aos="zoom-in-down">
                <h3>Host SaaS products</h3>
                {/* <h4>webapps, jobs, databases, APIs</h4> */}
                <img src="https://dummyimage.com/170x170/D9D9D9" />
                {/* <a href="" className='cLearnMore'>Learn More</a> */}
              </div>

            </Col>
            <Col sm={12} md={3}>
              <div className='cGrayRoundedHighlightedBox cCat_host' data-aos="zoom-in-down">
                <h3>Host web apps</h3>
                <img src="https://dummyimage.com/170x170/D9D9D9" />

                {/* <a href="" className='cLearnMore'>Learn More</a> */}
              </div>

            </Col>
            <Col sm={12} md={3}>
              <div className='cGrayRoundedHighlightedBox cCat_host' data-aos="zoom-in-down">
                <h3>Host APIs</h3>
                <img src="https://dummyimage.com/170x170/D9D9D9" />

                {/* <a href="" className='cLearnMore'>Learn More</a> */}
              </div>

            </Col>
            <Col sm={12} md={3}>
              <div className='cGrayRoundedHighlightedBox cCat_host' data-aos="zoom-in-down">
                <h3>Host jobs</h3>
                {/* <h4>webapps, jobs, databases, APIs</h4> */}
                <img src="https://dummyimage.com/170x170/D9D9D9" />

                {/* <a href="" className='cLearnMore'>Learn More</a> */}
              </div>

            </Col>



            <Col sm={12} md={3}>
              <div className='cGrayRoundedHighlightedBox cCat_Security'  data-aos="zoom-in-down">
                <h3>User authentication</h3>
                <img src="https://dummyimage.com/170x170/D9D9D9" />

                {/* <a href="" className='cLearnMore'>Learn More</a> */}
              </div>

            </Col>
            <Col sm={12} md={3}>
              <div className='cGrayRoundedHighlightedBox cCat_Security'  data-aos="zoom-in-down">
                <h3>Authorization management</h3>
                <img src="https://dummyimage.com/170x170/D9D9D9" />


                {/* <a href="" className='cLearnMore'>Learn More</a> */}
              </div>

            </Col>




            <Col sm={12} md={3}>
              <div className='cGrayRoundedHighlightedBox cDouble cCat_Security'  data-aos="zoom-in-down">
                <h3>Secure configuration management</h3>
                <img src="https://dummyimage.com/170x170/D9D9D9" />


                {/* <a href="" className='cLearnMore'>Learn More</a> */}
              </div>

            </Col>

            <Col sm={12} md={3}>
              <div className='cGrayRoundedHighlightedBox'  data-aos="zoom-in-down">
                <h3>Cloud native</h3>
                <img src="https://dummyimage.com/170x170/D9D9D9" />


                {/* <a href="" className='cLearnMore'>Learn More</a> */}
              </div>

            </Col>

            <Col sm={12} md={3}>
              <div className='cGrayRoundedHighlightedBox cCat_Deployment'  data-aos="zoom-in-down">
                <h3>Multi-environment deployment</h3>
                <img src="https://dummyimage.com/170x170/D9D9D9" />


                {/* <a href="" className='cLearnMore'>Learn More</a> */}
              </div>

            </Col>

            <Col sm={12} md={3}>
              <div className='cGrayRoundedHighlightedBox cCat_Deployment'  data-aos="zoom-in-down">
                <h3>Multi-cloud deployment</h3>
                <img src="https://dummyimage.com/170x170/D9D9D9" />


                {/* <a href="" className='cLearnMore'>Learn More</a> */}
              </div>

            </Col>

            <Col sm={12} md={3}>
              <div className='cGrayRoundedHighlightedBox cCat_Deployment'  data-aos="zoom-in-down">
                <h3>Zero trust deployment</h3>
                <img src="https://dummyimage.com/170x170/D9D9D9" />


                {/* <a href="" className='cLearnMore'>Learn More</a> */}
              </div>

            </Col>


            <Col sm={12} md={3}>
              <div className='cGrayRoundedHighlightedBox  cCat_Deployment'  data-aos="zoom-in-down">
                <h3>Scalable deployment</h3>
                <img src="https://dummyimage.com/170x170/D9D9D9" />


                {/* <a href="" className='cLearnMore'>Learn More</a> */}
              </div>

            </Col>

            <Col sm={12} md={3}>
              <div className='cGrayRoundedHighlightedBox cCat_Deployment'  data-aos="zoom-in-down">
                <h3>Laptop deployment</h3>
                <img src="https://dummyimage.com/170x170/D9D9D9" />


                {/* <a href="" className='cLearnMore'>Learn More</a> */}
              </div>

            </Col>

            <Col sm={12} md={3}>
              <div className='cGrayRoundedHighlightedBox cCat_Deployment'  data-aos="zoom-in-down">
                <h3>Kubernetes deployment</h3>
                <img src="https://dummyimage.com/170x170/D9D9D9" />


                {/* <a href="" className='cLearnMore'>Learn More</a> */}
              </div>

            </Col>





            <Col sm={12} md={3}>
              <div className='cGrayRoundedHighlightedBox cCat_Deployment'  data-aos="zoom-in-down">
                <h3>Highly available deployment</h3>
                <img src="https://dummyimage.com/170x170/D9D9D9" />


                {/* <a href="" className='cLearnMore'>Learn More</a> */}
              </div>

            </Col>
            <Col sm={12} md={3}>
              <div className='cGrayRoundedHighlightedBox cCat_Deployment'  data-aos="zoom-in-down">
                <h3>CICD</h3>
                <img src="https://dummyimage.com/170x170/D9D9D9" />


                {/* <a href="" className='cLearnMore'>Learn More</a> */}
              </div>

            </Col>
            <Col sm={12} md={3}>
              <div className='cGrayRoundedHighlightedBox cCat_Development'  data-aos="zoom-in-down">
                <h3>Multi-version development</h3>
                <img src="https://dummyimage.com/170x170/D9D9D9" />


                {/* <a href="" className='cLearnMore'>Learn More</a> */}
              </div>

            </Col>
            <Col sm={12} md={3}>
              <div className='cGrayRoundedHighlightedBox cCat_Development'  data-aos="zoom-in-down">
                <h3>VSCode plugin</h3>
                <img src="https://dummyimage.com/170x170/D9D9D9" />


                {/* <a href="" className='cLearnMore'>Learn More</a> */}
              </div>

            </Col>
            <Col sm={12} md={3}>
              <div className='cGrayRoundedHighlightedBox cDouble cCat_Development'  data-aos="zoom-in-down">
                <h3>GitHub and BitBucket integration</h3>
                <img src="https://dummyimage.com/170x170/D9D9D9" />


                {/* <a href="" className='cLearnMore'>Learn More</a> */}
              </div>

            </Col>
            <Col sm={12} md={3}>
              <div className='cGrayRoundedHighlightedBox cCat_Development'  data-aos="zoom-in-down">
                <h3>Unit and integration testing</h3>
                <img src="https://dummyimage.com/170x170/D9D9D9" />


                {/* <a href="" className='cLearnMore'>Learn More</a> */}
              </div>

            </Col>
            <Col sm={12} md={3}>
              <div className='cGrayRoundedHighlightedBox cDouble cCat_Management'  data-aos="zoom-in-down">
                <h3>Manage multiple projects and components</h3>
                <img src="https://dummyimage.com/170x170/D9D9D9" />


                {/* <a href="" className='cLearnMore'>Learn More</a> */}
              </div>

            </Col>
            <Col sm={12} md={3}>
              <div className='cGrayRoundedHighlightedBox cCat_Management'  data-aos="zoom-in-down">
                <h3>Team management</h3>
                <img src="https://dummyimage.com/170x170/D9D9D9" />


                {/* <a href="" className='cLearnMore'>Learn More</a> */}
              </div>

            </Col>
            <Col sm={12} md={3}>
              <div className='cGrayRoundedHighlightedBox'  data-aos="zoom-in-down">
                <h3>AI augmented engineering</h3>
                <img src="https://dummyimage.com/170x170/D9D9D9" />


                {/* <a href="" className='cLearnMore'>Learn More</a> */}
              </div>

            </Col>
            <Col sm={12} md={3}>
              <div className='cGrayRoundedHighlightedBox'  data-aos="zoom-in-down">
                <h3>Cell-based architecture</h3>
                <img src="https://dummyimage.com/170x170/D9D9D9" />


                {/* <a href="" className='cLearnMore'>Learn More</a> */}
              </div>

            </Col>
            <Col sm={12} md={3}>
              <div className='cGrayRoundedHighlightedBox cCat_Observability'  data-aos="zoom-in-down"> 
                <h3>Troubleshooting and monitoring</h3>
                <img src="https://dummyimage.com/170x170/D9D9D9" />


                {/* <a href="" className='cLearnMore'>Learn More</a> */}
              </div>

            </Col>
            <Col sm={12} md={3}>
              <div className='cGrayRoundedHighlightedBox  cCat_Observability'  data-aos="zoom-in-down">
                <h3>DORA metrics</h3>
                <img src="https://dummyimage.com/170x170/D9D9D9" />


                {/* <a href="" className='cLearnMore'>Learn More</a> */}
              </div>

            </Col>

            <Col sm={12} md={3}>
              <div className='cGrayRoundedHighlightedBox cCat_Observability'  data-aos="zoom-in-down">
                <h3>Delivery insights</h3>
                <img src="https://dummyimage.com/170x170/D9D9D9" />


                {/* <a href="" className='cLearnMore'>Learn More</a> */}
              </div>

            </Col>

            <Col sm={12} md={3}>
              <div className='cGrayRoundedHighlightedBox  cCat_Observability'  data-aos="zoom-in-down">
                <h3>Usage insights</h3>
                <img src="https://dummyimage.com/170x170/D9D9D9" />


                {/* <a href="" className='cLearnMore'>Learn More</a> */}
              </div>

            </Col>

            <Col sm={12} md={3}>
              <div className='cGrayRoundedHighlightedBox cDouble cCat_Observability'  data-aos="zoom-in-down">
                <h3>eBPF and Cilium-based observability</h3>
                <img src="https://dummyimage.com/170x170/D9D9D9" />


                {/* <a href="" className='cLearnMore'>Learn More</a> */}
              </div>

            </Col>



            <Col sm={12} md={3}>
              <div className='cGrayRoundedHighlightedBox'  data-aos="zoom-in-down">
                <h3>API management and portal</h3>
                <img src="https://dummyimage.com/170x170/D9D9D9" />


                {/* <a href="" className='cLearnMore'>Learn More</a> */}
              </div>

            </Col>

            <Col sm={12} md={3}>
              <div className='cGrayRoundedHighlightedBox'  data-aos="zoom-in-down">
                <h3>API marketplace and reuse</h3>
                <img src="https://dummyimage.com/170x170/D9D9D9" />


                {/* <a href="" className='cLearnMore'>Learn More</a> */}
              </div>

            </Col>

            <Col sm={12} md={3}>
              <div className='cGrayRoundedHighlightedBox'  data-aos="zoom-in-down">
                <h3>Cost optimization</h3>
                <img src="https://dummyimage.com/170x170/D9D9D9" />


                {/* <a href="" className='cLearnMore'>Learn More</a> */}
              </div>

            </Col>






          </Row>


          {/* 
            <Row>
            <Col sm={12} md={4} className='cCenterButton'></Col>

            <Col sm={12} md={4} className='cCenterButton'>
           
            <a className="cChoreoButton cMainSignupButtom cLearnMore cLearnMoreX" href="/choreo/" target="_blank" rel="noopener" aria-label="Learn More">Explore all Choreo features</a>


            </Col>

            <Col sm={12} md={4} className='cCenterButton'></Col>

          </Row> */}





        </Container>

      </div>



      <div className="cSection cWhiteBG">
        <Container>
          <Row>
            <Col sm={12} md={12}>
              <h2>Develop in Any Language or Framework of Your Choice</h2>

            </Col>

            <Col sm={12} md={6}>
              <div className='cWhiteRoundedHighlightedBox cLogoTile' >
                <Row>
                  <Col sm={12} md={12}>
                    {/* <h3>Languages</h3> */}
                  </Col>
                  <Col sm={12} md={2}>&nbsp;</Col>
                  <Col sm={12} md={2}>
                    <div className=' cLogoTile'>
                      <img src="https://wso2.cachefly.net/wso2/sites/all/2023/images/webp/choreodev/choreo-logos-03.webp" />
                    </div>
                  </Col>
                  <Col sm={12} md={2}>
                    <div className=' cLogoTile'>
                      <img src="https://wso2.cachefly.net/wso2/sites/all/2023/images/webp/choreodev/choreo-logos-01.webp" />
                    </div>
                  </Col>
                  <Col sm={12} md={2}>
                    <div className=' cLogoTile'>
                      <img src="https://wso2.cachefly.net/wso2/sites/all/2023/images/webp/choreodev/choreo-logos-07.webp" />
                    </div>
                  </Col>

                  <Col sm={12} md={2}>
                    <div className=' cLogoTile'>
                      <img src="https://wso2.cachefly.net/wso2/sites/all/2023/images/webp/choreodev/choreo-logos-04.webp" />
                    </div>
                  </Col>

                  <Col sm={12} md={2}>&nbsp;</Col>
                  <Col sm={12} md={2}>&nbsp;</Col>
                  <Col sm={12} md={2}>
                    <div className=' cLogoTile'>
                      <img src="https://wso2.cachefly.net/wso2/sites/all/2023/images/webp/choreodev/choreo-logos-05.webp" />
                    </div>
                  </Col>
                  <Col sm={12} md={2}>
                    <div className=' cLogoTile'>
                      <img src="https://wso2.cachefly.net/wso2/sites/all/2023/images/webp/choreodev/choreo-logos-06.webp" />
                    </div>
                  </Col>
                  <Col sm={12} md={2}>
                    <div className=' cLogoTile'>
                      <img src="https://wso2.cachefly.net/wso2/sites/all/2023/images/webp/choreodev/ruby.webp" />
                    </div>
                  </Col>















                </Row>
              </div>
            </Col>

            <Col sm={12} md={6}>
              <div className='cWhiteRoundedHighlightedBox cLogoTile' >

                <Row>
                  <Col sm={12} md={12}>
                    {/* <h3>Frameworks</h3> */}
                  </Col>
                  <Col sm={12} md={2}>
                    <div className=' cLogoTile'>
                      <img src="https://wso2.cachefly.net/wso2/sites/all/2023/images/webp/choreodev/choreo-logos-set2-01-01.webp" />
                    </div>
                  </Col>
                  <Col sm={12} md={2}>
                    <div className=' cLogoTile'>
                      <img src="https://wso2.cachefly.net/wso2/sites/all/2023/images/webp/choreodev/choreo-logos-set2-01-02.webp" />
                    </div>
                  </Col>
                  <Col sm={12} md={2}>
                    <div className=' cLogoTile'>
                      <img src="https://wso2.cachefly.net/wso2/sites/all/2023/images/webp/choreodev/choreo-logos-set2-01-04.webp" />
                    </div>
                  </Col>

                  <Col sm={12} md={2}>
                    <div className=' cLogoTile'>
                      <img src="https://wso2.cachefly.net/wso2/sites/all/2023/images/webp/choreodev/choreo-logos-set2-01-09.webp" />
                    </div>
                  </Col>




                  <Col sm={12} md={2}>
                    <div className=' cLogoTile'>
                      <img src="https://wso2.cachefly.net/wso2/sites/all/2023/images/webp/choreodev/choreo-logos-02.webp" />
                    </div>
                  </Col>
                  <Col sm={12} md={2}>
                    <div className=' cLogoTile'>
                      <img src="https://wso2.cachefly.net/wso2/sites/all/2023/images/webp/choreodev/choreo-logos-08.webp" />
                    </div>
                  </Col>
                  <Col sm={12} md={2}>
                    <div className=' cLogoTile'>
                      <img src="https://wso2.cachefly.net/wso2/sites/all/2023/images/webp/choreodev/choreo-logos-09.webp" />
                    </div>
                  </Col>
                  <Col sm={12} md={2}>
                    <div className=' cLogoTile'>
                      <img src="https://wso2.cachefly.net/wso2/sites/all/2023/images/webp/choreodev/choreo-logos-10.webp" />
                    </div>
                  </Col>

                  <Col sm={12} md={2}>
                    <div className=' cLogoTile'>
                      <img src="https://wso2.cachefly.net/wso2/sites/all/2023/images/webp/choreodev/choreo-logos-11.webp" />
                    </div>
                  </Col>


                  <Col sm={12} md={2}>
                    <div className=' cLogoTile'>
                      <img src="https://wso2.cachefly.net/wso2/sites/all/2023/images/webp/choreodev/choreo-logos-set2-01-03.webp" />
                    </div>
                  </Col>

                  <Col sm={12} md={2}>
                    <div className=' cLogoTile'>
                      <img src="https://wso2.cachefly.net/wso2/sites/all/2023/images/webp/choreodev/choreo-logos-set2-01-05.webp" />
                    </div>
                  </Col>



















                </Row>





              </div>
            </Col>





          </Row>
        </Container>
      </div>


      <div className="cSection cWhiteBG cCustomerLogos">
        <Container>
          <Row>
            <Col sm={12} md={12}>
              <h2>Loved by Developers</h2>

            </Col>
            <Col sm={12} md={12}>
              <div className='cWhiteRoundedHighlightedBox'>
                <Row>
                  <Col sm={12} md={6}>
                    <img src="https://wso2.cachefly.net/wso2/sites/all/2023/images/webp/choreodev/choreodev-logos-set-02-01.webp" />
                  </Col>
                  <Col sm={12} md={6}>
                    <img src="https://wso2.cachefly.net/wso2/sites/all/2023/images/webp/choreodev/choreodev-logos-set-02-02.webp" />
                  </Col>
                </Row>
              </div>
            </Col>
            <Col sm={12} md={12}>



























            </Col>
          </Row>
        </Container>
      </div>

      <Container>
        <Row>
          <div className="masonry">
            <div className="item">
              <div className='cWhiteRoundedHighlightedBox cQtile'>

                <img className='cQmark' src="https://wso2.cachefly.net/wso2/sites/all/2023/images/webp/quote-icon-ash.webp" />
                <p className='cQtext'>The financial savings it represents for my startup is considerable. However, the true value is in the WSO2 team's expertise and the deeply hands-on approach they take to getting you up and running on their platforms.</p>
                <p className='cQauthor'>Richard Davis,<br/> Founder,</p>
                <a target='_blank' href='https://www.topmarks.ai/'><img src="https://wso2.cachefly.net/wso2/sites/all/2023/images/webp/choreodev/topmarks-01.webp"/></a>
              </div>

            </div>
            <div className="item">

              <div className='cWhiteRoundedHighlightedBox cQtile'>
                <img className='cQmark' src="https://wso2.cachefly.net/wso2/sites/all/2023/images/webp/quote-icon-ash.webp" />
                <p className='cQtext'>IIIT Hyderabad works on various innovative technology solutions that help nonprofits in healthcare, education and other sectors to support the communities they serve. Using Choreo and its marketplace, we are providing a one-stop-shop where nonprofits can access APIs to applications and services without having to know which organizations they come from. Choreo also automates API documentation, single sign-on, and management of the underlying infrastructure, which has freed up our team to focus on making new solutions available faster.</p>
                <p className='cQauthor'>Khoushik Ananth,<br/>Lead Engineer, </p>
                <img className='cQlogo'  src="https://wso2.cachefly.net/wso2/sites/all/2023/images/webp/choreodev/iith.webp"/>
            
              </div>


            </div>
            <div className="item">
              <div className='cWhiteRoundedHighlightedBox cQtile'>
                <img className='cQmark' src="https://wso2.cachefly.net/wso2/sites/all/2023/images/webp/quote-icon-ash.webp" />
                <p className='cQtext'>Choreo provides a straightforward solution for platform engineering and management aspects compared to other tools out there.</p>
                <p className='cQauthor'>Suren Rodrigo,<br/>CPO, </p>
                <img className='cQlogo'  src="https://wso2.cachefly.net/wso2/sites/all/2023/images/webp/choreodev/99xlogo-01.webp"/>
            
              </div>
            </div>
            <div className="item">
              <div className='cWhiteRoundedHighlightedBox cQtile'>
                <img className='cQmark' src="https://wso2.cachefly.net/wso2/sites/all/2023/images/webp/quote-icon-ash.webp" />
                <p className='cQtext'>You can easily build and deploy apps with a single click. Errors can be easily identified, which is helpful for troubleshooting. It guides a user step by step on what needs to be done next.</p>
                <p className='cQauthor'>Dilhani Gamhatha,<br/>Software Engineer,</p>
                <img className='cQlogo'  src="https://wso2.cachefly.net/wso2/sites/all/2023/images/webp/choreodev/99xlogo-01.webp"/>
              </div>
            </div>
            <div className="item">
              <div className='cWhiteRoundedHighlightedBox cQtile'>
                <img className='cQmark' src="https://wso2.cachefly.net/wso2/sites/all/2023/images/webp/quote-icon-ash.webp" />
                <p className='cQtext'>Choreo allows you to develop APIs with a great user experience that's focused on the developer like never before. You are fully productive from start to finish. Choreo has knocked down the time-to-market!</p>
                <p className='cQauthor'>Fidel Prieto Estrada, <br/>Integration Consultant, </p>
                <img className='cQlogo'  src="https://wso2.cachefly.net/wso2/sites/all/2023/images/webp/choreodev/inetum-01.webp"/>
              </div>
            </div>
            <div className="item">
              <div className='cWhiteRoundedHighlightedBox cQtile'>
                <img className='cQmark' src="https://wso2.cachefly.net/wso2/sites/all/2023/images/webp/quote-icon-ash.webp" />
                <p className='cQtext'>Choreo is a user-friendly, easy to understand platform. The application deployment flow is simple, understandable and clear. It provides a wide range of features for seamless application deployment</p>
                <p className='cQauthor'>Kavinda Senarathne<br/> Associate Technical Lead, </p>
                <img className='cQlogo' src="https://wso2.cachefly.net/wso2/sites/all/2023/images/webp/choreodev/99xlogo-01.webp"/>
              </div>
            </div>
          </div>
        </Row>
      </Container>


      <div className="cSection cWhiteBG cCustomerLogos">
        <Container>
          <Row>
            <Col sm={12} md={12}>
              <h2>Why Use Choreo?</h2>



              <table className='table cFeatureTable'>
    <tbody>
    <tr>
    <th className='cFeature'>
      <span>Feature</span>

    </th>
    <th className='cFeatureChoreo cTopShadow cDataRight'>
    <span>Choreo</span>
    </th>
    <th className='cFeaturHerokue'>
    <span>Heroku</span>
    
    </th>
    <th className='cFeatureAWS'>
    <span>AWS Amplify</span>
    
    </th>
    <th className='cFeatureVercel'>
    <span>Vercel</span>
    
    </th>
    <th className='cFeatureRailway'>
    <span>Railway</span>
    
    </th>
    <th className='cFeatureRender'>
    <span>Render</span>
    
    </th>
    </tr>
    <tr>
    <td className='cFeatureName'>
    <span>User authentication and authorization management</span>
    </td>
    <td className='cDataRight'>
    <span><img src="//wso2.cachefly.net/wso2/sites/all/2023/images/webp/tick-green.webp" className="ls-is-cached lazyloaded " loading="lazy"/></span>
   
    </td>
    <td>
   <span> <img src="//wso2.cachefly.net/wso2/sites/all/2023/images/webp/cross-red.webp" className="ls-is-cached lazyloaded " loading="lazy"/></span>
    </td>
    <td>
   <span> <img src="//wso2.cachefly.net/wso2/sites/all/2023/images/webp/cross-red.webp" className="ls-is-cached lazyloaded " loading="lazy"/></span>
    </td>
    <td>
   <span> <img src="//wso2.cachefly.net/wso2/sites/all/2023/images/webp/cross-red.webp" className="ls-is-cached lazyloaded " loading="lazy"/></span>
    </td>
    <td>
   <span> <img src="//wso2.cachefly.net/wso2/sites/all/2023/images/webp/cross-red.webp" className="ls-is-cached lazyloaded " loading="lazy"/></span>
    </td>
    <td>
   <span> <img src="//wso2.cachefly.net/wso2/sites/all/2023/images/webp/cross-red.webp" className="ls-is-cached lazyloaded " loading="lazy"/></span>
    </td>
    </tr>
    <tr>
    <td className='cFeatureName'>
      <span>Autoscaling of apps</span>
   
    </td>
    <td className='cDataRight'>
   <span> <img src="//wso2.cachefly.net/wso2/sites/all/2023/images/webp/tick-green.webp" className="ls-is-cached lazyloaded " loading="lazy"/></span>
    </td>
    <td>
   <span> <img src="//wso2.cachefly.net/wso2/sites/all/2023/images/webp/tick-green.webp" className="ls-is-cached lazyloaded " loading="lazy"/></span>
    </td>
    <td>
   <span> <img src="//wso2.cachefly.net/wso2/sites/all/2023/images/webp/tick-green.webp" className="ls-is-cached lazyloaded " loading="lazy"/></span>
    </td>
    <td>
   <span> <img src="//wso2.cachefly.net/wso2/sites/all/2023/images/webp/cross-red.webp" className="ls-is-cached lazyloaded " loading="lazy"/></span>
    </td>
    <td>
   <span> <img src="//wso2.cachefly.net/wso2/sites/all/2023/images/webp/tick-green.webp" className="ls-is-cached lazyloaded " loading="lazy"/></span>
    </td>
    <td>
   <span> <img src="//wso2.cachefly.net/wso2/sites/all/2023/images/webp/tick-green.webp" className="ls-is-cached lazyloaded " loading="lazy"/></span>
    </td>
    </tr>
    <tr>
    <td className='cFeatureName'>
    <span>Docker-based development using Dockerfiles</span>
    
    </td>
    <td className='cDataRight'>
   <span> <img src="//wso2.cachefly.net/wso2/sites/all/2023/images/webp/tick-green.webp" className="ls-is-cached lazyloaded " loading="lazy"/></span>
    </td>
    <td>
   <span> <img src="//wso2.cachefly.net/wso2/sites/all/2023/images/webp/tick-green.webp" className="ls-is-cached lazyloaded " loading="lazy"/></span>
    </td>
    <td>
   <span> <img src="//wso2.cachefly.net/wso2/sites/all/2023/images/webp/cross-red.webp" className="ls-is-cached lazyloaded " loading="lazy"/></span>
    </td>
    <td>
   <span> <img src="//wso2.cachefly.net/wso2/sites/all/2023/images/webp/cross-red.webp" className="ls-is-cached lazyloaded " loading="lazy"/></span>
    </td>
    <td>
   <span> <img src="//wso2.cachefly.net/wso2/sites/all/2023/images/webp/tick-green.webp" className="ls-is-cached lazyloaded " loading="lazy"/></span>
    </td>
    <td>
   <span> <img src="//wso2.cachefly.net/wso2/sites/all/2023/images/webp/tick-green.webp" className="ls-is-cached lazyloaded " loading="lazy"/></span>
    </td>
    </tr>
    <tr>
    <td className='cFeatureName'>
    <span>Multiple runtime support</span>
   
    </td>
    <td className='cDataRight'>
   <span> <img src="//wso2.cachefly.net/wso2/sites/all/2023/images/webp/tick-green.webp" className="ls-is-cached lazyloaded " loading="lazy"/></span>
    </td>
    <td>
   <span> <img src="//wso2.cachefly.net/wso2/sites/all/2023/images/webp/cross-red.webp" className="ls-is-cached lazyloaded " loading="lazy"/></span>
    </td>
    <td>
   <span> <img src="//wso2.cachefly.net/wso2/sites/all/2023/images/webp/tick-green.webp" className="ls-is-cached lazyloaded " loading="lazy"/></span>
    </td>
    <td>
   <span> <img src="//wso2.cachefly.net/wso2/sites/all/2023/images/webp/cross-red.webp" className="ls-is-cached lazyloaded " loading="lazy"/></span>
    </td>
    <td>
   <span> <img src="//wso2.cachefly.net/wso2/sites/all/2023/images/webp/cross-red.webp" className="ls-is-cached lazyloaded " loading="lazy"/></span>
    </td>
    <td>
   <span> <img src="//wso2.cachefly.net/wso2/sites/all/2023/images/webp/cross-red.webp" className="ls-is-cached lazyloaded " loading="lazy"/></span>
    </td>
    </tr>
    <tr>
    <td className='cFeatureName'>
    <span>Laptop deployment</span>
    </td>
    <td className='cDataRight'>
   <span> <img src="//wso2.cachefly.net/wso2/sites/all/2023/images/webp/tick-green.webp" className="ls-is-cached lazyloaded " loading="lazy"/></span>
    </td>
    <td>
   <span> <img src="//wso2.cachefly.net/wso2/sites/all/2023/images/webp/cross-red.webp" className="ls-is-cached lazyloaded " loading="lazy"/></span>
    </td>
    <td>
   <span> <img src="//wso2.cachefly.net/wso2/sites/all/2023/images/webp/cross-red.webp" className="ls-is-cached lazyloaded " loading="lazy"/></span>
    </td>
    <td>
   <span> <img src="//wso2.cachefly.net/wso2/sites/all/2023/images/webp/cross-red.webp" className="ls-is-cached lazyloaded " loading="lazy"/></span>
    </td>
    <td>
   <span> <img src="//wso2.cachefly.net/wso2/sites/all/2023/images/webp/cross-red.webp" className="ls-is-cached lazyloaded " loading="lazy"/></span>
    </td>
    <td>
   <span> <img src="//wso2.cachefly.net/wso2/sites/all/2023/images/webp/cross-red.webp" className="ls-is-cached lazyloaded " loading="lazy"/></span>
    </td>
    </tr>
    <tr>
    <td className='cFeatureName'>
    <span>Multi environment support</span>
    </td>
    <td className='cDataRight'>
   <span> <img src="//wso2.cachefly.net/wso2/sites/all/2023/images/webp/tick-green.webp" className="ls-is-cached lazyloaded " loading="lazy"/></span>
    </td>
    <td>
   <span> <img src="//wso2.cachefly.net/wso2/sites/all/2023/images/webp/tick-green.webp" className="ls-is-cached lazyloaded " loading="lazy"/></span>
    </td>
    <td>
   <span> <img src="//wso2.cachefly.net/wso2/sites/all/2023/images/webp/tick-green.webp" className="ls-is-cached lazyloaded " loading="lazy"/></span>
    </td>
    <td>
   <span> <img src="//wso2.cachefly.net/wso2/sites/all/2023/images/webp/tick-green.webp" className="ls-is-cached lazyloaded " loading="lazy"/></span>
    </td>
    <td>
   <span> <img src="//wso2.cachefly.net/wso2/sites/all/2023/images/webp/tick-green.webp" className="ls-is-cached lazyloaded " loading="lazy"/></span>
    </td>
    <td>
   <span> <img src="//wso2.cachefly.net/wso2/sites/all/2023/images/webp/tick-green.webp" className="ls-is-cached lazyloaded " loading="lazy"/></span>
    </td>
    </tr>
    <tr>
    <td className='cFeatureName'>
    <span> API management</span>

    </td>
    <td className='cDataRight'>
   <span> <img src="//wso2.cachefly.net/wso2/sites/all/2023/images/webp/tick-green.webp" className="ls-is-cached lazyloaded " loading="lazy"/></span>
    </td>
    <td>
   <span> <img src="//wso2.cachefly.net/wso2/sites/all/2023/images/webp/cross-red.webp" className="ls-is-cached lazyloaded " loading="lazy"/></span>
    </td>
    <td>
   <span> <img src="//wso2.cachefly.net/wso2/sites/all/2023/images/webp/tick-green.webp" className="ls-is-cached lazyloaded " loading="lazy"/></span>
    </td>
    <td>
   <span> <img src="//wso2.cachefly.net/wso2/sites/all/2023/images/webp/cross-red.webp" className="ls-is-cached lazyloaded " loading="lazy"/></span>
    </td>
    <td>
   <span> <img src="//wso2.cachefly.net/wso2/sites/all/2023/images/webp/cross-red.webp" className="ls-is-cached lazyloaded " loading="lazy"/></span>
    </td>
    <td>
   <span> <img src="//wso2.cachefly.net/wso2/sites/all/2023/images/webp/cross-red.webp" className="ls-is-cached lazyloaded " loading="lazy"/></span>
    </td>
    </tr>
    <tr>
    <td className='cFeatureName'>
    <span>Marketplace and reuse</span>
   
    </td>
    <td className='cDataRight'>
   <span> <img src="//wso2.cachefly.net/wso2/sites/all/2023/images/webp/tick-green.webp" className="ls-is-cached lazyloaded " loading="lazy"/></span>
    </td>
    <td>
   <span> <img src="//wso2.cachefly.net/wso2/sites/all/2023/images/webp/cross-red.webp" className="ls-is-cached lazyloaded " loading="lazy"/></span>
    </td>
    <td>
   <span> <img src="//wso2.cachefly.net/wso2/sites/all/2023/images/webp/cross-red.webp" className="ls-is-cached lazyloaded " loading="lazy"/></span>
    </td>
    <td>
   <span> <img src="//wso2.cachefly.net/wso2/sites/all/2023/images/webp/cross-red.webp" className="ls-is-cached lazyloaded " loading="lazy"/></span>
    </td>
    <td>
   <span> <img src="//wso2.cachefly.net/wso2/sites/all/2023/images/webp/cross-red.webp" className="ls-is-cached lazyloaded " loading="lazy"/></span>
    </td>
    <td>
   <span> <img src="//wso2.cachefly.net/wso2/sites/all/2023/images/webp/cross-red.webp" className="ls-is-cached lazyloaded " loading="lazy"/></span>
    </td>
    </tr>
    <tr>
    <td className='cFeatureName'>
    <span>Multi-version development</span>

    </td>
    <td className='cDataRight'>
   <span> <img src="//wso2.cachefly.net/wso2/sites/all/2023/images/webp/tick-green.webp" className="ls-is-cached lazyloaded " loading="lazy"/></span>
    </td>
    <td>
   <span> <img src="//wso2.cachefly.net/wso2/sites/all/2023/images/webp/cross-red.webp" className="ls-is-cached lazyloaded " loading="lazy"/></span>
    </td>
    <td>
   <span> <img src="//wso2.cachefly.net/wso2/sites/all/2023/images/webp/tick-green.webp" className="ls-is-cached lazyloaded " loading="lazy"/></span>
    </td>
    <td>
   <span> <img src="//wso2.cachefly.net/wso2/sites/all/2023/images/webp/cross-red.webp" className="ls-is-cached lazyloaded " loading="lazy"/></span>
    </td>
    <td>
   <span> <img src="//wso2.cachefly.net/wso2/sites/all/2023/images/webp/cross-red.webp" className="ls-is-cached lazyloaded " loading="lazy"/></span>
    </td>
    <td>
   <span> <img src="//wso2.cachefly.net/wso2/sites/all/2023/images/webp/cross-red.webp" className="ls-is-cached lazyloaded " loading="lazy"/></span>
    </td>
    </tr>
    <tr>
    <td className='cFeatureName'>
    <span> Query and visualize usage/analytics data</span>
 
    </td>
    <td className='cDataRight'>
   <span> <img src="//wso2.cachefly.net/wso2/sites/all/2023/images/webp/tick-green.webp" className="ls-is-cached lazyloaded " loading="lazy"/></span>
    </td>
    <td>
   <span> <img src="//wso2.cachefly.net/wso2/sites/all/2023/images/webp/cross-red.webp" className="ls-is-cached lazyloaded " loading="lazy"/></span>
    </td>
    <td>
   <span> <img src="//wso2.cachefly.net/wso2/sites/all/2023/images/webp/tick-green.webp" className="ls-is-cached lazyloaded " loading="lazy"/></span>
    </td>
    <td>
   <span> <img src="//wso2.cachefly.net/wso2/sites/all/2023/images/webp/tick-green.webp" className="ls-is-cached lazyloaded " loading="lazy"/></span>
    </td>
    <td>
   <span> <img src="//wso2.cachefly.net/wso2/sites/all/2023/images/webp/tick-green.webp" className="ls-is-cached lazyloaded " loading="lazy"/></span>
    </td>
    <td>
   <span> <img src="//wso2.cachefly.net/wso2/sites/all/2023/images/webp/cross-red.webp" className="ls-is-cached lazyloaded " loading="lazy"/></span>
    </td>
    </tr>

    <tr>
    <td className='cFeatureName cLastRow'>
    <span> &nbsp;</span>

    </td>
    <td className='cDataRight cLastRow'>
    <span> &nbsp;</span>
    </td>
    <td className='cLastRow'>
    <span> &nbsp;</span>
    </td>
    <td className='cLastRow'>
    <span> &nbsp;</span>
    </td>
    <td className='cLastRow'>
    <span> &nbsp;</span>
    </td>
    <td className='cLastRow'>
    <span> &nbsp;</span>
    </td>
    <td className='cLastRow'>
    <span> &nbsp;</span>
    </td>
    </tr>
    </tbody>
    </table>
















            </Col>
          </Row>
        </Container>
      </div>

   



      <div className="cSection cWhiteBG cCustomerLogos">
        <Container>
          <Row>
            <Col sm={12} md={12}>
              <h2>Try It for Free!!</h2>
            </Col>
            <Col sm={12} md={4}>
              <div className='cCalloutCol'>
                <h4>Ship Fast</h4>
                <h3>5 minutes</h3>
                <p>From code to production</p>
              </div>
            </Col>

            <Col sm={12} md={4}>
              <div className='cCalloutCol'>
                <h4>No Platform Expertise Needed</h4>
                <h3>0 minutes</h3>
                <p>Deploy your app without a cognitive load</p>
              </div>
            </Col>


            <Col sm={12} md={4}>
              <div className='cCalloutCol'>
                <h4>Focus on Your Code</h4>
                <h3>100%</h3>
                <p>And not everything around it</p>
              </div>
            </Col>
           

            </Row>
            </Container>
            </div>
















      







{/* 

      <div className="cSection cWhiteBG">
        <Container>
          <Row>
            <Col sm={12} md={12}>
              <h2>Resources</h2>

            </Col>
            <Col sm={12} md={4}>
              <div className='cWhiteRoundedHighlightedBox cResourcesTile'>
                <img src="//wso2.com/files/marketplace-and-connections-blogbanner.png" />

                <div className='cResourcesInfo'>
                  <h3>Introducing Choreo Marketplace and Connections</h3>





                  <a href="https://wso2.com/library/blogs/introducing-choreo-marketplace-and-connections/" className='cLearnMore'>Read Blog</a>
                </div>

              </div>

            </Col>

            <Col sm={12} md={4}>
              <div className='cWhiteRoundedHighlightedBox cResourcesTile'>
                <img src="https://wso2.com/files/buildpacksbanner.png" />

                <div className='cResourcesInfo'>
                  <h3>Multi-Language Support for Deploying Your Source Code with Buildpacks</h3>





                  <a href="https://wso2.com/library/blogs/multi-language-support-for-deploying-your-source-code-with-buildpacks/" className='cLearnMore'>Read Blog</a>
                </div>

              </div>

            </Col>
            <Col sm={12} md={4}>
              <div className='cWhiteRoundedHighlightedBox cResourcesTile'>
                <img src="https://wso2.com/files/zero-trust-banner.png" />

                <div className='cResourcesInfo'>
                  <h3>How We Implemented Zero Trust in Choreo</h3>





                  <a href="https://wso2.com/library/blogs/how-we-implemented-zero-trust-in-choreo/" className='cLearnMore'>Watch Video</a>
                </div>

              </div>

            </Col>

            <Col sm={12} md={6}>
              <div className='cWhiteRoundedHighlightedBox cResourcesTile'>
                <img src="https://wso2.cachefly.net/wso2/sites/all/2023/images/webp/choreodev/cc1.png" />

                <div className='cResourcesInfo'>
                  <h5>Community Call</h5>
                  <h3>Deploy Your Web Application with WSO2 Choreo</h3>

                  <p>In this session, we’ll dive into the process of deploying your web applications with Choreo.</p>



                  <a href="https://www.youtube.com/watch?v=HswVRAEnV4o" target='_blank' className='cLearnMore'>Watch Video</a>
                </div>

              </div>

            </Col>
            <Col sm={12} md={6}>
              <div className='cWhiteRoundedHighlightedBox cResourcesTile'>
                <img src="https://wso2.cachefly.net/wso2/sites/all/2023/images/webp/choreodev/cc2.png" />

                <div className='cResourcesInfo'>
                  <h5>Community Call</h5>
                  <h3>Building Microservices with Choreo </h3>


                  <p>In this session, we’ll dive into the process of building microservices with Choreo.</p>


                  <a href="https://www.youtube.com/watch?v=XVG0lxS2-gU" target='_blank' className='cLearnMore'>Watch Video</a>
                </div>

              </div>

            </Col>






          </Row>

          <Row>
            <Col sm={12} md={4} className='cCenterButton'></Col>

            <Col sm={12} md={4} className='cCenterButton'>

              <a className="cChoreoButton cMainSignupButtom cLearnMore cLearnMoreX" href="https://wso2.com/library/?product=choreo" target="_blank" rel="noopener" aria-label="Learn More">More  Choreo Resources</a>


            </Col>

            <Col sm={12} md={4} className='cCenterButton'></Col>

          </Row>


        </Container>

      </div> */}







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
                    <img src="https://wso2.cachefly.net/wso2/sites/all/2023/images/choreodev/discord-icon-choreo.png" />
                  </Col>
                  <Col sm={12} md={4} className='cCommunityText'>
                    <h3>Got questions about Choreo? Join our Discord community! </h3>
                    <p>Connect with fellow developers, share insights, and access a wealth of knowledge and resources to enhance your cloud journey with Choreo. </p>
                    <a className="cChoreoButton cMainSignupButtom cLearnMore cLearnMoreX" href="https://discord.com/invite/wso2" target="_blank" rel="noopener" aria-label="Learn More">Join Discord</a>

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
