
function Location() {
    return (
        <div className='location'>

            <p className='description_location'>РЕСТОРАН <span className="description_location_bold">"Bellagio"</span></p>
            <p className='description_location'>Г. КРАСНОДАР, КАРАСУНСКИЙ ОКРУГ,</p>
            <p className='description_location'>УЛ САДОВАЯ 1\1</p>
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Ac364ec6c1c5a6deeff92328e03a5304a3d3230dc9af082343a9021014d3c3848&amp;source=constructor" width="390" height="349" frameBorder="0" className='map'></iframe>
            <div className='w'>
                <a className='button_location' href="https://yandex.ru/maps/-/CDW44Z7W" target="_blank">Проложить маршрут</a>
            </div>
        </div>
    );
}

export default Location;
