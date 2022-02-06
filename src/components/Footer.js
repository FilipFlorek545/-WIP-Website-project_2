import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookSquare, faAmazon, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'
import '../styles/Footer.css'

const Footer = ({footerId}) => {
    return(
        <div id={footerId}>
            <p id="companyName_footer">CompanyName&trade; - all rights reserved, 2022</p>
            <div id='socialsId'>
                <FontAwesomeIcon className="icon" icon={faFacebookSquare} />
                <FontAwesomeIcon className="icon" icon={faAmazon} />
                <FontAwesomeIcon className="icon" icon={faTwitter} />
                <FontAwesomeIcon className="icon" icon={faInstagram} />
            </div>
        </div>
    )
}
export default Footer;