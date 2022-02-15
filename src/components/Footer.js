import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookSquare, faAmazon, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import '../styles/Footer.css'

const Footer = ({footerId}) => {
    return(
        <div id={footerId}>
            <p id="companyName_footer">CompanyName&trade; - all rights reserved, 2022</p>
            <div id='socialsId'>
                <a href="https://www.facebook.com/"><FontAwesomeIcon className="icon" icon={faFacebookSquare} /></a>
                <a href="https://www.amazon.com/"><FontAwesomeIcon className="icon" icon={faAmazon} /></a>
                <a href="https://twitter.com/"><FontAwesomeIcon className="icon" icon={faTwitter} /></a>
                <a href="https://www.instagram.com/"><FontAwesomeIcon className="icon" icon={faInstagram} /></a>
            </div>
        </div>
    )
}
export default Footer;