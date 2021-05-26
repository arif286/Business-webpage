import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home/Home';

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

        </Route>
      </Switch>
    </Router>
  );
}

export default App;
