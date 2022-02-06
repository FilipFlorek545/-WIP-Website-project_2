import { Header, SmallerHeader, ServiceName, ContainerBox, CompanyLogo, Footer } from ".";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruck, faAmbulance } from "@fortawesome/free-solid-svg-icons";
import '../styles/App.css'
const App  = () => {
    return(
        <>
        <div id='container_1'>
            <Header>Witamy w &lt; nazwafirmy &gt;</Header>
            <SmallerHeader>To tu możemy zaoferować Ci wszystko co najlepsze</SmallerHeader>
        </div>
        <div id='container_2'>
            <ContainerBox serviceClass='cont_box'>
                <FontAwesomeIcon icon={faTruck} />
                <ServiceName>test</ServiceName>
            </ContainerBox>
            <ContainerBox serviceClass='cont_box'>
                <FontAwesomeIcon icon={faTruck} />
                <ServiceName>test</ServiceName>
            </ContainerBox>
            <ContainerBox serviceClass='cont_box'>
                <FontAwesomeIcon icon={faTruck} />
                <ServiceName>test</ServiceName>
            </ContainerBox>
            <ContainerBox serviceClass='cont_box'>
                <FontAwesomeIcon icon={faTruck} />
                <ServiceName>test</ServiceName>
            </ContainerBox>
            <ContainerBox serviceClass='cont_box'>
                <FontAwesomeIcon icon={faTruck} />
                <ServiceName>test</ServiceName>
            </ContainerBox>
            <ContainerBox serviceClass='cont_box'>
                <FontAwesomeIcon icon={faTruck} />
                <ServiceName>test</ServiceName>
            </ContainerBox>
            <ContainerBox serviceClass='cont_box'>
                <FontAwesomeIcon icon={faTruck} />
                <ServiceName>test</ServiceName>
            </ContainerBox>
            <ContainerBox serviceClass='cont_box'>
                <FontAwesomeIcon icon={faTruck} />
                <ServiceName>test</ServiceName>
            </ContainerBox>
            <ContainerBox serviceClass='cont_box'>
                <FontAwesomeIcon icon={faTruck} />
                <ServiceName>wroom</ServiceName>
            </ContainerBox>
        </div>
        <div id='container_3_background'>
            <Header>Współpracowaliśmy już z firmami z całego globu</Header>
            <SmallerHeader>lorem ipsum dolor amet</SmallerHeader>
            <div id='container_3'>
            <ContainerBox serviceClass='company_box cpb_1'>
                <SmallerHeader>Nazwa_firmy</SmallerHeader>
                <FontAwesomeIcon icon={faAmbulance} />
            </ContainerBox>
            <ContainerBox serviceClass='company_box cpb_2'>
                <SmallerHeader>Nazwa_firmy</SmallerHeader>
                <FontAwesomeIcon icon={faAmbulance} />
            </ContainerBox>
            <ContainerBox serviceClass='company_box cpb_3'>
                <SmallerHeader>Nazwa_firmy</SmallerHeader>
                <FontAwesomeIcon icon={faAmbulance} />
            </ContainerBox>
            <ContainerBox serviceClass='company_box cpb_4'>
                <SmallerHeader>Nazwa_firmy</SmallerHeader>
                <FontAwesomeIcon icon={faAmbulance} />
            </ContainerBox>
            <ContainerBox serviceClass='company_box cpb_5'>
                <SmallerHeader>Nazwa_firmy</SmallerHeader>
                <FontAwesomeIcon icon={faAmbulance} />
            </ContainerBox>
            <ContainerBox serviceClass='company_box cpb_6'>
                <SmallerHeader>Nazwa_firmy</SmallerHeader>
                <FontAwesomeIcon icon={faAmbulance} />
            </ContainerBox>
            <ContainerBox serviceClass='company_box cpb_7'>
                <SmallerHeader>Nazwa_firmy</SmallerHeader>
                <FontAwesomeIcon icon={faAmbulance} />
            </ContainerBox>
            <ContainerBox serviceClass='company_box cpb_8'>
                <SmallerHeader>Nazwa_firmy</SmallerHeader>
                <FontAwesomeIcon icon={faAmbulance} />
                </ContainerBox>
            </div>
        </div>
        <Footer footerId='footer'></Footer>
        </>
    )
}
export default App;