import { createContext, useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import DashboardPage from './routes/DashboardPage';
import FavLeaguesPage from './routes/FavLeaguesPage';
import FavTeamsPage from './routes/FavTeamsPage';
import LoginPage from './routes/LoginPage';
import MatchPage from './routes/MatchPage';
import OnboardPage from './routes/OnboardPage';
import ProfilePage from './routes/ProfilePage';
import RegisterPage from './routes/RegisterPage';

export const ContentContext = createContext([])
export const LeaguesContext = createContext([])
export const TeamsContext = createContext([])
export const SourceIdContext = createContext('')
export const FixtureContext = createContext([])
export const MatchInfoContext = createContext([]) 
export const TempFavContext = createContext([])

function App() {

  const usersList = JSON.parse(localStorage.getItem('users')) || []

  if (usersList.length === 0) {

    const adminUser = {
      name: 'admin', 
      lastName: 'admin', 
      email: 'admin@admin.com', 
      password: 'admin'
    }

    usersList.push(adminUser)
    localStorage.setItem('users', JSON.stringify(usersList))
  }

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

  const loggedUser = JSON.parse(localStorage.getItem('loggedUser')) || []
  const userEmail = loggedUser.email

  const favLeaguesList = JSON.parse(localStorage.getItem('userLeagues')) || []
  const favTeamsList = JSON.parse(localStorage.getItem('userTeams')) || []

  if (favLeaguesList.length === 0) {

    const adminLeagues = {
      user: 'admin@admin.com',
      data: [
        {id: 2, name: "UEFA Champions League", active: true},
        {id: 3, name: "UEFA Europa League", active: false}
      ]
    }

    favLeaguesList.push(adminLeagues)
    localStorage.setItem('userLeagues', JSON.stringify(favLeaguesList))
  }

  if (favTeamsList.length === 0) {

    const adminTeams = {
      user: 'admin@admin.com',
      data: [
        {id: 541, name: "Real Madrid", active: true},
        {id: 50, name: "Manchester City", active: false}
      ]
    }

    favTeamsList.push(adminTeams)
    localStorage.setItem('userTeams', JSON.stringify(favTeamsList))
  }

  const databaseId = favLeaguesList.findIndex((element) => element.user === userEmail)
  const databaseId2 = favTeamsList.findIndex((element) => element.user === userEmail)

  var favoriteLeagues;
  var favoriteTeams;

  if (loggedUser.length === 0) {
    favoriteLeagues = favLeaguesList[0].data
    favoriteTeams = favTeamsList[0].data
  } else {

    if (databaseId != -1 && databaseId2 != -1) {
      favoriteLeagues = favLeaguesList[databaseId].data
      favoriteTeams = favTeamsList[databaseId2].data
    } else {
      favoriteLeagues = favLeaguesList[0].data
      favoriteTeams = favTeamsList[0].data
    }

  }

  const [actualContent, setActualContent] = useState(options[0].value);
  const [favLeagues, setFavLeagues] = useState(favoriteLeagues);
  const [favTeams, setFavTeams] = useState(favoriteTeams);
  const [sourceId, setSourceId] = useState(favLeagues[0].id)
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
                      <Route path='/profile' element={<ProfilePage />} />
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
