import "./StatisticsDropdownMenu.scss"
interface StatisticsDropdownMenuProps {
  children: React.ReactNode;
}
const StatisticsDropdownMenu = ({children}:StatisticsDropdownMenuProps) => {
  return (
    <div className="StatisticsDropdownMenu">
      {children}
    </div>
  )
}
export default StatisticsDropdownMenu
