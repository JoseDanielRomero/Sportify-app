import '../stylesheets/FavLeaguesPage.css'
import backIcon from '../images/back-white.svg'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import FavSearchComponent from '../components/FavSearchComponent'

function FavLeaguesPage() {

  const FavPageOptions = [
    {
      id: 1,
      text: 'My Favorites',
      active: true
    }, 
    {
      id: 2,
      text: 'Search',
      active: false
    },
  ]

  const [favPageData, setFavPageData] = useState(FavPageOptions)
  const findActive = favPageData.findIndex((element) => element.active == true)
  const actualFavToogle = favPageData[findActive].text

  return (
    <div className='FavLeaguesPage'>
      <header className='header-leagues'>
        <NavLink to='/' className='header-back-button-box'>
          <img src={backIcon} className='header-back-button-icon' />
        </NavLink>
				<div className='header-register-text-box'>
					<h3 className='header-register-title'>FOLLOW YOUR FAVORITE LEAGUES</h3>
					<p className='header-register-subtitle'>Choose at least 1 and maximum 4 leagues to be able to follow them more easily.</p>
				</div>
				<h2 className='header-leagues-big-title'>LEAGUES</h2>
			</header>
      <main className='main-leagues'>
        <section className='fixture-switcher-container'>
          {favPageData.map(data => {
            const handleClickSwitcher = () => {
              const copyfavPageData = [...favPageData]
              const findId = copyfavPageData.findIndex((element) => element.id === data.id);

              for (let i=0; i<copyfavPageData.length; i++) {
                if (i != findId) {
                  copyfavPageData[i].active = false
                } else {
                  copyfavPageData[i].active = true
                }
              }
              setFavPageData(copyfavPageData)
            }

            const handleClassSwitcher = () => {
              const findId = favPageData.findIndex((element) => element.id === data.id);
              if (favPageData[findId].active == true) {
                return 'fixture-switcher-box selected'
              } else {
                return 'fixture-switcher-box'
              }
            }

            return (
              <div className={handleClassSwitcher()} key={data.id} onClick={handleClickSwitcher} >
                {data.text}
              </div>
            )
          })}
        </section>
        {actualFavToogle == 'Search' && <FavSearchComponent />}
      </main>
    </div>
  )
}

export default FavLeaguesPage