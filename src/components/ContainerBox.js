import '../styles/ContainerBox.css'
const ContainerBox = ({serviceClass,children}) => {
    return  <div className={serviceClass}>{children}</div>
}
export default ContainerBox;