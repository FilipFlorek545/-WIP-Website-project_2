import '../styles/ContainerBox.css'
const ContainerBox = ({serviceClass,children}) => {
    return  <button className={serviceClass}>{children}</button>
}
export default ContainerBox;