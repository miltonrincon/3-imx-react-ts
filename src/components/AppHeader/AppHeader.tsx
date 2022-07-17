import Logo from "components/Logo/Logo";
import Statistics from "components/Statistics/Statistics";
import Accbox from "components/Accbox/Accbox";


import "./AppHeader.scss"
const AppHeader = () => {
  return (
    <header className="AppHeader">
      <Logo />
      <div className="stat-container">
        <Statistics/>
      </div>
      <Accbox/>
    </header>
  )
}

export default AppHeader
