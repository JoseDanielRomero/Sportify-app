import '../stylesheets/StatsBar.css'

function StatsBar({ statValueHome, statValueAway, isBallPossession }) {

  const numValueHome = Number(statValueHome)
  const numValueAway = Number(statValueAway)
  const numValueSum = numValueHome + numValueAway
  let percentageValueHome;
  let percentageValueAway;

  if (isBallPossession == false) {
    percentageValueHome = ((numValueHome * 100)/numValueSum) + ''
    percentageValueAway = ((numValueAway * 100)/numValueSum) + ''
  } else {
    percentageValueHome = statValueHome.substring(0, statValueHome.length - 1)
    percentageValueAway = statValueAway.substring(0, statValueAway.length - 1)
  }

  const handleClassNumberLeft = isBallPossession == false ? 'main-match-stats-result-number left' : 'main-match-stats-result-number-special left'
  const handleClassNumberRight = isBallPossession == false ? 'main-match-stats-result-number right' : 'main-match-stats-result-number-special right'
  const handleClassBarLeft = isBallPossession == false ? 'main-match-stats-bar-box left' : 'main-match-stats-bar-box-special left'
  const handleClassBarRight = isBallPossession == false ? 'main-match-stats-bar-box right' : 'main-match-stats-bar-box-special right'

  return (
    <>
    <div className='main-match-stats-result-box'>
      <p className={handleClassNumberLeft}>{statValueHome}</p>
      <div className={handleClassBarLeft}>
        <div className='main-match-stats-bar-progress-left' style={{ width: `${percentageValueHome}%` }}></div>
      </div>
    </div>
    <div className='main-match-stats-result-box'>
      <div className={handleClassBarRight}>
        <div className='main-match-stats-bar-progress-right' style={{ width: `${percentageValueAway}%` }}></div>
      </div>
      <p className={handleClassNumberRight}>{statValueAway}</p>
    </div>
  </>
  )
}

export default StatsBar;