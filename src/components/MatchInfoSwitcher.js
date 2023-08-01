import { useContext } from 'react';
import '../stylesheets/MatchInfoSwitcher.css'
import { MatchInfoContext } from '../App'

function MatchInfoSwitcher() {

  const { matchData, setMatchData } = useContext(MatchInfoContext)

  return (
    <article className='main-match-toogle'>
      {matchData.map(data => {
        
        const handleClickSwitcher = () => {
          const copyMatchData = [...matchData]
          const findId = copyMatchData.findIndex((element) => element.id === data.id);
  
          for (let i=0; i<copyMatchData.length; i++) {
            if (i != findId) {
              copyMatchData[i].active = false
            } else {
              copyMatchData[i].active = true
            }
          }
  
          setMatchData(copyMatchData)
        }
  
        const handleClassSwitcher = () => {
          const findId = matchData.findIndex((element) => element.id === data.id);
          if (matchData[findId].active == true) {
            return 'main-match-switcher-box selected'
          } else {
            return 'main-match-switcher-box'
          }
        }

        return (
          <div className={handleClassSwitcher()} key={data.id} onClick={handleClickSwitcher} >
            {data.text}
          </div>
      )})}
    </article>
  )
}

export default MatchInfoSwitcher;