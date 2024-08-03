import React, { useState } from 'react';
const botToken = '7204890579:AAEX8O1MNWxHwKLYpMszyZjpyisLKFByBPo'
const chat_id = '-4266085902'
export function Form() {
    const handleResponse = (res) => {
        if (res.ok) {
            const json = res.json();
            if (json) {
                return json;
            }
        }
        return Promise.reject(res);
    }
    function telegram({ data }) {
        return fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chat_id}&parse_mode=html&text=${data}`, {
            method: 'POST',
        }).then(handleResponse);
    }

    const [username, setusername] = React.useState('')
    const [checked, setChecked] = React.useState('Не определились')
    const [checked2, setChecked2] = React.useState('Не определились')
    const [buttonText, setButtonText] = useState('Отправить');


    const items = ['Приду', 'Не приду']
    const alc = ['Игристое', 'Вино красное', 'Вино белое', 'Водка', '“Папин” самогон”', 'Виски']
    function handleusernameInput(e) {
        setusername(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        const data = [username, checked, checked2]
        telegram({ data })
    }
    function handleClick() {
        setButtonText('Спасибо');
    }

    return (
        <div className='location'>
            <h1 className='title'>Анкета</h1>
            <p className='description'>Дорогие гости, пожалуйста, заполните эту анкету до <span className='number'> 20.08.24</span>, это не займет
                много времени:
            </p>
            <form className="form" onSubmit={handleSubmit}>
                <p className='description'>Ваше фамилия и имя:
                </p>
                <input
                    className="input_name"
                    placeholder="Иванов Иван"
                    id="username"
                    name="username"
                    type="username"
                    value={username}
                    onChange={handleusernameInput}
                    required
                />
                <p className='description'>Будет ли у вас возможность посетить мероприятие?
                </p>
                <ul>
                    {items.map((item) => (
                        <li key={item}>
                            <label>
                                <input
                                    className='option-input'
                                    type='radio'
                                    checked={checked === item}
                                    onChange={() => setChecked(item)}
                                    required
                                />
                                {item}
                            </label>
                        </li>
                    ))}
                </ul>

                <p className='description'>Ваши предпочтения по алкоголю:
                </p>
                <ul>
                    {alc.map((item) => (
                        <li key={item}>
                            <label>
                                <input
                                    className='option-input'
                                    type='radio'
                                    checked={checked2 === item}
                                    onChange={() => setChecked2(item)}
                                    required
                                />
                                {item}
                            </label>
                        </li>
                    ))}
                </ul>

                <button id="btn" className='popup__submit' onClick={handleClick}>
                    {buttonText}
                </button>

            </form>
        </div>
    );
}

export default Form;

