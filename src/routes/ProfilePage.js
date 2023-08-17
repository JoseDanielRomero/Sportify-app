import '../stylesheets/ProfilePage.css'
import logoWhiteIcon from '../images/logo-white.svg'
import vectorCropped from '../images/vector-cropped.png'
import ProfileArticle from '../components/ProfileArticle';
import { createContext, useState } from 'react';

export const ProfileOptionsContext = createContext([])

function ProfilePage() {

  const logged = JSON.parse(localStorage.getItem('loggedUser'))
  const userEmail = logged.email

  const profileOptions = [
    {
      title: 'MY USER',
      text: `Email: ${userEmail}`,
      active: false,
      id: 0
    }, 
    {
      title: 'CUSTOMER SUPPORT',
      text: 'Contact directly to danyrome12dev@gmail.com',
      active: false,
      id: 1
    },
    {
      title: 'APP INFO',
      text: 'Developed by José Daniel Romero. Template design by Visiata Systems International. Data provided through API-Sports.io (free plan). All rights reserved, non-commercial use.',
      active: false,
      id: 2
    }
  ]

  const [options, setOptions] = useState(profileOptions)

  return (
    <ProfileOptionsContext.Provider value={{ options, setOptions }}>
      <div className='ProfilePage'>
        <header className='header-profile'>
          <div className='logo-box white'>
            <img className='logo-image white' src={logoWhiteIcon}/>
            <h1 className='logo-text white'>SPORTIFY</h1>
          </div>
          <div className='header-register-text-box'>
            <h3 className='header-register-title'>WELCOME TO YOUR SPORTIFY ID</h3>
            <p className='header-register-subtitle'>Your  Sportify ID grants you access to the exclusive offers, personalized content, and more- so you can keep being one of the best fans out there.</p>
          </div>
          <img src={vectorCropped} className='header-vector-cropped'/>
        </header>
        <main className='main-profile'>
          {profileOptions.map(option => (
            <ProfileArticle
              key={option.id}
              title={option.title}
              text={option.text}
            />
          ))}
        
        </main>
      </div>
    </ProfileOptionsContext.Provider>
  )
}

export default ProfilePage;