import './CityImg.css'
const CityImg = ({city,dayPart}) =>{

    

    return(
        <>
        <img src={`../img/${city}/${dayPart}.jpeg`} alt="Choosed city" className="bg-city"/>
       
        </>
        )

    
} 




export default CityImg