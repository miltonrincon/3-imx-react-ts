import { Link } from 'react-router-dom';
import { ReactComponent as BackIcon } from "assets/icons/back_link_img.svg";

// import "./BackLink.scss"
// scss for BackLink was loaded globally
interface BackLinkProps {
  children?: string,
  to: string
}
const BackLink = ({children, to}:BackLinkProps) => {
  return (
    <div className="BackLink">
      <Link className="back-link-btn" to={to}>
        <BackIcon className="icon"/>
      </Link>
      <Link className="back-link-text"to={to}>
        {children}
      </Link>
    </div>
  )
}

export default BackLink
