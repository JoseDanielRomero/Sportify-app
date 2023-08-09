import '../stylesheets/FavSearchComponent.css'
import { useEffect, useState } from 'react'
import triangleRight from '../images/triangle-black-left.svg'
import triangleLeft from '../images/triangle-black-right.svg'
import searchIcon from '../images/search.png'
import axios from 'axios'

function FavSearchComponent({ type }) {

  const [search, setSearch] = useState('')
  const [request, setRequest] = useState('')
  const [tempFavData, setTempFavData] = useState([])
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

  const handleClickResult = (result) => {

    const copyTempArray = [...tempFavData]
    const find = copyTempArray.findIndex((element) => element.id == result.league.id)

    if (find == -1) {
      copyTempArray.push(
        {
          id: result.league.id,
          name: result.league.name,
          active: false
        }
      )
      setTempFavData(copyTempArray)

    } else {
      copyTempArray.splice(find, 1)
      setTempFavData(copyTempArray)
    }
  }

  const handleClassResult = (result) => {

    const copyTempArray = [...tempFavData]
    const find = copyTempArray.findIndex((element) => element.id == result.league.id)

    if (find == -1) {
      return 'search-result-box'
    } else {
      return 'search-result-box red'
    }
  }

  console.log(tempFavData)

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
      {searchDatabase.map(result => (
        <article className={handleClassResult(result)} key={result.league.id} onClick={()=>{handleClickResult(result)}}>
          <div className='search-result-image-box'>
            <img className='search-result-image' src={result.league.logo} />
          </div>
          <p className='search-result-name'>{result.league.name.toUpperCase()}</p>
        </article>
      ))}
    </>
  )
}

export default FavSearchComponent;