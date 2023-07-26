import '../stylesheets/DashboardPage.css'
import logoIcon from '../images/logo.svg'
import { useContext } from 'react'
import { ContentContext } from '../App'
import triangleLeft from '../images/triangle-left.svg'
import triangleRight from '../images/triangle-right.svg'

function DashboardPage({ options }) {

  const { actualContent, setActualContent } = useContext(ContentContext)

  const handleChangeSelectbox = (event) => {
    setActualContent(event.target.value)
  }

  return (
    <div className='DashboardPage'>
      <header className='header'>
        <div className='logo-box'>
          <img className='logo-image' src={logoIcon}/>
          <h1 className='logo-text'>SPORTIFY</h1>
        </div>
        <div className='dropdown-box'>
          <img className='triangle-for-button' src={triangleLeft} />
          <select value={actualContent} className='selectbox-form' onChange={handleChangeSelectbox} >
            {options.map(option => (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            ))}
          </select>
          <img className='triangle-for-button' src={triangleRight} />
        </div>

      </header>
    </div>
  )
}

export default DashboardPage;