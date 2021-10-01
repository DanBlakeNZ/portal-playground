import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import DemoPage from './pages/DemoPage';
import DemoPageTwo from './pages/DemoPageTwo';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import Sidebar from './components/Sidebar';

import { Grid } from '@react-spectrum/layout';

const App = () => {
  return (
    <Router>
      <Grid
        areas={['header  header', 'sidebar content']}
        columns={['1fr', '3fr']}
        rows={['size-1000', 'auto']}
      >
        <Header />
        <Sidebar />

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
      </Grid>
    </Router>
  );
};

export default App;
