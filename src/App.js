import { useEffect,useState } from 'react';
import './App.css';
// import rMorning from './assets/img/rivneVector/rivneMorning.png';
import rDay from './assets/img/rivneVector/rivneDay.png';
// import rEvening from './assets/img/rivneVector/rivneEvening.png';
// import rNight from './assets/img/rivneVector/rivneNight.png';
import Cities from './assets/components/Cities/Cities';
import WeatherNow from './assets/components/WeatherNow/WeatherNow';
import Forecast from './assets/components/Forecast/Forecast';
import Filters from './assets/components/Filters/Filters';





// useEffect(async () => {
//   fetch('forecast.json').then(res=> res.json())
//  .then(data=>console.log(data))





function App() {
  
  let today = new Date().getDay()
   



  const [day,setDay]  = useState(today);
  const [data,setData] = useState({});
  const [load,setLoad] = useState(false);
  const [city,setCity] = useState('695594');


  function chooseCity(e){
    setCity(e.target.getAttribute('data-code'));
    console.log(city)
  }


  function chooseDay(e){
    
    if (e.target.innerText === 'today'){
      setDay(today);
    } else if (e.target.innerText ==='tomorrow'){
      today === 6 ? setDay(0) : setDay(today+1);
    } else if (e.target.innerText ==='day after'){
      today === 5 ? setDay(0) : (today === 6 ? setDay(1) : setDay(today+2));
    }
    
    
    console.log(day)
  }


  useEffect(() => {
    fetch(`./forecast${city}.json`)
    .then(response => response.json())
        
    .then(data => {
      setLoad(true)
      setData(data) 
      console.log(data)
      })
  },[city],)

  
    
    
    
 
  
  
  return (
  <div className="wrapper">
    <div className="card-bg">

        <Cities city={city} chooseCity={chooseCity}/>
        
        {load && <WeatherNow data={data} />}

        
        <Filters day={day} chooseDay={chooseDay}/>
        
        {load && <Forecast data={data} day={day} />}

      </div>
  
  
    <img src={rDay} alt="asd" className="bg-city"/>
  
  </div>
  );
}

export default App;
