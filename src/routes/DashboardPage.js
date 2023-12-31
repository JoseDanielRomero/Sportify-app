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
import Navbar from '../components/Navbar'
import { NavLink, Navigate } from 'react-router-dom'

function DashboardPage({ options }) {

  const { favLeagues, setFavLeagues } = useContext(LeaguesContext)
  const { favTeams, setFavTeams } = useContext(TeamsContext)
  const { sourceId, setSourceId } = useContext(SourceIdContext)
  const [database, setDatabase] = useState([])
  const { actualContent, setActualContent } = useContext(ContentContext)
  const { fixtureData, setFixtureData } = useContext(FixtureContext)

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

  useEffect(() => {

    const obtainData = async() => {

      const findActive = fixtureData.findIndex((element) => element.active === true)
      const actualFixture = fixtureData[findActive].param

      const config = {
        headers:{
          'x-rapidapi-key': 'cfb97c8b7f111df47e8cca192220d0d6',
          'x-rapidapi-host': 'v3.football.api-sports.io'
        }
      };

      const url = 'https://v3.football.api-sports.io/fixtures?' + actualContent + '=' + sourceId + '&' + actualFixture + '=6';

      const api = await axios.get(url, config)

      setDatabase(api.data.response)

    }

    obtainData()

  },[sourceId, fixtureData])

  const userPermission = JSON.parse(localStorage.getItem('loggedUser'))
  
  if (userPermission) {

    const loggedUser = JSON.parse(localStorage.getItem('loggedUser'))
    const userEmail = loggedUser.email

    const leaguesList = JSON.parse(localStorage.getItem('userLeagues'))
    const teamsList = JSON.parse(localStorage.getItem('userTeams'))
    const alreadyCompleteLeagues = leaguesList.findIndex((element) => element.user === userEmail)
    const alreadyCompleteTeams = teamsList.findIndex((element) => element.user === userEmail)
  
    if (alreadyCompleteLeagues != -1 && alreadyCompleteTeams != -1) {
      return (
        <div className='DashboardPage'>
          <header className='header-dashboard'>
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
          <main className='main-dashboard'>
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
            {database.map(match => {
              const linkTo = '/match/' + match.fixture.id
              return (
              <NavLink to={linkTo} key={match.fixture.id} className='match-navlink-container'>
                <MatchArticle 
                datetime={match.fixture.date}
                leagueLogo={match.league.logo}
                leagueName={match.league.name}
                leagueRound={match.league.round}
                teamHomeName={match.teams.home.name}
                teamHomeLogo={match.teams.home.logo}
                teamHomeGoals={match.goals.home}
                teamHomePenalty={match.score.penalty.home}
                teamAwayName={match.teams.away.name}
                teamAwayLogo={match.teams.away.logo}
                teamAwayGoals={match.goals.away}
                teamAwayPenalty={match.score.penalty.away}
                />
              </NavLink>
            )})}
            <Navbar 
              screen='dashboard'
            />
          </main>
          <footer>
          </footer>
        </div>
      )
    } else {
      return (
        <Navigate to="/my-leagues" />
      )
    } 
  } else {
    return (
      <Navigate to="/onboard" />
    )
  }
}

export default DashboardPage;