import CountryDetails from './components/countryDetails';
import Navbar from './components/navbar';
import HomePage from './HomePage';
import { Route, Switch, } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path ="/" >
      <HomePage />
      </Route>
      <Route path = "/countries/:cca3">
      <CountryDetails />
      </Route>
      </Switch>
    </div>
  );
}

export default App;
