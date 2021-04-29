import React from 'react';

import './Pages.sass';

const MainPage = () => {
    return(
        <div className="page-container">
            <div className="main-page">
                <h1>Добро пожаловать</h1>
                <p>Вас приветствует приложение StarDB</p>
                <p>Погрузитесь в незабываемый мир Star Wars</p>
                <p>Приложение использует API https://swapi.dev/api и https://starwars-visualguide.com/assets/img/</p>
                <p>Вы можете переходить по ссылкам в шапке сайта и читать про героев, планеты и корабли вселенной StarWars</p>
            </div>
        </div>
    );
}

export default MainPage;