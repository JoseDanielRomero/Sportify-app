import '../stylesheets/RegisterPage.css'
import logoWhiteIcon from '../images/logo-white.svg'
import triangleRight from '../images/triangle-black-left.svg'
import triangleLeft from '../images/triangle-black-right.svg'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import { Navigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function RegisterPage() {

	const handleSubmitForm = (values, {resetForm}) => {

    const usersList = JSON.parse(localStorage.getItem('users')) || []
    
    const isUserRegistered = usersList.find(user => user.email === values.email)

    if (isUserRegistered) {
      notify()
    } else {
      usersList.push(values)
      localStorage.setItem('users', JSON.stringify(usersList))
      resetForm({ values: '' })
      window.location.href = "/#/login"
    }

	}

	const handleValidateForm = (values) => {
		const errors = {}
		if (values.password.length < 5 || values.password.length > 15) {
			errors.password = 'Password must be at least 5 and maximum 15 characters long.'
			return errors
		}
	}

  const notify = () => toast('The user is already registered.');

  const alreadyLogged = JSON.parse(localStorage.getItem('loggedUser'))
  
  if (alreadyLogged) {
    return (
      <Navigate to="/" />
    )
  } else {
		return (
			<div className='RegisterPage'>
				<header className='header-register'>
					<div className='logo-box white'>
						<img className='logo-image white' src={logoWhiteIcon}/>
						<h1 className='logo-text white'>SPORTIFY</h1>
					</div>
					<div className='header-register-text-box'>
						<h3 className='header-register-title'>CREATE YOUR SPORTIFY ID</h3>
						<p className='header-register-subtitle'>Get news, game updates, highlights and more info on your favorite teams</p>
					</div>
					<h2 className='header-register-big-title'>JOIN</h2>
				</header>
				<main className='main-register'>
					<Formik
						initialValues={
							{
								name:'',
								lastName:'',
								email:'',
								password:''
							}}
						onSubmit={handleSubmitForm}
						validate={handleValidateForm}
					>
						<Form>
							<Field name='name' type='text' placeholder='First Name' className='form-input' autoComplete='off' required />
							<Field name='lastName' type='text' placeholder='Last Name' className='form-input' autoComplete='off' required />
							<Field name='email' type='email' placeholder='Email' className='form-input' autoComplete='off' required />
							<Field name='password' type='password' placeholder='Password' className='form-input' autoComplete='off' required />
							<ErrorMessage name='password' />
							<button type='submit' className='form-button-container'>
								<img src={triangleRight} className='triangle-for-button'/>
								<div className='button-box black'>
									<p className='button-text white'>CREATE ACCOUNT</p>
								</div>
								<img src={triangleLeft} className='triangle-for-button'/>
							</button>
							<p className='main-register-text'>
								By register you are consenting that your personal information will be collected, stored, and processed in the United States and the European Union on behalf of Sporify Properties, Inc.
							</p>
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
  }
}

export default RegisterPage