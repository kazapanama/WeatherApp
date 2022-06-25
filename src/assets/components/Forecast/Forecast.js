import './Forecast.css';

const Forecast = ({data,day})=>{
   
    return(
             
        data.list.map((item)=>{
            

            if (day === new Date(item.dt_txt).getDay()){
                return(
                    <div className="forecast" key={item.dt}>
                        <span>{Math.round(item.main.temp)}C</span>
                        <span>{item.weather[0].main}</span>
                        <span>{(item.dt_txt).slice(11,16)}</span>
                        
                    </div>
                )
            }
            
                })
                
    )
}

export default Forecast;