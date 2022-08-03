import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './components/header';
import LoginPage from './pages/login';
import HomePage from './pages/home';

import './App.scss';

function App() {
  return (
    <Router>
      <Header />

      <div className="page-container">
        <Switch>
          <Route exact path="/login">
            <LoginPage />
          </Route>

          <Route>
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
