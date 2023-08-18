import axios from 'axios';
import { useEffect, useState } from 'react';
import '../stylesheets/MatchInfoStats.css'
import StatsBar from './StatsBar';

function MatchInfoStats({ fixtureId }) {

  const [statsDatabase, setStatsDatabase] = useState([])

  useEffect(()=>{

    const obtainStatsData = async() => {

      const url = 'https://v3.football.api-sports.io/fixtures/statistics?fixture=' + fixtureId;

      const config = {
        headers:{
          'x-rapidapi-key': 'cfb97c8b7f111df47e8cca192220d0d6',
          'x-rapidapi-host': 'v3.football.api-sports.io'
        }
      };

      const api = await axios.get(url, config)

      setStatsDatabase(api.data.response)

    }

    obtainStatsData()

  },[])

  if (statsDatabase.length > 0) {

    const obtainStatsValue = (type, teamIndex) => {
      const findId = statsDatabase[teamIndex].statistics.findIndex(element => element.type == type)
      return statsDatabase[teamIndex].statistics[findId].value
    }

    return (
      <article className='main-match-stats-container'>
        <section className='main-match-stats-box'>
          <h5 className='main-match-stats-title adjust'>BALL POSSESSION</h5>
          <div className='main-match-stats-result-container'>
            <StatsBar 
              statValueHome={obtainStatsValue('Ball Possession',0)}
              statValueAway={obtainStatsValue('Ball Possession',1)}
              isBallPossession={true}
            />
          </div>
        </section>
        <section className='main-match-stats-box'>
          <h5 className='main-match-stats-title'>SHOTS</h5>
          <p className='main-match-stats-result-name'>Total Shots</p>
          <div className='main-match-stats-result-container'>
            <StatsBar 
              statValueHome={obtainStatsValue('Total Shots',0)}
              statValueAway={obtainStatsValue('Total Shots',1)}
              isBallPossession={false}
            />
          </div>
          <p className='main-match-stats-result-name'>Shots on Goal</p>
          <div className='main-match-stats-result-container'>
            <StatsBar 
              statValueHome={obtainStatsValue('Shots on Goal',0)}
              statValueAway={obtainStatsValue('Shots on Goal',1)}
              isBallPossession={false}
            />
          </div>
          <p className='main-match-stats-result-name'>Shots off Goal</p>
          <div className='main-match-stats-result-container'>
            <StatsBar 
              statValueHome={obtainStatsValue('Shots off Goal',0)}
              statValueAway={obtainStatsValue('Shots off Goal',1)}
              isBallPossession={false}
            />
          </div>
          <p className='main-match-stats-result-name'>Blocked Shots</p>
          <div className='main-match-stats-result-container'>
            <StatsBar 
              statValueHome={obtainStatsValue('Blocked Shots',0)}
              statValueAway={obtainStatsValue('Blocked Shots',1)}
              isBallPossession={false}
            />
          </div>
        </section>
        <section className='main-match-stats-box'>
          <h5 className='main-match-stats-title'>FREE KICKS</h5>
          <p className='main-match-stats-result-name'>Fouls</p>
          <div className='main-match-stats-result-container'>
            <StatsBar 
              statValueHome={obtainStatsValue('Fouls',0)}
              statValueAway={obtainStatsValue('Fouls',1)}
              isBallPossession={false}
            />
          </div>
          <p className='main-match-stats-result-name'>Corner Kicks</p>
          <div className='main-match-stats-result-container'>
            <StatsBar 
              statValueHome={obtainStatsValue('Corner Kicks',0)}
              statValueAway={obtainStatsValue('Corner Kicks',1)}
              isBallPossession={false}
            />
          </div>
          <p className='main-match-stats-result-name'>Offsides</p>
          <div className='main-match-stats-result-container'>
            <StatsBar 
              statValueHome={obtainStatsValue('Offsides',0)}
              statValueAway={obtainStatsValue('Offsides',1)}
              isBallPossession={false}
            />
          </div>
        </section>
        <section className='main-match-stats-box'>
          <h5 className='main-match-stats-title'>CARDS</h5>
          <p className='main-match-stats-result-name'>Yellow Cards</p>
          <div className='main-match-stats-result-container'>
            <StatsBar 
              statValueHome={obtainStatsValue('Yellow Cards',0)}
              statValueAway={obtainStatsValue('Yellow Cards',1)}
              isBallPossession={false}
            />
          </div>
          <p className='main-match-stats-result-name'>Red Cards</p>
          <div className='main-match-stats-result-container'>
            <StatsBar 
              statValueHome={obtainStatsValue('Red Cards',0)}
              statValueAway={obtainStatsValue('Red Cards',1)}
              isBallPossession={false}
            />
          </div>
        </section>
      </article>
    )
  } else {
    return (
      <article className='main-match-stats-container'></article>
    )
  }
}

export default MatchInfoStats;