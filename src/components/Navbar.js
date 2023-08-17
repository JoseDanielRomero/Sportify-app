import '../stylesheets/Navbar.css'
import triangleLeft from '../images/triangle-navbar-left.svg'
import triangleRight from '../images/triangle-navbar-right.svg'
import homeIcon from '../images/home.png'
import leagueIcon from '../images/league.png'
import teamIcon from '../images/team.png'
import userIcon from '../images/user.png'
import { NavLink } from 'react-router-dom';

function Navbar({ screen }) {

  const handleClassIcon = (button) => {
    if (screen == button) {
      return 'nav-icon selected'
    } else {
      return 'nav-icon'
    }
  }

  return (
    <nav className='navbar-section'>
      <img src={triangleRight} className='triangle-for-navbar'/>
      <div className='navbar-container'>
        <NavLink to='/' className='navicon-container'>
          <img src={homeIcon} className={handleClassIcon('dashboard')}/>
        </NavLink>
        <NavLink to='/my-leagues' className='navicon-container'>
          <img src={leagueIcon} className={handleClassIcon('leagues')}/>
        </NavLink >
        <NavLink to='/my-teams' className='navicon-container'>
          <img src={teamIcon} className={handleClassIcon('teams')}/>
        </NavLink >
        <NavLink to='/profile' className='navicon-container'>
          <img src={userIcon} className={handleClassIcon('user')}/>
        </NavLink >
      </div>
      <img src={triangleLeft} className='triangle-for-navbar'/>
    </nav>
  )
}

export default Navbar;