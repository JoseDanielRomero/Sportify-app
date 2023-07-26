import { createContext, useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import DashboardPage from './routes/DashboardPage';

export const ContentContext = createContext([])

function App() {
  const options = [
    {value: 'league', text: 'LEAGUES'},
    {value: 'team', text: 'TEAMS'},
  ]

  const [actualContent, setActualContent] = useState(options[0].value)

  return (
    <ContentContext.Provider value={{ actualContent, setActualContent }}>
      <HashRouter>
        <Routes>
          <Route path='/' element={<DashboardPage options={options} />} />
        </Routes>
      </HashRouter>
    </ContentContext.Provider>
  );
}

export default App;
