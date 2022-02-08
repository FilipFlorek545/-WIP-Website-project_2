import { Header, SmallerHeader, ServiceName, ContainerBox, Footer,CompanyBox, TopBar} from ".";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruck, faBabyCarriage, faAward, faBalanceScale, faBriefcase, faBuilding, faCalendarAlt, faCode, faCookieBite } from "@fortawesome/free-solid-svg-icons";
import '../styles/App.css'
import { faAudible, faBattleNet, faCcDiscover, faCcMastercard, faDiscord, faDropbox, faFlickr, faGalacticRepublic } from "@fortawesome/free-brands-svg-icons";
const App  = () => {
    return(
        <>
        <TopBar topbarid='topbar'></TopBar>
        <div id='container_1'>
            <Header>Witamy w &lt; nazwafirmy &gt;</Header>
            <SmallerHeader>To tu możemy zaoferować Ci wszystko co najlepsze</SmallerHeader>
        </div>
        <div id='container_2'>
            <ContainerBox serviceClass='cont_box'>
                <FontAwesomeIcon icon={faTruck} />
                <ServiceName serviceNameClass='cont_box_name'>Usługa 1</ServiceName>
            </ContainerBox>
            <ContainerBox serviceClass='cont_box'>
                <FontAwesomeIcon icon={faBabyCarriage} />
                <ServiceName serviceNameClass='cont_box_name'>Usługa 2</ServiceName>
            </ContainerBox>
            <ContainerBox serviceClass='cont_box'>
                <FontAwesomeIcon icon={faAward} />
                <ServiceName serviceNameClass='cont_box_name'>Usługa 3</ServiceName>
            </ContainerBox>
            <ContainerBox serviceClass='cont_box'>
                <FontAwesomeIcon icon={faBalanceScale} />
                <ServiceName serviceNameClass='cont_box_name'>Usługa 4</ServiceName>
            </ContainerBox>
            <ContainerBox serviceClass='cont_box'>
                <FontAwesomeIcon icon={faBriefcase} />
                <ServiceName serviceNameClass='cont_box_name'>Usługa 5</ServiceName>
            </ContainerBox>
            <ContainerBox serviceClass='cont_box'>
                <FontAwesomeIcon icon={faBuilding} />
                <ServiceName serviceNameClass='cont_box_name'>Usługa 6</ServiceName>
            </ContainerBox>
            <ContainerBox serviceClass='cont_box'>
                <FontAwesomeIcon icon={faCalendarAlt} />
                <ServiceName serviceNameClass='cont_box_name'>Usługa 7</ServiceName>
            </ContainerBox>
            <ContainerBox serviceClass='cont_box'>
                <FontAwesomeIcon icon={faCode} />
                <ServiceName serviceNameClass='cont_box_name'>Usługa 8</ServiceName>
            </ContainerBox>
            <ContainerBox serviceClass='cont_box'>
                <FontAwesomeIcon icon={faCookieBite} />
                <ServiceName serviceNameClass='cont_box_name'>Usługa 9</ServiceName>
            </ContainerBox>
        </div>
        <div id='container_3_background'>
            <Header>Współpracowaliśmy już z firmami z całego globu</Header>
            <SmallerHeader>lorem ipsum dolor amet</SmallerHeader>
            <div id='container_3'>
            <CompanyBox serviceClass='company_box cpb_1'>
                <FontAwesomeIcon icon={faAudible} />
            </CompanyBox>
            <CompanyBox serviceClass='company_box cpb_2'>
                <FontAwesomeIcon icon={faBattleNet} />
            </CompanyBox>
            <CompanyBox serviceClass='company_box cpb_3'>
                <FontAwesomeIcon icon={faDiscord} />
            </CompanyBox>
            <CompanyBox serviceClass='company_box cpb_4'>
                <FontAwesomeIcon icon={faCcDiscover} />
            </CompanyBox>
            <CompanyBox serviceClass='company_box cpb_5'>
                <FontAwesomeIcon icon={faCcMastercard} />
            </CompanyBox>
            <CompanyBox serviceClass='company_box cpb_6'>
                <FontAwesomeIcon icon={faDropbox} />
            </CompanyBox>
            <CompanyBox serviceClass='company_box cpb_7'>
                <FontAwesomeIcon icon={faFlickr} />
            </CompanyBox>
            <CompanyBox serviceClass='company_box cpb_8'>
                <FontAwesomeIcon icon={faGalacticRepublic} />
                </CompanyBox>
            </div>
        </div>
        <Footer footerId='footer'></Footer>
        </>
    )
}
export default App;