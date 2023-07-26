import { useContext } from 'react'
import { ContentContext, LeaguesContext, SourceIdContext, TeamsContext } from '../App'
import '../stylesheets/SourceButton.css'

function SourceButton({ name, imageId, array }) {

  const { favLeagues } = useContext(LeaguesContext)
  const { favTeams } = useContext(TeamsContext)
  const { actualContent } = useContext(ContentContext)
  const { sourceId, setSourceId } = useContext(SourceIdContext)
  const formatType = actualContent + 's'

  const handleClickSource = () => {
    const findId = array.findIndex((element) => element.id === imageId);
    setSourceId(array[findId].id) 
  }

  return (
    <div className='source-button-box'>
      <button className='source-button-box-image' onClick={handleClickSource} >
        <img className='source-button-image' src={`https://media.api-sports.io/football/${formatType}/${imageId}.png`} />
      </button>
      <div className='source-button-box-text'>
        <p className='source-button-name'>{name}</p>
      </div>
    </div>
  )
}

export default SourceButton;