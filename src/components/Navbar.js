import '../stylesheets/Navbar.css'
import triangleLeft from '../images/triangle-navbar-left.svg'
import triangleRight from '../images/triangle-navbar-right.svg'
import homeIcon from '../images/home.png'
import newsIcon from '../images/newspaper.png'
import favIcon from '../images/favourite.png'
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
        <NavLink to='/' className='navicon-container'>
          <img src={newsIcon} className={handleClassIcon('news')}/>
        </NavLink >
        <NavLink to='/' className='navicon-container'>
          <img src={favIcon} className={handleClassIcon('favourite')}/>
        </NavLink >
        <NavLink to='/' className='navicon-container'>
          <img src={userIcon} className={handleClassIcon('user')}/>
        </NavLink >
      </div>
      <img src={triangleLeft} className='triangle-for-navbar'/>
    </nav>
  )
}

export default Navbar;