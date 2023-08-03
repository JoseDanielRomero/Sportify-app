import { useEffect, useState } from 'react';
import '../stylesheets/MatchInfoPlayingXI.css'
import axios from 'axios';

function MatchInfoPlayingXI({ fixtureId }) {

  const [lineupDatabase, setLineupDatabase] = useState([])

  useEffect(() => {

    const obtainLineupData = async() => {

      const url = 'https://v3.football.api-sports.io/fixtures/lineups?fixture=' + fixtureId;

      const config = {
        headers:{
          'x-rapidapi-key': 'cfb97c8b7f111df47e8cca192220d0d6',
          'x-rapidapi-host': 'v3.football.api-sports.io'
        }
      };

      const api = await axios.get(url, config)

      setLineupDatabase(api.data.response)

    }

    obtainLineupData()

  },[])

  console.log(lineupDatabase)

  if (lineupDatabase.length > 0) {
    return (
      <article className='main-lineup-playingXI-container'>
        <section className='main-lineup-playingXI-home-team'>
          <div className='main-lineup-team-name-box'>
            <h4 className='main-lineup-team-name'>{lineupDatabase[0].team.name}</h4>
          </div>
          <div className='main-lineup-team-section-container'>
            <div className='main-lineup-team-section-box'>
              <h5 className='main-lineup-team-section-name'>STARTING XI</h5>
            </div>
            {lineupDatabase[0].startXI.map(players => (
              <div className='main-lineup-team-player-box' key={players.player.id}>
                <p className='main-lineup-team-player-number'>{players.player.number}</p>
                <p className='main-lineup-team-player-name'>{players.player.name}</p>
              </div>
            ))}
          </div>
          <div className='main-lineup-team-section-container'>
            <div className='main-lineup-team-section-box'>
              <h5 className='main-lineup-team-section-name'>SUBSTITUTES</h5>
            </div>
            {lineupDatabase[0].substitutes.map(players => (
              <div className='main-lineup-team-player-box' key={players.player.id}>
                <p className='main-lineup-team-player-number'>{players.player.number}</p>
                <p className='main-lineup-team-player-name'>{players.player.name}</p>
              </div>
            ))}
          </div>
        </section>

        <section className='main-lineup-playingXI-home-team'>
          <div className='main-lineup-team-name-box away'>
            <h4 className='main-lineup-team-name'>{lineupDatabase[1].team.name}</h4>
          </div>
          <div className='main-lineup-team-section-container'>
            <div className='main-lineup-team-section-box'>
              <h5 className='main-lineup-team-section-name'>STARTING XI</h5>
            </div>
            {lineupDatabase[1].startXI.map(players => (
              <div className='main-lineup-team-player-box' key={players.player.id}>
                <p className='main-lineup-team-player-number'>{players.player.number}</p>
                <p className='main-lineup-team-player-name'>{players.player.name}</p>
              </div>
            ))}
          </div>
          <div className='main-lineup-team-section-container'>
            <div className='main-lineup-team-section-box'>
              <h5 className='main-lineup-team-section-name'>SUBSTITUTES</h5>
            </div>
            {lineupDatabase[1].substitutes.map(players => (
              <div className='main-lineup-team-player-box' key={players.player.id}>
                <p className='main-lineup-team-player-number'>{players.player.number}</p>
                <p className='main-lineup-team-player-name'>{players.player.name}</p>
              </div>
            ))}
          </div>
        </section>
      </article>
    )
  } else {
    return (
      <article className='main-lineup-playingXI-container empty'>
      </article>
    )
  }
}

export default MatchInfoPlayingXI;