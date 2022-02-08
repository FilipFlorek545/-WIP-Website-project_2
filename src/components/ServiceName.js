import '../styles/ServiceName.css'
const ServiceName = ({children, serviceNameClass}) => {
    return <p className={serviceNameClass}>{children}</p>
}
export default ServiceName;