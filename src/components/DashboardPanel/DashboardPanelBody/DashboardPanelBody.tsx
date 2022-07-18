import "./DashboardPanelBody.scss"

interface DashboardPanelBodyProps {
  children: React.ReactNode;
}
const DashboardPanelBody = ({children}:DashboardPanelBodyProps) => {
  return (
    <div className="DashboardPanelBody">
      {children}
    </div>
  )
}

export default DashboardPanelBody
