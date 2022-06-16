import { useEffect,useState } from 'react';
import './App.css';
// import rMorning from './assets/img/rivneVector/rivneMorning.png';
import rDay from './assets/img/rivneVector/rivneDay.png';
// import rEvening from './assets/img/rivneVector/rivneEvening.png';
// import rNight from './assets/img/rivneVector/rivneNight.png';





// useEffect(async () => {
//   fetch('forecast.json').then(res=> res.json())
//  .then(data=>console.log(data))





function App() {
  
  const [data,setData] = useState({});
  const [load,setLoad] = useState(false);


  useEffect(() => {
    fetch("forecast.json")
    .then(response => response.json())
        // 4. Setting *dogImage* to the image url that we received from the response above
    .then(data => {
      setLoad(true)
      setData(data) 
      })
  },[])

  console.log(data)
  return (
  <div className="wrapper">
    <div className="card-bg">

        <div className='cities'>
          <h1>Rivne</h1>
          <h2>Lviv</h2>
          <h2>Kyiv</h2>
        </div>
      
        <div><h3>Temperature now:{load && data.list[0].main.temp}</h3></div>
    
      </div>
  
  
    <img src={rDay} alt="asd" className="bg-city"/>
  
  </div>
  );
}

export default App;
