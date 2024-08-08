import end from '../vendor/svg/cook.svg'
import banket from '../vendor/svg/eat.svg'
import registration from '../vendor/svg/Group.svg'
import sbor from '../vendor/svg/Vector.svg'
import gift from '../vendor/svg/photo.svg'


function Timeline() {

    return (
        <div className='timing'>
            <div className='svg_div'>
                <img className='svg_timing' src={sbor} alt='Выездная церемония' />
                <p className='number_gift'>16:30 </p>
                <p className='description_gift'>Welcome</p>
                <img className='svg_timing' src={registration} alt='Welcome' />
                <p className='number_gift'>17:00</p>
                <p className='description_gift'>Выездная церемония</p>
                <img className='svg_timing' src={gift} alt='Выездная церемония' />
                <p className='number_gift'>17:30</p>
                <p className='description_gift'>Одаривание</p>
                <p className='description_gift'>Фотосессия с гостями</p>
                <img className='svg_timing' src={banket} alt='Выездная церемония' />
                <p className='number_gift'>18:30</p>
                <p className='description_gift'>Начало банкета</p>
                <img className='svg_timing' src={end} alt='Выездная церемония' />
                <p className='number_gift'>23:00-00:00</p>
                <p className='description_gift'>Финал вечера </p>
                <p className='description_gift_p'>(фоновая музыка)</p>
            </div>
        </div>
    );
}

export default Timeline;
