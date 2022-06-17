import './Cities.css'


const Cities = ({city,chooseCity}) => {

    



    return(
        <div className='cities'>
            <h2 className={city === '695594' ? 'active':''} data-code="695594" onClick={chooseCity}>Rivne</h2>
            <h2 className={city === '702550' ? 'active':''} data-code="702550" onClick={chooseCity} >Lviv</h2>
            <h2 className={city === '703448' ? 'active':''} data-code="703448" onClick={chooseCity} >Kyiv</h2>
        </div>
    )
}

export default Cities;

