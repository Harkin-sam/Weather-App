
import classes from './App.module.css';
import TopButtons from './components/TopButtons';
import Inputs from './components/Inputs';
import TimeAndLocation from './components/TimeAndLocation';
import TemperatureAndDetails from './components/TemperatureAndDetails';
import Forecast from './components/Forecast';

function App() {
  return (
    <div className={classes.container}>
      <TopButtons />
      <Inputs />
      <TimeAndLocation />
      <TemperatureAndDetails />
      <Forecast title='hourly forecast'/>
    </div>
  );
}

export default App;
