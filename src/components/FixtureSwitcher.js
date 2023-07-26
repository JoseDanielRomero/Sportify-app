import { useContext, useState } from 'react'
import { ContentContext } from '../App'
import '../stylesheets/FixtureSwitcher.css'

function FixtureSwitcher() {

  const { actualContent, setActualContent } = useContext(ContentContext)
  const fixtureOptions = [
    {
      id: 1,
      text: 'Upcoming',
      active: true
    }, 
    {
      id: 2,
      text: 'Past Matches',
      active: false
    }
  ]
  const [fixtureData, setFixtureData] = useState(fixtureOptions)

  return (
    <section className='fixture-switcher-container'>
      {fixtureData.map(data => {

      const handleClickSwitcher = () => {
        const copyFixtureData = [...fixtureData]
        const findId = copyFixtureData.findIndex((element) => element.id === data.id);

        for (let i=0; i<copyFixtureData.length; i++) {
          if (i != findId) {
            copyFixtureData[i].active = false
          } else {
            copyFixtureData[i].active = true
          }
        }

        setFixtureData(copyFixtureData)
      }

      const handleClassSwitcher = () => {
        const findId = fixtureData.findIndex((element) => element.id === data.id);
        if (fixtureData[findId].active == true) {
          return 'fixture-switcher-box selected'
        } else {
          return 'fixture-switcher-box'
        }
      }

        return (
          <div className={handleClassSwitcher()} key={data.id} onClick={handleClickSwitcher} >
            {data.text}
          </div>
        )})
      }
    </section>
  )
}

export default FixtureSwitcher