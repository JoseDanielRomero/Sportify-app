import '../stylesheets/DashboardPage.css'
import logoIcon from '../images/logo.svg'
import { useContext, useEffect, useState } from 'react'
import { ContentContext, LeaguesContext, SourceIdContext, TeamsContext } from '../App'
import triangleLeft from '../images/triangle-left.svg'
import triangleRight from '../images/triangle-right.svg'
import axios from 'axios'
import SourceButton from '../components/SourceButton'
import FixtureSwitcher from '../components/FixtureSwitcher'

function DashboardPage({ options }) {

  const { favLeagues, setFavLeagues } = useContext(LeaguesContext)
  const { favTeams, setFavTeams } = useContext(TeamsContext)
  const { sourceId, setSourceId } = useContext(SourceIdContext)
  const [database, setDatabase] = useState([])
  const { actualContent, setActualContent } = useContext(ContentContext)

  useEffect(() => {
    const copyFavLeagues = [...favLeagues]
    copyFavLeagues[0].active = true
    setFavLeagues(copyFavLeagues)

    const copyFavTeams = [...favTeams]
    copyFavTeams[0].active = true
    setFavTeams(copyFavTeams)
  }, []);

  const handleChangeSelectbox = (event) => {
    setActualContent(event.target.value)
    if (actualContent == 'league') {
      setSourceId(favTeams[0].id)
    } else {
      setSourceId(favLeagues[0].id)
    }
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

  },[sourceId])

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
      <main>
        <section className='source-button-container'>
          {actualContent == 'league' ? favLeagues.map(league => (
            <SourceButton 
              key={league.id}
              imageId={league.id}
              name={league.name}
              array={favLeagues}
            />
          )) : favTeams.map(team => (
            <SourceButton 
              key={team.id}
              imageId={team.id}
              name={team.name}
              array={favTeams}
            />
          ))}
        </section>
        <FixtureSwitcher />
      </main>
    </div>
  )
}

export default DashboardPage;