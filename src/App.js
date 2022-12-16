
import classes from './App.module.css';
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import Forecast from './components/Forecast';
import getFormattedWeatherData from './services/weatherService';

function App() {

 const fetchWeather = async () => {
  const data = await getFormattedWeatherData({q: 'london'});

  console.log(data)
 }

 fetchWeather();
  
  return (
    <div className={classes.container}>
      <TopButtons />
      <Inputs />
      <TimeAndLocation />
      <TemperatureAndDetails />
      <Forecast title='hourly forecast'/>
      <Forecast title='daily forecast'/>
    </div>
  );
}

export default App;
