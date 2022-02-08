import '../styles/TopBar.css'
const TopBar = ({topbarid}) => {
    return <div id={topbarid}>
        <div id='companyName'>&lt; nazwafirmy &gt;</div>
        <div id='topbarside'>
            <div id='dropdown'>Oferta</div>
            <div className='dropdown_content'>
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
                <a href="#"></a>
            </div>
            <a>Kontakt</a>
        </div>
    </div>
}
export default TopBar;