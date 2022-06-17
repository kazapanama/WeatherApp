import './Forecast.css';

const Forecast = ({data,day})=>{
   

   let daysOfTheWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

    return(
             
        data.list.map((item)=>{
            
            
            
            if (day === new Date(item.dt_txt).getDay()){
                return(
                    <div className="forecast" key={item.dt}>
                        <span>{Math.round(item.main.temp)}C</span>
                        <span>{item.weather[0].main}</span>
                        <span>{(item.dt_txt).slice(11)}</span>
                        
                        {/* <span>{daysOfTheWeek[new Date(item.dt_txt).getDay()].slice(0,3)}</span> */}
                       
                    </div>
                )
            }
            
            
            
                
              
                })
                
    )
}

export default Forecast;