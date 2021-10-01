import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HomePage from './pages/HomePage';
import DemoPage from './pages/DemoPage';
import DemoPageTwo from './pages/DemoPageTwo';
import Navigation from './components/Navigation';

const App = () => {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route path='/demo'>
          <DemoPage />
        </Route>
        <Route path='/demo2'>
          <DemoPageTwo />
        </Route>
        <Route path='/'>
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
