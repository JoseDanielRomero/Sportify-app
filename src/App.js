import { createContext, useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import DashboardPage from './routes/DashboardPage';
import MatchPage from './routes/MatchPage';
import OnboardPage from './routes/OnboardPage';

export const ContentContext = createContext([])
export const LeaguesContext = createContext([])
export const TeamsContext = createContext([])
export const SourceIdContext = createContext('')
export const FixtureContext = createContext([])
export const MatchInfoContext = createContext([]) 

function App() {
  const options = [
    {value: 'league', text: 'LEAGUES'},
    {value: 'team', text: 'TEAMS'},
  ]

  const fixtureOptions = [
    {
      id: 1,
      text: 'Upcoming',
      param: 'next',
      active: true
    }, 
    {
      id: 2,
      text: 'Past Matches',
      param: 'last',
      active: false
    }
  ]

  const matchInfoOptions = [
    {
      id: 1,
      text: 'Stats',
      active: true
    }, 
    {
      id: 2,
      text: 'Playing XI',
      active: false
    }, 
    {
      id: 3,
      text: 'Details',
      active: false
    }
  ]

  const favoriteLeagues = [
    {
      id: '242',
      name: 'LigaPro',
      active: true
    }, 
    {
      id: '140',
      name: 'LaLiga',
      active: false
    }
  ]

  const favoriteTeams = [
    {
      id: '451',
      name: 'Boca',
      active: true
    }, 
    {
      id: '1152',
      name: 'Barcelona',
      active: false
    },
    {
      id: '51',
      name: 'Brighton',
      active: false
    }
  ]

  const [actualContent, setActualContent] = useState(options[0].value);
  const [favLeagues, setFavLeagues] = useState(favoriteLeagues);
  const [favTeams, setFavTeams] = useState(favoriteTeams);
  const [sourceId, setSourceId] = useState(favLeagues[0].id)
  const [fixtureData, setFixtureData] = useState(fixtureOptions)
  const [matchData, setMatchData] = useState(matchInfoOptions)

  return (
    <MatchInfoContext.Provider value={{ matchData, setMatchData }} >
      <FixtureContext.Provider value={{ fixtureData, setFixtureData }}>
        <SourceIdContext.Provider value={{ sourceId, setSourceId }} >
          <LeaguesContext.Provider value={{ favLeagues, setFavLeagues }} >
            <TeamsContext.Provider value={{ favTeams, setFavTeams }} >
              <ContentContext.Provider value={{ actualContent, setActualContent }}>
                <HashRouter>
                  <Routes>
                    <Route path='/' element={<DashboardPage options={options} />} />
                    <Route path='/match/:idMatch' element={<MatchPage />} />
                    <Route path='/onboard' element={<OnboardPage />} />
                  </Routes>
                </HashRouter>
              </ContentContext.Provider>
            </TeamsContext.Provider>
          </LeaguesContext.Provider>
        </SourceIdContext.Provider>
      </FixtureContext.Provider>
    </MatchInfoContext.Provider>
  );
}

export default App;
