import '../stylesheets/DashboardPage.css'
import logoIcon from '../images/logo.svg'
import { useContext, useEffect, useState } from 'react'
import { ContentContext, LeaguesContext, TeamsContext } from '../App'
import triangleLeft from '../images/triangle-left.svg'
import triangleRight from '../images/triangle-right.svg'
import axios from 'axios'

function DashboardPage({ options }) {

  const { favLeagues } = useContext(LeaguesContext)
  const { favTeams } = useContext(TeamsContext)

  const [database, setDatabase] = useState([])
  const { actualContent, setActualContent } = useContext(ContentContext)

  const handleChangeSelectbox = (event) => {
    setActualContent(event.target.value)
  }

  useEffect(() => {

    const obtainData = async() => {

      const config = {
        headers:{
          'x-rapidapi-key': '0b102a95cfff7b15702b70425d0345a7',
          'x-rapidapi-host': 'v3.football.api-sports.io'
        }
      };

      const url = 'https://v3.football.api-sports.io/fixtures?' + actualContent + '=' + 39 + '&last=6';

      const api = await axios.get(url, config)

      setDatabase(api)

    }

    obtainData()

  },[actualContent])

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