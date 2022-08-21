import './current-weather.css';

const Currentweather = () => {
    return (
        <div className='weather'>
            <div className='top'>
                <p className="city">Belgrade</p>
                <p className="weather-description">Sunny</p>
                <img alt="weather" className='weather-icon' src='icons/01d.png' />
            </div>
        </div>
    );
}

export default Currentweather;