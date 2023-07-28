import '../stylesheets/MatchArticle.css'

function MatchArticle() {
  return (
    <article className='match-container'>
      <section className='match-teams-box'>
        <div className='match-home-team-container'>
          <div className='match-home-team-topbox'>
            <img className='match-league-image' src='https://media.api-sports.io/football/leagues/242.png' />
          </div>
          <div className='match-home-team-extrabox'>
            <p className='match-home-team-penalty'>(4)</p>
          </div>
          <div className='match-home-team-result'>
            <p className='match-home-team-name'>BARCELONA SC</p>
            <div className='match-home-team-logo-box'>
              <img className='match-home-team-logo' src='https://media.api-sports.io/football/teams/1152.png'/>
            </div>
            <p className='match-home-team-goals'>3</p>
          </div>
        </div>
        <div className='match-away-team-container'>
          
        </div>
      </section>
      <section className='match-details-box'>
        <div className='match-details-box-competition'>
          <p className='match-details-title'>LigaPro</p>
          <p className='match-details-subtitle'>1st Round - 15</p>
        </div>
        <div className='match-details-box-datetime'>
          <p className='match-details-subtitle'>05/08/2023</p>
          <p className='match-details-subtitle'>20:00 PM</p>
        </div>
      </section>
    </article>
  )
}

export default MatchArticle;