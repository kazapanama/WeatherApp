import './WeatherNow.css'


const WeatherNow = ({data, load}) => {
    return(
        <div className='weatherNow'>
          
          
          <div>
              <div className="left-side">
                <h3>{Math.round(data.list[0].main.temp)}°C</h3>
              </div>
              
              <div className="right-side">
              <h3>Weather:{data.list[0].weather[0].main}</h3>
              <h3>Wind:{data.list[0].wind.speed} mp/H</h3>
                <h3>Humidity:{data.list[0].main.humidity}%</h3>
              </div>
          </div>
          
          
          
        </div>
    )
}


export default WeatherNow;
