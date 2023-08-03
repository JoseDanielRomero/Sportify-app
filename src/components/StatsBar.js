import '../stylesheets/StatsBar.css'

function StatsBar({ statValueHome, statValueAway }) {

  const numValueHome = Number(statValueHome)
  const numValueAway = Number(statValueAway)
  const numValueSum = numValueHome + numValueAway
  const percentageValueHome = ((numValueHome * 100)/numValueSum) + ''
  const percentageValueAway = ((numValueAway * 100)/numValueSum) + ''

  return (
    <>
    <div className='main-match-stats-result-box'>
      <p className='main-match-stats-result-number left'>{statValueHome}</p>
      <div className='main-match-stats-bar-box left'>
        <div className='main-match-stats-bar-progress-left' style={{ width: `${percentageValueHome}%` }}></div>
      </div>
    </div>
    <div className='main-match-stats-result-box'>
      <div className='main-match-stats-bar-box right'>
        <div className='main-match-stats-bar-progress-right' style={{ width: `${percentageValueAway}%` }}></div>
      </div>
      <p className='main-match-stats-result-number right'>{statValueAway}</p>
    </div>
  </>
  )
}

export default StatsBar;