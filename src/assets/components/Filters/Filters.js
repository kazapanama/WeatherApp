import './Filters.css';


const Filters = ({day,chooseDay}) =>{
    
    
   let today = new Date().getDay()
    // console.log('day'+day  +'today'+today)
    
    return(
        <div className='filters'>
            <h4 className={day===today? 'active':''} onClick={chooseDay}>today</h4>
            <h4 className={(day===today+1 || today === 6)? 'active':''} 
            onClick={chooseDay}>tomorrow</h4>
            <h4 className={((day===today+2) || (day === 0 && today === 5) ||(day === 1 && today === 6))? 'active':''} 
            onClick={chooseDay}>day after</h4>

    </div>


    )
    

}



export default Filters