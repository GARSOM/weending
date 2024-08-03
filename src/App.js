
import Lenis from 'lenis'
import img1 from './vendor/photo/Telegram Desktop/DSCM-1164_resized.jpg'
import img2 from './vendor/photo/Telegram Desktop/DSCM-1086_resized.jpg'
import heart from './vendor/icons8-heart-ios-17-outlined-96.png'
import video from './vendor/photo/istockphoto-1702469339-640_adpp_is.mp4'
import Form from './form'
import Timeline from './timeline'
import React, { useEffect, useRef, useState } from "react";

function App() {
  const lenis = new Lenis()
  lenis.on('scroll', (e) => {
  })
  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)
  const countdown = document.querySelector('.countdown');
  const targetDate = new Date('2024-10-11T00:00:00');

  function updateCountdown() {
    const now = new Date();
    const remainingTime = targetDate - now;

    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

    document.getElementById('days').innerText = days.toString().padStart(2, '0');
    document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
    document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');
  }


  setInterval(updateCountdown, 1000);
  return (

    <div className='page'>

      <div className="first_block">
        <img className='img' src={img1} />
      </div>
      <div className='title_div'>
        <h1 className='title'>Николай Анастасия
        </h1>
        <p className='description'>Дорогие и близкие!
          Мы с большой радостью приглашаем Вас разделить с нами самый
          трепетный и волшебный день в нашей жизни - нашу свадьбу!
        </p>
        <p className='description'> СЕЙЧАС самое время</p>
      </div>
      <div className='title_div'>
        <h1 className='title'>Октябрь</h1>
        <div className="days-of-week-container">
          <div className='description'>Пн</div>
          <div className='description'>Вт</div>
          <div className='description'>Ср</div>
          <div className='description'>Чт</div>
          <div className='description'>Пт</div>
          <div className='description'>Сб</div>
          <div className='description'>Вс</div>
        </div>
        <div className="calendar-container">
          <div className='number'>1</div>
          <div className='number'>2</div>
          <div className='number'>3</div>
          <div className='number'>4</div>
          <div className='number'>5</div>
          <div className='number'>6</div>
          <div className='number'>7</div>
          <div className='number'>8</div>
          <div className='number'>9</div>
          <div className='number'>10</div>
          <img className='heart' src={heart} />
          <div className='number'>11</div>
          <div className='number'>12</div>
          <div className='number'>13</div>
          <div className='number'>14</div>
          <div className='number'>15</div>
          <div className='number'>16</div>
          <div className='number'>17</div>
          <div className='number'>18</div>
          <div className='number'>19</div>
          <div className='number'>20</div>
          <div className='number'>21</div>
          <div className='number'>22</div>
          <div className='number'>23</div>
          <div className='number'>24</div>
          <div className='number'>25</div>
          <div className='number'>26</div>
          <div className='number'>27</div>
          <div className='number'>28</div>
          <div className='number'>29</div>
          <div className='number'>30</div>
          <div className='number'>31</div>
        </div>
      </div>
      <div className='location'>
        <h1 className='title'>Программа дня</h1>
        <Timeline />
      </div>
      <div className='location'>

        <h1 className='title'>Локация</h1>
        <p className='description'>Ресторан Bellagio
          Краснодар, Карасунский округ, ул Садовая <span className='number'>1\1</span> </p>

        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ac364ec6c1c5a6deeff92328e03a5304a3d3230dc9af082343a9021014d3c3848&amp;source=constructor" width="390" height="349" frameBorder="0" className='map'></iframe>
        <div className='w'>
          <a className='button_location' href="https://yandex.ru/maps/-/CDW44Z7W" target="_blank">Проложить маршрут</a>
        </div>
      </div>
      <div className='location'>
        <h1 className='title'>Дресс код</h1>
        <p className='description'> Мы очень стараемся сделать наш праздник красивым и будем рады, если вы
          поддержите цветовую гамму нашей свадьбы, и подберете, красивые,
          однотонные наряды пастельных оттенков
          Рекомендованная палитра цветов:</p>
        {/* <p className='description'>молочный, бежевый, персиковый, серебристый, серый, черный</p> */}
        <div className='circles'>
          <div className='color_circle1'></div>
          <div className='color_circle2'></div>
          <div className='color_circle3'></div>
          <div className='color_circle4'></div>
        </div>
        <div className='circles'>
          <div className='color_circle5'></div>
          <div className='color_circle6'></div>
          <div className='color_circle7'></div>
        </div>
        <p className='circles_description'>*Дорогие гости, огромная просьба воздержаться от красных, синих и белых
          нарядов, кроме белых рубашек у мужчин
        </p>
      </div>

      <div className='location'>
        <h1 className='title'>Наши пожелания</h1>
        <p className='description'>Мы будем очень рады, если вместо традиционных цветов вы подарите
          бутылочку вашего любимого вина, и подпишите повод, по которому нам ее
          открыть</p>
        <p className='description'> Если же вы не представляете свадьбу без цветов, то предлагаем оформить
          разовую цветочную подписку, и на протяжении долгого времени, каждую
          неделю нас будут радовать свежие букеты с доставкой на дом от вашего
          имени</p>
        <div className='w'>
          <a className='button_location' href="https://yandex.ru/maps/-/CDW44Z7W" target="_blank">Оформить цветочную подписку
          </a>
        </div>
        <p className='description'> Предлагаем перейти по ссылке в цветочный магазин
          - написать:
          «заказ букета для свадьбы -<span className='number'>11.10.24</span> Николай, Анастасия»
          <p className='description'>Ваше Имя Фамилия</p>
          <p className='description'>Сумма, которую вы планировали потратить на букет</p>
          <p className='description'>Контакты:</p>
          Цветочный салон German Garden Краснодар, ул, Красная,  <span className='number'>85</span>
          <p className='number'>+7 (909) 443-15-42</p>

        </p>
      </div>
      <Form />
      <div className='timer'>
        <h1 className='title'>До скорой встречи!</h1>

        <div className="countdown">
          <div className="countdown-item">
            <span className='number' id="days">00</span>
            <span >Дней</span>
          </div>
          <div className="countdown-item">
            <span className='number' id="hours">00</span>
            <span >Часов</span>
          </div>
          <div className="countdown-item">
            <span className='number' id="minutes">00</span>
            <span >Минут</span>
          </div>
          <div className="countdown-item">
            <span className='number' id="seconds">00</span>
            <span >Секунд</span>
          </div>
        </div>
        <img className='img' src={img2} />
      </div>

    </div>
  );
}

export default App;
