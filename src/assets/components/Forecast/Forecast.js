import './Forecast.css';

const Forecast = ({data,today})=>{
   

   

    return(
             
        data.list.map((item)=>{
            
            
            
            if (today === new Date(item.dt_txt).getDay()){
                return(
                    <div className="forecast" key={item.dt}>
                        <span>{item.main.temp}C</span>
                        <span>{item.weather[0].main}</span>
                        <span>{(item.dt_txt).slice(12)}</span>
                        <span>{new Date(item.dt_txt).getDay()}</span>
                       
                    </div>
                )
            }
            
            
            
                
              
                })
                
    )
}

export default Forecast;