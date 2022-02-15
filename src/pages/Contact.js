import { TopBar, Footer } from "../components";
import '../styles/Contact.css'

const Contact = () => {
    return(
        <>
        <TopBar topbarid='topbar'></TopBar>
        <div id="container_contact">
            <div id="contacts">
            <p>&lt;nazwafirmy&gt;</p>
            <p>Telefon: 111 222 333</p>
            <p>ul.TakaIowaka 2/4</p>
            <p>73-450   Szczecin</p>
            </div>
        </div>
    <Footer footerId='footer'></Footer>
    </>
    )
}
export default Contact;