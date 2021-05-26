import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/'>
          <Home/>
        </Route>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='*'>
            <NotFound/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
