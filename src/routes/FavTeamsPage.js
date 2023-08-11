import '../stylesheets/FavTeamsPage.css'
import { Navigate } from 'react-router-dom'
import { useState, useContext, useEffect } from 'react'
import { TempFavContext } from '../App'
import FavSearchComponent from '../components/FavSearchComponent'
import FavListComponent from '../components/FavListComponent'
import triangleGrayRight from '../images/triangle-strong-gray-left.svg'
import triangleGrayLeft from '../images/triangle-strong-gray-right.svg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function FavTeamsPage() {

  const { tempFavData, setTempFavData } = useContext(TempFavContext)

  useEffect(() => {

    const favTeamsList = JSON.parse(localStorage.getItem('userTeams')) || []
    const loggedUser = JSON.parse(localStorage.getItem('loggedUser'))
    const userEmail = loggedUser.email
    const databaseId = favTeamsList.findIndex((element) => element.user === userEmail)
  
    setTempFavData(favTeamsList[databaseId].data)

  },[])

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

    const favTeamsList = JSON.parse(localStorage.getItem('userTeams')) || []

    const databaseId = favTeamsList.findIndex((element) => element.user === userEmail)

    if (copyTempArray.length != 0) {
      if (databaseId == -1) {
        favTeamsList.push(formatObject)
        localStorage.setItem('userTeams', JSON.stringify(favTeamsList))
      } else {
        favTeamsList[databaseId].data = copyTempArray
        localStorage.setItem('userTeams', JSON.stringify(favTeamsList))
      }
      setTempFavData([])
      window.location.href = "/";
    } else {
      notify()
    }

  }

  return (
    <div className='FavTeamsPage'>
      <header className='header-leagues'>
        <button type='submit' className='header-save-button-container' onClick={handleClickSave}>
					<img src={triangleGrayRight} className='triangle-for-button'/>
					<div className='button-box strong-gray fav'>
						<p className='button-text black fav'>SAVE CHANGES</p>
					</div>
					<img src={triangleGrayLeft} className='triangle-for-button'/>
				</button>
				<div className='header-register-text-box'>
					<h3 className='header-register-title'>FOLLOW YOUR FAVORITE TEAMS</h3>
					<p className='header-register-subtitle'>Choose at least 1 and maximum 4 teams to be able to follow them more easily.</p>
				</div>
				<h2 className='header-leagues-big-title'>TEAMS</h2>
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
        {actualFavToogle == 'My Favorites' && <FavListComponent type={'team'} />}
        {actualFavToogle == 'Search' && <FavSearchComponent type={'team'} />}
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
}

export default FavTeamsPage;