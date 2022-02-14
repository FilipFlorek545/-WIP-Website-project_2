import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { Footer, Header, TopBar } from ".";
import "../styles/ContainerService.css"

const ContainerService = ({children}) => {
    return(
        <>
        <TopBar topbarid='topbar'></TopBar>
        <div id="container_service">
            {children}
        </div>
    <Footer footerId='footer'></Footer>
    </>
)
}
export default ContainerService;