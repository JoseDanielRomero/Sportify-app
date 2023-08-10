import '../stylesheets/FavLeaguesPage.css'
import { Navigate } from 'react-router-dom'
import { useState, useContext } from 'react'
import { TempFavContext } from '../App'
import FavSearchComponent from '../components/FavSearchComponent'
import FavListComponent from '../components/FavListComponent'
import triangleGrayRight from '../images/triangle-strong-gray-left.svg'
import triangleGrayLeft from '../images/triangle-strong-gray-right.svg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function FavLeaguesPage() {

  const { tempFavData, setTempFavData } = useContext(TempFavContext)
  const [successChanges, setSuccessChanges] = useState(false)

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

  const notify = () => toast('Unable to save changes.');

  const handleClickSave = () => {

    const loggedUser = JSON.parse(localStorage.getItem('loggedUser'))
    const userEmail = loggedUser.email
    const copyTempArray = [...tempFavData]

    for (let i=0; i<copyTempArray.length; i++) {
      if (i == 0) {
        copyTempArray[i].active = true
      } else {
        copyTempArray[i].active = false
      }
    }

    var formatObject = {};
    formatObject.user = userEmail; 
    formatObject.data = copyTempArray;

    const favLeaguesList = JSON.parse(localStorage.getItem('userLeagues')) || []

    const databaseId = favLeaguesList.findIndex((element) => element.user === userEmail)

    if (copyTempArray.length != 0) {
      if (databaseId == -1) {
        favLeaguesList.push(formatObject)
        localStorage.setItem('userLeagues', JSON.stringify(favLeaguesList))
      } else {
        favLeaguesList[databaseId].data = copyTempArray
        localStorage.setItem('userLeagues', JSON.stringify(favLeaguesList))
      }
      setSuccessChanges(true)
    } else {
      notify()
    }

  }

  if (successChanges == false) {

  return (
    <div className='FavLeaguesPage'>
      <header className='header-leagues'>
        <button type='submit' className='header-save-button-container' onClick={handleClickSave}>
					<img src={triangleGrayRight} className='triangle-for-button'/>
					<div className='button-box strong-gray fav'>
						<p className='button-text black fav'>SAVE CHANGES</p>
					</div>
					<img src={triangleGrayLeft} className='triangle-for-button'/>
				</button>
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
        {actualFavToogle == 'My Favorites' && <FavListComponent type={'league'} />}
        {actualFavToogle == 'Search' && <FavSearchComponent type={'league'} />}
        <div>
          <ToastContainer
            position="bottom-center"
            autoClose={4000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            theme="light"
          />
        </div>
        <footer>
        </footer>
      </main>
    </div>
  )
  } else {
    return (
      <Navigate to='/' />
    )
  }
}

export default FavLeaguesPage