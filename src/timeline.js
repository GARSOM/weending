import end from './vendor/svg/end.svg'
import banket from './vendor/svg/banket.svg'
import registration from './vendor/svg/registration.svg'
import sbor from './vendor/svg/Group_134331-1.svg'
import gift from './vendor/svg/wedding_a2fp06vcz74t.svg'


function Timeline() {

    return (
        <div className='timing'>
            <div className='svg_div'>
                <img className='svg_timing' src={sbor} alt='Выездная церемония'/>
                <p className='number'>16:30 </p>
                <p className='description'>Welcome</p>
                <img className='svg_timing' src={registration} alt='Welcome'/>
                <p className='number'>17:00</p>
                <p className='description'>Выездная церемония</p>
                <img className='svg_timing_gift' src={gift} alt='Выездная церемония'/>
                <p className='number'>17:30</p>
                <p className='description'>Одаривание</p>
                <p className='description'>Фотосессия с гостями</p>
                <img className='svg_timing' src={banket} alt='Выездная церемония'/>
                <p className='number'>18:30</p>
                <p className='description'>Начало банкета</p>
                <img className='svg_timing' src={end} alt='Выездная церемония'/>
                <p className='number'>23:00-00:00</p>
                <p className='description'>Финал, фоновая музыка</p>
            </div>
        </div>
    );
}

export default Timeline;
