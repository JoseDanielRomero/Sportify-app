import '../stylesheets/FavSearchComponent.css'
import { useContext, useEffect, useState } from 'react'
import triangleRight from '../images/triangle-black-left.svg'
import triangleLeft from '../images/triangle-black-right.svg'
import searchIcon from '../images/search.png'
import axios from 'axios'
import { TempFavContext } from '../App'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function FavSearchComponent({ type }) {

  const [search, setSearch] = useState('')
  const [request, setRequest] = useState('')
  const { tempFavData, setTempFavData } = useContext(TempFavContext)
  const [searchDatabase, setSearchDatabase] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    setRequest(search)
  }

  const handleChangeInput = (event) => {
    setSearch(event.target.value)
  }

  const handleDisabled = () => {
    if (search.length == 0) {
      return true
    } else {
      return false
    }
  }

  useEffect(() => {

    const obtainSearch = async() => {

      const url = 'https://v3.football.api-sports.io/' + type + 's' + '?search=' + request

      const config = {
        headers:{
          'x-rapidapi-key': 'cfb97c8b7f111df47e8cca192220d0d6',
          'x-rapidapi-host': 'v3.football.api-sports.io'
        }
      };

      const api = await axios.get(url, config)

      setSearchDatabase(api.data.response)

    }

    obtainSearch();

  },[request])

  console.log(searchDatabase)

  const notify = () => toast("You have reached the maximum of 4 favs, manage in 'My Favorites' tab");

  const handleClickResult = (result) => {

    var resultId;
    var resultName; 
    if (type === 'league') {
      resultId = result.league.id
      resultName = result.league.name
    } else if (type === 'team') {
      resultId = result.team.id
      resultName = result.team.name
    }

    const copyTempArray = [...tempFavData]
    const find = copyTempArray.findIndex((element) => element.id == resultId)

      if (find == -1 && copyTempArray.length <= 3) {
        copyTempArray.push(
          {
            id: resultId,
            name: resultName,
            active: false
          }
        )
        setTempFavData(copyTempArray)
      } else if (find == -1 && copyTempArray.length == 4) {
        notify()
      }
      
      if (find > -1) {
        copyTempArray.splice(find, 1)
        setTempFavData(copyTempArray)
      }
    
  }

  const handleClassResult = (result) => {

    var resultId;
    if (type === 'league') {
      resultId = result.league.id
    } else if (type === 'team') {
      resultId = result.team.id
    }

    const copyTempArray = [...tempFavData]
    const find = copyTempArray.findIndex((element) => element.id == resultId)

    if (find == -1) {
      return 'search-result-box'
    } else {
      return 'search-result-box red'
    }
  }

  return (
    <>
      <form className='form-search' onSubmit={handleSubmit}>
        <input
          type='text'
          className='input-search'
          spellCheck='false'
          autoComplete='none'
          placeholder={`Search by ${type} name`}
          value={search}
          onChange={handleChangeInput}
        />
        <button type='submit' disabled={handleDisabled()} className='form-search-button-container'>
          <img src={triangleRight} className='triangle-for-button'/>
          <div className='button-box black search'>
            <p className='button-text white'><img src={searchIcon} className='form-search-icon' /></p>
          </div>
          <img src={triangleLeft} className='triangle-for-button'/>
        </button>
      </form>
      {searchDatabase.map(result => {

        var resultId;
        var resultName; 
        var resultIdLogo;
        if (type === 'league') {
          resultId = result.league.id
          resultName = result.league.name
          resultIdLogo = result.league.logo
        } else if (type === 'team') {
          resultId = result.team.id
          resultName = result.team.name
          resultIdLogo = result.team.logo
        }

        return (
          <article className={handleClassResult(result)} key={resultId} onClick={()=>{handleClickResult(result)}}>
            <div className='search-result-image-box'>
              <img className='search-result-image' src={resultIdLogo} />
            </div>
            <p className='search-result-name'>{resultName.toUpperCase()}</p>
          </article>
        )
      })}
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
    </>
  )
}

export default FavSearchComponent;