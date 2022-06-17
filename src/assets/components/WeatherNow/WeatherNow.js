import './WeatherNow.css'


const WeatherNow = ({data, load}) => {
    return(
        <div className='weatherNow'>
          <h2>Weather now</h2>
          <h3>Temperature now:{data.list[0].main.temp} C</h3>
          <h3>Weather:{data.list[0].weather[0].main}</h3>
          <h3>Wind:{data.list[0].wind.speed} mp/H</h3>
          <h3>Humidity:{data.list[0].main.humidity}%</h3>
          
        </div>
    )
}


export default WeatherNow;
