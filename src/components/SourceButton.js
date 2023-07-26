import { useContext } from 'react'
import { ContentContext } from '../App'
import '../stylesheets/SourceButton.css'

function SourceButton({ name, imageId }) {

  const { actualContent } = useContext(ContentContext)
  const formatType = actualContent + 's'

  return (
    <div className='source-button-box'>
      <div className='source-button-box-image'>
        <img className='source-button-image' src={`https://media.api-sports.io/football/${formatType}/${imageId}.png`} />
      </div>
      <div className='source-button-box-text'>
        <p className='source-button-name'>{name}</p>
      </div>
    </div>
  )
}

export default SourceButton