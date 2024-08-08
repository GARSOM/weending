import img from '../vendor/DSCM-1084_resized.jpg'
function Pozelanya() {

    return (<div className='pozelanya_main'>
        <div className='pozelanya'>
            <div className='pozelanya_img2_div'>
                <img src={img} className='img2' />
            </div>
            <div className='pozelanya_description_div'>
                <p className='descripstion_pozelanya'>Мы будем очень рады, если вместо
                    традиционных цветов Вы подарите
                    бутылочку Вашего любимого вина
                    и подпишите повод, по которому нам
                    ее открыть!</p>
                <p className='descripstion_pozelanya'>Если же Вы не представляете
                    свадьбу без цветов, то предлагаем
                    оформить разовую цветочную подписку,
                    и на протяжении долгого времени,
                    каждую неделю нас будут радовать
                    свежие букеты с доставкой на дом
                    от Вашего имени</p>
            </div>

        </div>
        <div className='descripstion_pozelanya_div'>
            <a className='descripstion_pozelanya_button' href="https://yandex.ru/maps/-/CDc0eS1H" target="_blank">Оформить цветочную подписку
            </a>
        </div>


        <div className='pozelanya_flowers_div'>
            <div className='pozelanya_flowers_divw'>
                <p className='pozelanya_flowers_p'>ПРЕДЛАГАЕМ ПЕРЕЙТИ ПО ССЫЛКЕ
                </p>
                <p className='pozelanya_flowers_p'>
                    В ЦВЕТОЧНЫЙ МАГАЗИН</p>
                <p className='pozelanya_flowers_p'>НАПИСАТЬ:</p>
                <p className='pozelanya_flowers_p black'>"ЗАКАЗ БУКЕТА ДЛЯ СВАДЬБЫ - 11.10.24 НИКОЛАЙ, АНАСТАСИЯ"
                </p>
                <p className='pozelanya_flowers_p black'>
                    ВАШЕ ИМЯ И ФАМИЛИЯ
                </p>
                <p className='pozelanya_flowers_p black'>
                    СУММА, КОТОРУЮ ВЫ ПЛАНИРОВАЛИ ПОТРАТИТЬ НА БУКЕТ</p>
                <p className='pozelanya_flowers_p'>КОНТАКТЫ:</p>
                <p className='pozelanya_flowers_p'>
                    ЦВЕТОЧНЫЙ САЛОН "GERMAN GARDEN"</p>
                <p className='pozelanya_flowers_p'>
                    Г. КРАСНОДАР, УЛ. КРАСНАЯ, 85</p>
                <p className='pozelanya_flowers_p'>
                    +7 (909) 443-15-42</p>
            </div>
        </div>
    </div>
    );
}

export default Pozelanya;
