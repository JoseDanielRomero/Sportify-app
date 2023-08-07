import '../stylesheets/RegisterPage.css'
import logoWhiteIcon from '../images/logo-white.svg'

function RegisterPage() {
  return (
    <div className='RegisterPage'>
			<header className='header-register'>
        <div className='logo-box white'>
          <img className='logo-image white' src={logoWhiteIcon}/>
          <h1 className='logo-text white'>SPORTIFY</h1>
        </div>
				<div className='header-register-text-box'>
					<h3 className='header-register-title'>CREATE YOUR SPORTIFY ID</h3>
					<p className='header-register-subtitle'>Get news,game updates highlights and more info on your favorite teams</p>
				</div>
				<h2 className='header-register-big-title'>JOIN</h2>
      </header>
			<main className='main-register'>
			</main>
		</div>
  )
}

export default RegisterPage