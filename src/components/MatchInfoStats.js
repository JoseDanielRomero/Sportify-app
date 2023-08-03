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

  console.log(statsDatabase)

  const obtainStatsValue = (type, teamIndex) => {
    const findId = statsDatabase[teamIndex].statistics.findIndex(element => element.type == type)

    console.log(statsDatabase[teamIndex].statistics[findId])

    return statsDatabase[teamIndex].statistics[findId].value
  }

  return (
    <article className='main-match-stats-container'>
      <h5 className='main-match-stats-title'>SHOTS</h5>
      <section className='main-match-stats-result-container'>
        <StatsBar 
          statValueHome={obtainStatsValue('Total Shots',0)}
          statValueAway={obtainStatsValue('Total Shots',1)}
        />
      </section>
    </article>
  )
}

export default MatchInfoStats;