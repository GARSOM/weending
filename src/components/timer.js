import img2 from '../vendor/DSCM-1088_resized.jpg'
function Timer() {
    return (
        <div className='timer'>
            <h1 className='title'>До скорой встречи!</h1>
            <div className="countdown">
                <div className="countdown-item">
                    <span className='number_timer' id="days">00</span>
                    <span className='description_now'>Дней</span>
                </div>
                <div className="countdown-item">
                    <span className='number_timer' id="hours">00</span>
                    <span className='description_now'>Часов</span>
                </div>
                <div className="countdown-item">
                    <span className='number_timer' id="minutes">00</span>
                    <span className='description_now'>Минут</span>
                </div>
                <div className="countdown-item">
                    <span className='number_timer' id="seconds">00</span>
                    <span className='description_now'>Секунд</span>
                </div>

            </div>
            <img className='img' src={img2} />
        </div>
    );
}

export default Timer;
