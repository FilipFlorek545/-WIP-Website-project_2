import '../styles/TopBar.css'
const TopBar = ({topbarid}) => {
    return <div id={topbarid}>
        <div id='companyName'>&lt; nazwafirmy &gt;</div>
        <div id='topbarside'>
            <div id='dropdown'>Oferta
                <div className='dropdown_content'>
                    <a href="#">Usługa 1</a>
                    <a href="#">Usługa 2</a>
                    <a href="#">Usługa 3</a>
                    <a href="#">Usługa 4</a>
                    <a href="#">Usługa 5</a>
                    <a href="#">Usługa 6</a>
                    <a href="#">Usługa 7</a>
                    <a href="#">Usługa 8</a>
                    <a href="#">Usługa 9</a>
                </div>
            </div>
            <a id='contact_link' href='#'>Kontakt</a>
        </div>
    </div>
}
export default TopBar;