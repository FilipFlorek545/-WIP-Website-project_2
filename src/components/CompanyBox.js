import '../styles/CompanyBox.css'
const CompanyBox = ({serviceClass,children}) => {
    return  <div className={serviceClass}>{children}</div>
}
export default CompanyBox;