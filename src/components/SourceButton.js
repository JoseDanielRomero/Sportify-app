import { useContext } from 'react'
import { ContentContext, LeaguesContext, SourceIdContext, TeamsContext } from '../App'
import '../stylesheets/SourceButton.css'

function SourceButton({ name, imageId, array }) {

  const { favLeagues, setFavLeagues } = useContext(LeaguesContext)
  const { favTeams, setFavTeams } = useContext(TeamsContext)
  const { actualContent } = useContext(ContentContext)
  const { sourceId, setSourceId } = useContext(SourceIdContext)
  const formatType = actualContent + 's'

  const handleClickSource = () => {
    const copyArray = [...array]
    const findId = copyArray.findIndex((element) => element.id === imageId);

    for (let i=0; i<copyArray.length; i++) {
      if (i != findId) {
        copyArray[i].active = false
      } else {
        copyArray[i].active = true
      }
    }

    if (actualContent == 'league') {
      setFavLeagues(copyArray)
    } else {
      setFavTeams(copyArray)
    }
  }

  const handleClassSource = () => {
    const findId = array.findIndex((element) => element.id === imageId);
    if (array[findId].active == true) {
      return 'source-button-box-image selected'
    } else {
      return 'source-button-box-image'
    }
  }
  
  return (
    <div className='source-button-box'>
      <button className={handleClassSource()} onClick={handleClickSource} >
        <img className='source-button-image' src={`https://media.api-sports.io/football/${formatType}/${imageId}.png`} />
      </button>
      <div className='source-button-box-text'>
        <p className='source-button-name'>{name}</p>
      </div>
    </div>
  )
}

export default SourceButton;