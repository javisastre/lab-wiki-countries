import './App.css';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Navbar from './components/Navbar';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="row">
          <CountriesList />
          <Route path="/:countryId" component={CountryDetails} exact />
        </div>
      </div>
    </div>
  );
}

export default App;
