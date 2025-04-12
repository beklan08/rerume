import React from "react";
import profile from "../assets/face.jpg";

const Header = () => {
  return (
    <>
      <header className="moniker">
        <h1 className="prog">(Програмист)</h1>
        <div className="conte">
          <h1 className="monicker">тилеков бекжан</h1>
        </div>
        <div className="line"></div>
      </header>
      <footer>
        <div className="persona">
          <div className="person">
            <img className="face" src={profile} alt="" />
            <div className="data">
              <p>Тилеков Бекжан </p>
              <p>Телефон: +999 706 959 185</p>
              {/* <p>адрес: Ала-Мышык 4/614</p> */}
              <p>tilekovdekjan999@gmail.com</p>
              <p>Frontend - разработчик</p>
            </div>
          </div>
          <div className="skill">
            <h1>Личные качества</h1>
            <p>1. Любознательность</p>
            <p>2. Упорство </p>
            <p>3. Внимательность к деталям</p>
            <p>4. Самоорганизация</p>
            <p>5. Коммуникабельность</p>
            <p>6. Терпение</p>
            <h1>Навыки</h1>
            <p>-html</p>
            <p>-css</p>
            <p>-javaScript</p>
            <p>-react</p>
            <p>-git</p>
          </div>
        </div>
        <div className="info">
          <h1 className="h1">Обо мне</h1>
          <p>
            Я — начинающий frontend-разработчик, с 1 сентебря 2024 года изучаю
            веб-разработку в №99 лицее при Президенте. Активно развиваюсь в
            сфере создания современных пользовательских интерфейсов. Уже владею
            ключевыми технологиями фронтенда: HTML, CSS, JavaScript, а также
            React и системой контроля версий Git. Постоянно совершенствую
            навыки, работаю над собственными проектами и стремлюсь стать сильным
            специалистом в области frontend-разработки.
          </p>
          <h1 className="h1">Образование</h1>
          <p>
            Образование Средняя школа №96, г. Бишкек, район Ак-Ордо Сентябрь
            2014 — Май 2025 Полное среднее образование За годы учёбы проявил
            активность и интерес к точным наукам, особенно к информационным
            технологиям. Именно здесь начался мой путь в программировании,
            который я продолжаю развивать в профильном учебном заведении.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Header;
