import '../stylesheets/OnboardPage.css'
import logoIcon from '../images/logo.svg'
import playerImage from '../images/player.svg'
import vectorImage from '../images/vector-complete.png'
import stripeImage from '../images/vector-stripe.png'
import triangleRight from '../images/triangle-left.svg'
import triangleLeft from '../images/triangle-right.svg'
import triangleGrayLeft from '../images/triangle-gray-left.svg'
import triangleGrayRight from '../images/triangle-gray-right.svg'
import { Link } from 'react-router-dom'

function OnboardPage() {
  return (
    <div className='OnboardPage'>
      <header className='header-onboard'>
        <div className='logo-box'>
          <img className='logo-image' src={logoIcon}/>
          <h1 className='logo-text'>SPORTIFY</h1>
        </div>
        <img src={playerImage} className='header-player-image animate'/>
        <img src={vectorImage} className='header-vector-complete' />
        <img src={stripeImage} className='header-vector-stripe' />
      </header>
      <main className='main-onboard'>
        <div className='main-slogan-box'>
          <h2 className='main-slogan-text animate'>KEEP AN EYE<br />ON THE STADIUM</h2>
        </div>
        
        <Link to='/' className='button-container'>
          <img src={triangleRight} className='triangle-for-button'/>
          <div className='button-box red'>
            <p className='button-text white'>LOGIN</p>
          </div>
          <img src={triangleLeft} className='triangle-for-button'/>
        </Link>
        <Link to='/' className='button-container'>
          <img src={triangleGrayLeft} className='triangle-for-button'/>
          <div className='button-box gray'>
            <p className='button-text black'>CREATE ACCOUNT</p>
          </div>
          <img src={triangleGrayRight} className='triangle-for-button'/>
        </Link>
      </main>
    </div>
  )
}

export default OnboardPage;