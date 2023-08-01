import '../stylesheets/MatchArticle.css'

function MatchArticle({ datetime, leagueLogo, leagueName, leagueRound, teamHomeName, teamHomeLogo, teamHomeGoals, teamHomePenalty, teamAwayName, teamAwayLogo, teamAwayGoals, teamAwayPenalty }) {

  const formatHomeName = teamHomeName.toUpperCase()
  const formatAwayName = teamAwayName.toUpperCase()

  var fecha;
  fecha = new Date(datetime)
  const dateString = fecha.toDateString()
  const matchDate = dateString.slice(4, 15)
  const timeString = fecha.toTimeString()
  const matchTime = timeString.slice(0, 5)

  let penaltyHome;
  let penaltyAway;
  if (teamHomePenalty != null && teamAwayPenalty != null) {
    penaltyHome = '(' + teamHomePenalty + ')'
    penaltyAway = '(' + teamAwayPenalty + ')'
  } else {
    penaltyHome = ''
    penaltyAway = ''
  }

  return (
    <article className='match-container'>
      <section className='match-teams-box'>
        <div className='match-home-team-container'>
          <div className='match-team-topbox home'>
            <img className='match-league-image' src={leagueLogo} />
          </div>
          <div className='match-team-extrabox home'>
            <p className='match-team-penalty'>{penaltyHome}</p>
          </div>
          <div className='match-team-result'>
            <p className='match-team-name home'>{formatHomeName}</p>
            <div className='match-team-logo-box'>
              <img className='match-team-logo' src={teamHomeLogo}/>
            </div>
            <p className='match-team-goals home'>{teamHomeGoals}</p>
          </div>
        </div>
        <div className='match-away-team-container'>
          <div className='match-team-topbox away'>
            
          </div>
          <div className='match-team-extrabox away'>
            <p className='match-team-penalty'>{penaltyAway}</p>
          </div>
          <div className='match-team-result'>
            <p className='match-team-goals away'>{teamAwayGoals}</p>
            <div className='match-team-logo-box'>
              <img className='match-team-logo' src={teamAwayLogo}/>
            </div>
            <p className='match-team-name away'>{formatAwayName}</p>
          </div>
        </div>
      </section>
      <section className='match-details-box'>
        <div className='match-details-box-competition'>
          <p className='match-details-title'>{leagueName}</p>
          <p className='match-details-subtitle'>{leagueRound}</p>
        </div>
        <div className='match-details-box-datetime'>
          <p className='match-details-subtitle'>{matchDate}</p>
          <p className='match-details-subtitle'>{matchTime}</p>
        </div>
      </section>
    </article>
  )
}

export default MatchArticle;