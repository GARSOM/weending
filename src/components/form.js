import React, { useState } from 'react';
const botToken = '7204890579:AAEX8O1MNWxHwKLYpMszyZjpyisLKFByBPo'
const chat_id = '-1002232685826'
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
    const [alerg, alergsername] = React.useState('')
    const [checked, setChecked] = React.useState('Не определились')
    const [checked2, setChecked2] = React.useState('Не определились')
    const [buttonText, setButtonText] = useState('Отправить');


    const items = ['ДА, С РАДОСТЬЮ БУДУ', 'НЕТ, К СОЖАЛЕНИЮ, НЕ СМОГУ']
    const alc = ['ИГРИСТОЕ', 'ВИНО КРАСНОЕ', 'ВИНО БЕЛОЕ', 'ВОДКА', '"ПАПИН САМОГОН"', 'ВИСКИ']
    function handleusernameInput(e) {
        setusername(e.target.value)

    }
    function handlealergsInput(e) {
        alergsername(e.target.value)
    }
    function handleSubmit(e) {
        e.preventDefault()
        const data = `${username},    ${checked},     ${checked2},     ${alerg} `
        // const data = [username, checked, checked2, alerg]
        telegram({ data })
        setButtonText('Спасибо!');
    }

    return (
        <div className='location'>
            <div className='description_form_div'>
                <p className='description_form'>Дорогие гости, пожалуйста,
                </p>
                <p className='description_form'>заполните эту анкету до
                </p>

                <p className='description_form_num'>20.08.24
                </p>
                <p className='description_form'>это не займет
                    много времени:
                </p>
            </div>
            <form className="form" onSubmit={handleSubmit}>
                <p className='description_form_in'>Ваше фамилия и имя:
                </p>
                <p className='description_form_in_l'>(первым укажите, пожалуйста, фамилию)
                </p>
                <input
                    className="input_name"
                    placeholder="Катюжанский Николай"
                    id="username"
                    name="username"
                    type="username"
                    value={username}
                    onChange={handleusernameInput}
                    required
                />
                <p className='description_form_in'>Будет ли у вас возможность посетить мероприятие?
                </p>

                <div className='radio_div'>
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

                    <p className='description_form_in'>Ваши предпочтения по алкоголю:
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
                </div>
                <p className='description_form_in_l2'>*ЕСЛИ У ВАС ЕСТЬ НЕПЕРЕНОСИМОСТЬ ИЛИ АЛЛЕРГИЧЕСКИЕ РЕАКЦИИ
                    НА КАКИЕ-ЛИБО ПРОДУКТЫ, НАПИШИТЕ НАМ, ПОЖАЛУЙСТА
                </p>
                <input
                    className="input_name"
                    placeholder="..."
                    id="description"
                    name="description"
                    type="alerg"
                    value={alerg}
                    onChange={handlealergsInput}
                />
                <button id="btn" className='popup__submit'>
                    {buttonText}
                </button>

            </form>
        </div>
    );
}

export default Form;

