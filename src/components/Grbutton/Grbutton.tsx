import "./Grbutton.scss"
interface GrbuttonProps {
  children?: React.ReactNode,
  onClick?: React.MouseEventHandler
}
const Grbutton = ({children, onClick}:GrbuttonProps) => {
  return (
    <div className="Grbutton" onClick={onClick}>
      {children}
    </div>
  )
}
// TODO: errors/success/iconf/etc

export default Grbutton
