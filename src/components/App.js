
import Lenis from 'lenis'
import heart from '../vendor/icons8-heart-ios-17-outlined-96.png'
import Form from './form'
import Timeline from './timeline'
import Location from './Location'
import DressCod from './Dresscod'
import Pozelanya from './Pozelanya'
import Timer from './timer'
import React from "react";
import svg_saveTheDate from '../vendor/K67lXg.tif_00000132074067235514111370000017711109426479134383_.png'
import Organiz from './Organiz'
import logo_telegram from '../vendor/telegram-svgrepo-com.svg'
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

      <div className="zero_block">
        <h2>СВАДЕБНОЕ ТОРЖЕСТВО</h2>
        <div className='name'>
          <h1 className='title'>Николай
          </h1>
          <h1 className='title'>&
          </h1>
          <h1 className='title'>Анастасия
          </h1>
        </div>
        <div className='date'>
          <p className='description'>ОКТЯБРЬ
          </p>
          <p className='number'>11
          </p>
          <p className='description'>2024
          </p>
        </div>
        <div className='svg_saveTheDate_div'>
          <img className='svg_saveTheDate' src={svg_saveTheDate} />
        </div>

      </div>
      <div className='description_under_div'>

        <p className='description_under'>Дорогие и близкие!

        </p>
        <p className='description_under'>
          Мы с большой радостью приглашаем Вас разделить с нами самый
          трепетный и волшебный день в нашей жизни - нашу свадьбу!
        </p>
        <p className='description_now'> Сейчас самое время</p>
      </div>

      <div className='month_div'>
        <h1 className='month'>Октябрь</h1>

        <div className="days-of-week-container">
          <div className='description_calen'>Пн</div>
          <div className='description_calen'>Вт</div>
          <div className='description_calen'>Ср</div>
          <div className='description_calen'>Чт</div>
          <div className='description_calen'>Пт</div>
          <div className='description_calen'>Сб</div>
          <div className='description_calen'>Вс</div>
        </div>
        <div className="calendar-container">

          <div className='number_calen'>7</div>
          <div className='number_calen'>8</div>
          <div className='number_calen'>9</div>
          <div className='number_calen'>10</div>
          <img className='heart' src={heart} />
          <div className='number_calen'>11</div>
          <div className='number_calen'>12</div>
          <div className='number_calen'>13</div>
        </div>
      </div>
      <div className="title_block  title--center">Программа дня</div>
      <Timeline />
      <div className="title_block  title--center">Локация</div>
      <Location />
      <div className="title_block  title--center">Дресс код</div>
      <DressCod />
      <div className="title_block  title--center">Анкета гостя</div>
      <Form />
      <div className="title_block  title--center">Наши пожелания</div>
      <Pozelanya />
      <div className="title_block  title--center">Контакты</div>
      <Organiz />
      <div className='after'>
        <p className='pozelanya_flowers_p black'>*ВСКОРЕ ЗДЕСЬ ПОЯВИТСЯ ССЫЛКА НА ФОТО И ВИДЕО ОТЧЕТ С НАШЕЙ СВАДЬБЫ
        </p>
        <div className='descripstion_pozelanya_div'>
          <a className='descripstion_pozelanya_button' href="" target="_blank">Кнопка
          </a>
        </div>
      </div>
      <Timer />
      <div className="header">
        <div className='header_svg-div'>
          <svg width="40" height="23" viewBox="0 0 90 71" fill="" xmlns="http://www.w3.org/2000/svg"><rect x="6" y="10" width="35" height="52" fill="#000000"></rect><path d="M0 0V70.338H89.521V0H0ZM19.184 53.481L12.79 47.085L19.184 40.691L25.578 34.2971C25.578 34.2971 21.681 30.4 19.184 27.903C16.687 25.406 12.79 21.509 12.79 21.509L15.987 18.3115L19.184 15.114L28.7755 24.7055L38.367 34.2971L28.7755 43.889L19.184 53.481Z" fill="white"></path><rect className="dode" x="45" y="44" width="29" height="8" fill="#000000"></rect></svg>
          <h1 className='title_footer'>Твой Разработчик</h1>
          <a className="header_contact" href="https://t.me/garsom02" target="_blank">
            <img className='logo_telegram' src={logo_telegram} />
          </a>
        </div>

      </div>
    </div>
  );
}

export default App;
