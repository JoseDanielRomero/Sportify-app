import '../stylesheets/LoginPage.css'
import logoWhiteIcon from '../images/logo-white.svg'
import triangleRight from '../images/triangle-black-left.svg'
import triangleLeft from '../images/triangle-black-right.svg'
import triangleGrayRight from '../images/triangle-strong-gray-left.svg'
import triangleGrayLeft from '../images/triangle-strong-gray-right.svg'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { Navigate, Link } from 'react-router-dom'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function LoginPage() {

  const [isLogged, setIsLogged] = useState(false)

	const handleSubmitForm = (values, {resetForm}) => {

    const usersList = JSON.parse(localStorage.getItem('users')) || []
    
    const validUser = usersList.find(user => user.email === values.email &&  user.password === values.password)

    if (validUser) {
      localStorage.setItem('loggedUser', JSON.stringify(values))
      resetForm({ values: '' })
      setIsLogged(true)
    } else {
      notify()
    }

	}

	const handleValidateForm = (values) => {
		const errors = {}
		if (values.password.length < 5 || values.password.length > 15) {
			errors.password = 'Password must be at least 5 and maximum 15 characters long.'
			return errors
		}
	}
  
  const notify = () => toast('Wrong credentials.');

  if (isLogged == false) {
		return (
			<div className='LoginPage'>
				<header className='header-register'>
					<div className='logo-box white'>
						<img className='logo-image white' src={logoWhiteIcon}/>
						<h1 className='logo-text white'>SPORTIFY</h1>
					</div>
					<h3 className='header-login-title'>SIGN IN WITH<br></br> YOUR SPORTIFY ID</h3>
					<h2 className='header-register-big-title'>SIGN IN</h2>
				</header>
				<main className='main-register'>
					<Formik
						initialValues={
							{
								email:'',
								password:''
							}}
						onSubmit={handleSubmitForm}
						validate={handleValidateForm}
					>
						<Form>
							<Field name='email' type='email' placeholder='Email' className='form-input' autoComplete='off' required />
							<Field name='password' type='password' placeholder='Password' className='form-input' autoComplete='off' required />
							<ErrorMessage name='password' />
							<button type='submit' className='form-button-container'>
								<img src={triangleRight} className='triangle-for-button'/>
								<div className='button-box black'>
									<p className='button-text white'>SIGN IN</p>
								</div>
								<img src={triangleLeft} className='triangle-for-button'/>
							</button>
							<p className='main-register-text'>
                Your Sportify account is now Sportify ID. If you’ve signed into the app before, use the same credentials here. otherwise
							</p>
              <p className='or-text'>OR</p>
              <Link to='/register' className='form-button-container'>
								<img src={triangleGrayRight} className='triangle-for-button'/>
								<div className='button-box strong-gray'>
									<p className='button-text black'>SIGN UP</p>
								</div>
								<img src={triangleGrayLeft} className='triangle-for-button'/>
              </Link>
              <div>
                <ToastContainer
                  position="bottom-center"
                  autoClose={3000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  theme="light"
                />
              </div>
						</Form>
					</Formik>
				</main>
			</div>
		)
	} else {
		return (
			<Navigate to="/" />
		)
	}
}

export default LoginPage