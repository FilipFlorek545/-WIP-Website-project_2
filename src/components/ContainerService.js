import { Footer, TopBar } from ".";
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