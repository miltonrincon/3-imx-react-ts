import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import "./DashNavItem.scss"

interface DashNavItemProps {
  icon?: React.ReactNode,
  to: string,
  label: string,
  active?: boolean
}
const DashNavItem = ({icon, to, label, active}:DashNavItemProps) => {
  return (
    <Link className={ classNames('DashNavItem', { active: active }) } to={to} title={label}>
      {icon}
    </Link>
  )
}

export default DashNavItem
