import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import { Routes } from 'react-router-dom';
import Header from './Pages/Header/Header';
import CountryDetails from './Pages/CountryDetails/CountryDetails';

function App() {
  return (
    <div className="w-full h-full bg-gray-100 dark:bg-gray-800">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route
            exact
            path="/country/:countryCapital"
            element={<CountryDetails />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
