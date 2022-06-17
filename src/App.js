import { useEffect,useState } from 'react';
import './App.css';
// import rMorning from './assets/img/rivneVector/rivneMorning.png';
import rDay from './assets/img/rivneVector/rivneDay.png';
// import rEvening from './assets/img/rivneVector/rivneEvening.png';
// import rNight from './assets/img/rivneVector/rivneNight.png';
import Cities from './assets/components/Cities/Cities';
import WeatherNow from './assets/components/WeatherNow/WeatherNow';
import Forecast from './assets/components/Forecast/Forecast';





// useEffect(async () => {
//   fetch('forecast.json').then(res=> res.json())
//  .then(data=>console.log(data))





function App() {
  
  const [data,setData] = useState({});
  const [load,setLoad] = useState(false);


  useEffect(() => {
    fetch("forecast.json")
    .then(response => response.json())
        
    .then(data => {
      setLoad(true)
      setData(data) 
      })
  },[])


  let today = new Date().getDay() +1;

  console.log(data)
  return (
  <div className="wrapper">
    <div className="card-bg">

        <Cities />
        
        {load && <WeatherNow data={data} />}

        
        
        
        {load && <Forecast data={data} today={today}/>}

      </div>
  
  
    <img src={rDay} alt="asd" className="bg-city"/>
  
  </div>
  );
}

export default App;
