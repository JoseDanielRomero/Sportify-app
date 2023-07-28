import '../stylesheets/DashboardPage.css'
import logoIcon from '../images/logo.svg'
import { useContext, useEffect, useState } from 'react'
import { ContentContext, FixtureContext, LeaguesContext, SourceIdContext, TeamsContext } from '../App'
import triangleLeft from '../images/triangle-left.svg'
import triangleRight from '../images/triangle-right.svg'
import axios from 'axios'
import SourceButton from '../components/SourceButton'
import FixtureSwitcher from '../components/FixtureSwitcher'
import MatchArticle from '../components/MatchArticle'

function DashboardPage({ options }) {

  const { favLeagues, setFavLeagues } = useContext(LeaguesContext)
  const { favTeams, setFavTeams } = useContext(TeamsContext)
  const { sourceId, setSourceId } = useContext(SourceIdContext)
  const [database, setDatabase] = useState([])
  const { actualContent, setActualContent } = useContext(ContentContext)
  const { fixtureData, setFixtureData } = useContext(FixtureContext)

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
    const copyFavLeagues = [...favLeagues]
    const copyFavTeams = [...favTeams]

    if (actualContent == 'team') {
      const findActive = copyFavLeagues.findIndex((element) => element.active === true)
      setSourceId(favLeagues[findActive].id)
    } else {
      const findActive = copyFavTeams.findIndex((element) => element.active === true)
      setSourceId(favTeams[findActive].id)
    }
  }

  // useEffect(() => {

  //   const obtainData = async() => {

  //     const findActive = fixtureData.findIndex((element) => element.active === true)
  //     const actualFixture = fixtureData[findActive].param

  //     const config = {
  //       headers:{
  //         'x-rapidapi-key': 'cfb97c8b7f111df47e8cca192220d0d6',
  //         'x-rapidapi-host': 'v3.football.api-sports.io'
  //       }
  //     };

  //     const url = 'https://v3.football.api-sports.io/fixtures?' + actualContent + '=' + sourceId + '&' + actualFixture + '=6';

  //     const api = await axios.get(url, config)

  //     setDatabase(api.data.response)

  //   }

  //   obtainData()

  // },[sourceId, fixtureData])

  // console.log(database)

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
        <MatchArticle />
      </main>
    </div>
  )
}

export default DashboardPage;