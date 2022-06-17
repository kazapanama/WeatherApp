import { useEffect,useState } from 'react';
import './App.css';




import Cities from './assets/components/Cities/Cities';
import WeatherNow from './assets/components/WeatherNow/WeatherNow';
import Forecast from './assets/components/Forecast/Forecast';
import Filters from './assets/components/Filters/Filters';
import CityImg from './assets/components/CityImg/CityImg';


function App() {
  
 

  let today = new Date().getDay()
  let dayTime = new Date().getHours()

  let dayPart = '';
  let colors = ['#090057','#02affd','#0077ff','#242492'];
  let bgColor ='';

    if (dayTime >= 0 && dayTime < 6){
      dayPart = 'night';
      bgColor = colors[0];
    } else if (dayTime >= 6 && dayTime < 12){
        dayPart = 'morning';
        bgColor = colors[1];
    }  else if (dayTime >=12 && dayTime < 18){
        dayPart = 'day';
        bgColor = colors[2];
    } else if (dayTime >=18 && dayTime < 24){
        dayPart = 'evening';
        bgColor = colors[3];
    }

    

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

  <div className='bg-color' style={{backgroundColor:`${bgColor}`}}>
        <div className="wrapper">
            <div className="card-bg">
                <Cities city={city} chooseCity={chooseCity}/>
                {load && <WeatherNow data={data} />}
                <Filters day={day} chooseDay={chooseDay}/>
                {load && <Forecast data={data} day={day} />}
              </div>
          <CityImg city={city} dayPart={dayPart}/>
       </div>
  </div>
  
  );
}

export default App;
