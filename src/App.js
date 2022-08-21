import './App.css';
import Search from './components/search/search';
const Currentweather = require('../src/components/search/current-weather/current-weather');

function App() {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  }

  return (
    <div className="container">
      <Search onSearchChange = {handleOnSearchChange}/>
      <Currentweather />
    </div>
  );
}

export default App;
