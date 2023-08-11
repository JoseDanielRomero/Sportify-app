import { createContext, useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import DashboardPage from './routes/DashboardPage';
import FavLeaguesPage from './routes/FavLeaguesPage';
import FavTeamsPage from './routes/FavTeamsPage';
import LoginPage from './routes/LoginPage';
import MatchPage from './routes/MatchPage';
import OnboardPage from './routes/OnboardPage';
import RegisterPage from './routes/RegisterPage';

export const ContentContext = createContext([])
export const LeaguesContext = createContext([])
export const TeamsContext = createContext([])
export const SourceIdContext = createContext('')
export const FixtureContext = createContext([])
export const MatchInfoContext = createContext([]) 
export const TempFavContext = createContext([])

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

  const loggedUser = JSON.parse(localStorage.getItem('loggedUser'))
  const userEmail = loggedUser.email

  const favLeaguesList = JSON.parse(localStorage.getItem('userLeagues')) || []
  const favTeamsList = JSON.parse(localStorage.getItem('userTeams')) || []
  const databaseId = favLeaguesList.findIndex((element) => element.user === userEmail)
  const databaseId2 = favTeamsList.findIndex((element) => element.user === userEmail)

  const favoriteLeagues = favLeaguesList[databaseId].data

  const favoriteTeams = favTeamsList[databaseId2].data

  const [actualContent, setActualContent] = useState(options[0].value);
  const [favLeagues, setFavLeagues] = useState(favoriteLeagues);
  const [favTeams, setFavTeams] = useState(favoriteTeams);
  const [sourceId, setSourceId] = useState('')
  const [fixtureData, setFixtureData] = useState(fixtureOptions)
  const [matchData, setMatchData] = useState(matchInfoOptions)
  const [tempFavData, setTempFavData] = useState([])

  return (
    <MatchInfoContext.Provider value={{ matchData, setMatchData }} >
      <FixtureContext.Provider value={{ fixtureData, setFixtureData }}>
        <SourceIdContext.Provider value={{ sourceId, setSourceId }} >
          <LeaguesContext.Provider value={{ favLeagues, setFavLeagues }} >
            <TeamsContext.Provider value={{ favTeams, setFavTeams }} >
              <ContentContext.Provider value={{ actualContent, setActualContent }}>
                <TempFavContext.Provider value={{ tempFavData, setTempFavData }} >
                  <HashRouter>
                    <Routes>
                      <Route path='/' element={<DashboardPage options={options} />} />
                      <Route path='/match/:idMatch' element={<MatchPage />} />
                      <Route path='/onboard' element={<OnboardPage />} />
                      <Route path='/register' element={<RegisterPage />} />
                      <Route path='/login' element={<LoginPage />} />
                      <Route path='/my-leagues' element={<FavLeaguesPage />} />
                      <Route path='/my-teams' element={<FavTeamsPage />} />
                    </Routes>
                  </HashRouter>
                </TempFavContext.Provider>
              </ContentContext.Provider>
            </TeamsContext.Provider>
          </LeaguesContext.Provider>
        </SourceIdContext.Provider>
      </FixtureContext.Provider>
    </MatchInfoContext.Provider>
  );
}

export default App;
