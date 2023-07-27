import { createContext, useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import DashboardPage from './routes/DashboardPage';

export const ContentContext = createContext([])
export const LeaguesContext = createContext([])
export const TeamsContext = createContext([])
export const SourceIdContext = createContext('')

function App() {
  const options = [
    {value: 'league', text: 'LEAGUES'},
    {value: 'team', text: 'TEAMS'},
  ]

  const favoriteLeagues = [
    {
      id: '242',
      name: 'LigaPro',
      active: false
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
      active: false
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

  return (
    <SourceIdContext.Provider value={{ sourceId, setSourceId }} >
      <LeaguesContext.Provider value={{ favLeagues, setFavLeagues }} >
        <TeamsContext.Provider value={{ favTeams, setFavTeams }} >
          <ContentContext.Provider value={{ actualContent, setActualContent }}>
            <HashRouter>
              <Routes>
                <Route path='/' element={<DashboardPage options={options} />} />
              </Routes>
            </HashRouter>
        </ContentContext.Provider>
        </TeamsContext.Provider>
      </LeaguesContext.Provider>
    </SourceIdContext.Provider>
      
  );
}

export default App;
