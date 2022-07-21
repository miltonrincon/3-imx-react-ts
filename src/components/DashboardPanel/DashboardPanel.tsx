import "./DashboardPanel.scss"

interface DashboardPanelProps {
  children?: React.ReactNode;
}
const DashboardPanel = ({children}:DashboardPanelProps) => {
  return (
    <div className="DashboardPanel">
      {children}
    </div>
  )
}

export default DashboardPanel
