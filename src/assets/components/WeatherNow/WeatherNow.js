import './WeatherNow.css'


const WeatherNow = ({data, load}) => {
    return(
        <div className='weatherNow'>
          
          
          <div>
              <div className="left-side">
                <h3>{Math.round(data.list[0].main.temp)}°C</h3>
              </div>
              
              <div className="right-side">
                <h3>{data.list[0].weather[0].main}</h3>
                    
                    <div>
                      <img src='./img/icons/arrow.png' className="icon" alt="arrow icon"/> <h3> {data.list[0].wind.speed} mp/H </h3>
                    </div>
                    <div>
                      <img src='./img/icons/droplet.png' className="icon" alt="droplet icon"/> <h3> {data.list[0].main.humidity}%</h3>
                    </div>
                
              </div>
          </div>
          
          
          
        </div>
    )
}


export default WeatherNow;
