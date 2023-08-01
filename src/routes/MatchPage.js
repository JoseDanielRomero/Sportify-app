import '../stylesheets/MatchPage.css'
import backIcon from '../images/back.svg'
import { NavLink, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

function MatchPage() {

  const { idMatch } = useParams()
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

    return (
      <div className='MatchPage'>
        <nav className='nav-match'>
          <NavLink to='/'>
            <img src={backIcon} className='nav-match-icon' />
          </NavLink>
        </nav>
        <header className='header-match'>
          <h2 className='match-round'>
            {matchDatabase[0].league.round}
          </h2>
          <h3 className='match-datetime'>
            {matchDate} · {matchTime}
          </h3>
        </header>
        
        
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