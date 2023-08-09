import '../stylesheets/FavListComponent.css'
import { useContext } from 'react'
import { TempFavContext } from '../App'

function FavListComponent({ type }) {

  const { tempFavData, setTempFavData } = useContext(TempFavContext)

  const handleClickResult = (result) => {

    const copyTempArray = [...tempFavData]
    const find = copyTempArray.findIndex((element) => element.id == result.id)

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
    const find = copyTempArray.findIndex((element) => element.id == result.id)

    if (find == -1) {
      return 'search-result-box'
    } else {
      return 'search-result-box red'
    }
  }

  console.log(tempFavData)

  return (
    <>
      {tempFavData.map(result => (
        <article className={handleClassResult(result)} key={result.id} onClick={()=>{handleClickResult(result)}}>
          <div className='search-result-image-box'>
            <img className='search-result-image' src={`https://media.api-sports.io/football/${type}s/${result.id}.png`} />
          </div>
          <p className='search-result-name'>{result.name.toUpperCase()}</p>
        </article>
      ))}
    </>
  )
}

export default FavListComponent;