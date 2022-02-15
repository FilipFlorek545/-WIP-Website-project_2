import { Link } from 'react-router-dom';
import '../styles/TopBar.css'
const TopBar = ({topbarid}) => {
    return <div id={topbarid}>
        <Link to="/" id='companyName'>&lt; nazwafirmy &gt;</Link>
        <div id='topbarside'>
            <Link to="/" className='topbar_link'>Strona główna</Link>
            <div id='dropdown'>Oferta
                <div className='dropdown_content'>
                    <Link to={"/service_1"}>Usługa 1</Link>
                    <Link to={"/service_2"}>Usługa 2</Link>
                    <Link to={"/service_3"}>Usługa 3</Link>
                    <Link to={"/service_4"}>Usługa 4</Link>
                    <Link to={"/service_5"}>Usługa 5</Link>
                    <Link to={"/service_6"}>Usługa 6</Link>
                    <Link to={"/service_7"}>Usługa 7</Link>
                    <Link to={"/service_8"}>Usługa 8</Link>
                    <Link to={"/service_9"}>Usługa 9</Link>
                </div>
            </div>
            <Link to={"/contact"} className='topbar_link' href='#'>Kontakt</Link>
        </div>
    </div>
}
export default TopBar;