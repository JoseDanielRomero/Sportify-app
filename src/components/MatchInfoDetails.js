import '../stylesheets/MatchInfoDetails.css'

function MatchInfoDetails({ refereeName, stadiumName, cityName }) {
  return (
    <article className='main-match-details-container'>
      <h5 className='main-match-details-title'>REFEREE</h5>
      <p className='main-match-details-result'>{refereeName}</p>
      <h5 className='main-match-details-title'>CITY</h5>
      <p className='main-match-details-result'>{cityName}</p>
      <h5 className='main-match-details-title'>STADIUM</h5>
      <p className='main-match-details-result'>{stadiumName}</p>
    </article>
  )
}

export default MatchInfoDetails;