import './App.css';
import { HashRouter, Route, Router } from 'react-router-dom';
import DashboardPage from './routes/DashboardPage';

function App() {
  return (
    <HashRouter>
      <Router>
        <Route path='/' element={<DashboardPage />} />
      </Router>
    </HashRouter>
  );
}

export default App;
