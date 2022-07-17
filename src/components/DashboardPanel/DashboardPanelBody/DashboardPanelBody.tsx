import "./DashboardPanelBody.scss"

interface DashboardPanelBodyProps {
  children?: React.ReactNode;
}
const DashboardPanelBody = ({children}:DashboardPanelBodyProps) => {
  return (
    <div className="DashboardPanelBody dash-home">
      {children}
    </div>
  )
}

export default DashboardPanelBody
