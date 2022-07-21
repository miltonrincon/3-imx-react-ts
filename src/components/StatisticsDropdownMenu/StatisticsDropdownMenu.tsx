import classNames from 'classnames/bind';
import "./StatisticsDropdownMenu.scss"
interface StatisticsDropdownMenuProps {
  children: React.ReactNode,
  align?: string
}
const StatisticsDropdownMenu = ({children, align='left'}:StatisticsDropdownMenuProps) => {
  return (
    <div className={ classNames('StatisticsDropdownMenu', align) }>
      {children}
    </div>
  )
}
export default StatisticsDropdownMenu
