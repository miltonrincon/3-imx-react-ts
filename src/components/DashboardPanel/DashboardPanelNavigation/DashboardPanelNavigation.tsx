import "./DashboardPanelNavigation.scss"

interface DashboardPanelNavigationProps {
  children?: React.ReactNode;
}
const DashboardPanelNavigation = ({children}:DashboardPanelNavigationProps) => {
  return (
    <div className="DashboardPanelNavigation">
      {children}
    </div>
  )
}

export default DashboardPanelNavigation
