import { useContext, useState } from 'react'
import '../stylesheets/ProfileArticle.css'
import { ProfileOptionsContext } from '../routes/ProfilePage'

function ProfileArticle({ title, text }) {

  const { options, setOptions } = useContext(ProfileOptionsContext)

  const handleClickSection = () => {

    const copyOptions = [...options]
    const findId = copyOptions.findIndex(element => element.text === text)

    for (let i=0; i<copyOptions.length; i++) {
      if (i == findId) {
        if (copyOptions[i].active == true) {
          copyOptions[i].active = false
        } else {
          copyOptions[i].active = true
        }
      } else {
        copyOptions[i].active = false;
      }
    }
    setOptions(copyOptions)
  }

  const handleClassText = () => {

    const copyOptions = [...options]
    const findId = copyOptions.findIndex(element => element.text === text)
    
    if (copyOptions[findId].active == true) {
      return 'main-profile-text'
    } else {
      return 'main-profile-text hidden'
    }
  }

  const handleClassIcon = () => {

    const copyOptions = [...options]
    const findId = copyOptions.findIndex(element => element.text === text)
    
    if (copyOptions[findId].active == true) {
      return 'main-profile-icon minus'
    } else {
      return 'main-profile-icon plus'
    }
  }

  return (
    <article className='main-profile-article'>
      <section className='main-profile-title-box' onClick={handleClickSection}>
        <h5 className='main-profile-title'>{title}</h5>
        <div className={handleClassIcon()} />
      </section>
      <p className={handleClassText()}>{text}</p>
    </article>
  )
}

export default ProfileArticle;