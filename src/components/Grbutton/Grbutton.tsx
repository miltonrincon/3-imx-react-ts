import "./Grbutton.scss"
interface GrbuttonProps {
  children?: React.ReactNode,
  onClick?: React.MouseEventHandler
}
const Grbutton = ({children, onClick}:GrbuttonProps) => {
  return (
    <button className="Grbutton" onClick={onClick}>
      {children}
    </button>
  )
}
// TODO: errors/success/iconf/etc

export default Grbutton
