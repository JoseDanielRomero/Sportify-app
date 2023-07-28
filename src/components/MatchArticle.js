import '../stylesheets/MatchArticle.css'

function MatchArticle() {
  return (
    <article className='match-container'>
      <section className='match-teams-box'>

      </section>
      <section className='match-details-box'>
        <div className='match-details-box-competition'>
          <p className='match-details-title'>LigaPro</p>
          <p className='match-details-subtitle'>1st Round - 15</p>
        </div>
        <div className='match-details-box-datetime'>
          <p className='match-details-title date'>05/08/2023</p>
          <p className='match-details-subtitle'>20:00 PM</p>
        </div>
      </section>
    </article>
  )
}

export default MatchArticle;