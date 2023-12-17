import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';






const Footer = () => {
  return (
    <>


<div className="cFooter cWhiteBG">
        <Container>
          <Row>
            <Col sm={12} md={12}>
             <ul classNameName='cFooterLinks'>
             <li className="cCopyright">©2023 WSO2 LLC </li>
             <li className="cLeft"><a href="https://wso2.com/legal/" id="iFooterTxtTracking_Mobile_Legal" className="cFooterLinkTracking" aria-label="WSO2 Legal">WSO2 Legal</a></li>
             <li><a href="https://wso2.com/choreo/legal/" id="iFooterTxtTracking_Mobile_Privacyc1" className="cFooterLinkTracking" aria-label="Choreo Legal">Choreo Legal</a></li>
             <li><a href="/california-privacy#opt-out" id="iFooterTxtTracking_Privacy" className="cFooterLinkTracking" aria-label="Do Not Sell My Personal Information">Do Not Sell My Personal Information</a></li>
             <li><a href="/modern-slavery-statement" id="iFooterTxtTracking_Mobile_modern_slavery_statement" className="cFooterLinkTracking" aria-label="Modern Slavery Statement">Modern Slavery Statement</a></li>
              <li><a href="mailto:human-response@wso2.com" id="iFooterTxtTracking_Mobile_Report" className="cFooterLinkTracking" aria-label="Report a Problem With This Page">Report a Problem With This Page</a></li>
             </ul>
            </Col>
           
          </Row>





        
        


        </Container>

      </div>



    </>
  )
}
export default Footer;