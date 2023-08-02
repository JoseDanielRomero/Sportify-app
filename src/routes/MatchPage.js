import '../stylesheets/MatchPage.css'
import backIcon from '../images/back.svg'
import { NavLink, useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import MatchInfoSwitcher from '../components/MatchInfoSwitcher'
import MatchInfoStats from '../components/MatchInfoStats'
import { MatchInfoContext } from '../App'
import MatchInfoPlayingXI from '../components/MatchInfoPlayingXI'
import MatchInfoDetails from '../components/MatchInfoDetails'

function MatchPage() {

  const { idMatch } = useParams()
  const { matchData } = useContext(MatchInfoContext)
  const [matchDatabase, setMatchDatabase] = useState([])
  
  useEffect(() => {

    const obtainMatchData = async() => {

      const url = 'https://v3.football.api-sports.io/fixtures?id=' + idMatch;

      const config = {
        headers:{
          'x-rapidapi-key': 'cfb97c8b7f111df47e8cca192220d0d6',
          'x-rapidapi-host': 'v3.football.api-sports.io'
        }
      };

      const api = await axios.get(url, config)

      setMatchDatabase(api.data.response)

    }

    obtainMatchData()

  },[idMatch])

  console.log(matchDatabase)

  if (matchDatabase.length > 0) {

    const matchDatetime = matchDatabase[0].fixture.date
    var fecha;
    fecha = new Date(matchDatetime)
    const dateString = fecha.toDateString()
    const matchDate = dateString.slice(4, 15)
    const timeString = fecha.toTimeString()
    const matchTime = timeString.slice(0, 5)

    const homeTeamName = matchDatabase[0].teams.home.name
    const formatHomeName = homeTeamName.toUpperCase()
    const homeAwayName = matchDatabase[0].teams.away.name
    const formatAwayName = homeAwayName.toUpperCase()

    let penaltyHome;
    let penaltyAway;
    if (matchDatabase[0].score.penalty.home != null && matchDatabase[0].score.penalty.away != null) {
      penaltyHome = '(' + matchDatabase[0].score.penalty.home + ')'
      penaltyAway = '(' + matchDatabase[0].score.penalty.away + ')'
    } else {
      penaltyHome = ''
      penaltyAway = ''
    }
    
    let penaltiesResult;
    if (matchDatabase[0].score.penalty.home != null && matchDatabase[0].score.penalty.away != null) {
      if (matchDatabase[0].score.penalty.home > matchDatabase[0].score.penalty.away) {
        penaltiesResult = homeTeamName + ' win ' + matchDatabase[0].score.penalty.home + '-' + matchDatabase[0].score.penalty.away + ' penalties'
      } else {
        penaltiesResult = homeAwayName + ' win ' + matchDatabase[0].score.penalty.home + '-' + matchDatabase[0].score.penalty.away + ' penalties'
      }
    } else {
      penaltiesResult = ''
    }

    const findActive = matchData.findIndex((element) => element.active == true)
    const actualMatchToogle = matchData[findActive].text

    return (
      <div className='MatchPage'>
        <nav className='nav-match'>
          <NavLink to='/'>
            <img src={backIcon} className='nav-match-icon' />
          </NavLink>
        </nav>
        <header className='header-match'>
          <h2 className='match-round'>{matchDatabase[0].league.round}</h2>
          <h3 className='match-datetime'>
            {matchDate} · {matchTime}
          </h3>
          <section className='header-match-container'>
            <div className='header-match-home-team'>
              <div className='header-match-logo-box'>
                <img className='header-match-team-logo' src={matchDatabase[0].teams.home.logo}/>
              </div>
              <p className='header-match-team-name'>{formatHomeName}</p>
            </div>
            <div className='header-match-result'>
              <div className='header-match-score'>
                <h3 className='header-match-penalty'>{penaltyHome}</h3>
                <div className='header-match-goals-box'>
                  <h3 className='header-match-goals'>{matchDatabase[0].goals.home}</h3>
                  <h3 className='header-match-goals'> - </h3>
                  <h3 className='header-match-goals'>{matchDatabase[0].goals.away}</h3>
                </div>
                <h3 className='header-match-penalty'>{penaltyAway}</h3>
              </div>
              <div className='header-match-info'>
                <h3 className='header-match-info-penalty'>
                  {penaltiesResult}
                </h3>
                <h3 className='header-match-info-status'>{matchDatabase[0].fixture.status.long}</h3>
              </div>
            </div>
            <div className='header-match-away-team'>
              <div className='header-match-logo-box'>
                  <img className='header-match-team-logo' src={matchDatabase[0].teams.away.logo}/>
                </div>
                <p className='header-match-team-name'>{formatAwayName}</p>
            </div>
          </section>
        </header>
        <main className='main-match'>
          <MatchInfoSwitcher />
          {actualMatchToogle == 'Stats' && <MatchInfoStats />}
          {actualMatchToogle == 'Playing XI' && 
          <MatchInfoPlayingXI 
            fixtureId = {idMatch}
          />}
          {actualMatchToogle == 'Details' && 
          <MatchInfoDetails  
            refereeName={matchDatabase[0].fixture.referee}
            stadiumName={matchDatabase[0].fixture.venue.name}
            cityName={matchDatabase[0].fixture.venue.city}
          />}
        </main>
      </div>
    )
  } else {
    return (
      <div className='MatchPageLoading'>
        <div className='loader'></div>
      </div>
    )
  }

  
}

export default MatchPage