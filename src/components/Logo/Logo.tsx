import { Link } from 'react-router-dom';
import "./Logo.scss"
const Logo = () => {
  return (
    <Link
      to="/"
      className="logo-container"
    >
      <img className="logo" src="/logo.svg" alt="logo tunky"/>
    </Link>
  )
}

export default Logo
