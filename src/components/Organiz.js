import logo from '../vendor/лого прозрачное 1 черное.png'
function Organiz() {

    return (<div className='organiz_main'>
        <p className='description_H_organiz'>Наша свадьба в надежных руках организатора
            Жгуновой Даши
        </p>
        <div className='organiz_div'>
            <div className='organiz_divw'>
                <p className='organiz_p'>*ЕСЛИ У ВАС ОСТАЛИСЬ КАКИЕ-ЛИБО ВОПРОСЫ ИЛИ У ВАС ЕСТЬ НЕОПРЕОДОЛИМОЕ
                    ЖЕЛАНИЕ ПОДГОТОВИТЬ СЮРПРИЗ МОЛОДОЖЕНАМ, ПОЖАЛУЙСТА,
                    СООБЩИТЕ НАШЕМУ ОРГАНИЗАТОРУ ДАШЕ
                </p>
            </div>
            <div className='descripstion_pozelanya_div'>
                <a className='descripstion_pozelanya_button' href="https://api.whatsapp.com/send?phone=79649175404" target="_blank">Написать организатору
                </a>

            </div>
            <p className='pozelanya_flowers_p black'>ТЕЛ. +7 (964) 917-54-04
            </p>
            <img className='logo' src={logo} />
        </div>
    </div>
    );
}

export default Organiz;
