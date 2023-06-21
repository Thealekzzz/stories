import React from 'react';
import { Link } from 'react-router-dom';

import styles from "./Description.module.css";

const Description = () => {
  return (
    <div className={styles['container']}>
      <div className={styles['pageHead']}>
        <h1 className={styles['pageTitle']}>Тестовое задание "Новости"</h1>
        <ul className={styles['techs']}>
          <li className={styles['tech']}>React</li>
          <li className={styles['tech']}>CSS Modules</li>
        </ul>
      </div>

      <div className={styles['content']}>
        <h2 className={styles['sectionTitle']}>Предыстория</h2>
        <p className={styles['sectionText']}>
          Представим ситуацию: мы работаем над адаптивным веб-приложением и решили добавить в него функцию «новости» — что-то вроде stories в инстаграме, но ещё больше похоже на новости в мобильном клиенте тиньков-банка.
        </p>
        <p className={styles['sectionText']}>
        Новости представляют из себя общий список. При нажатии на одну из новостей открывается просмотрщик.
        </p>

        <p className={styles['sectionText']}>
          Каждая новость может состоять из нескольких частей. Вверху экрана показывается «прогресс-бар», где видно сколько всего частей и прогресс по времени. Каждая часть показывается пользователю в течении 5 секунд и после этого времени автоматически переходит на следующую. По окончании последней части начинается следующая новость
        </p>

        <p className={styles['sectionText']}>
        Backend разработчик сейчас в отпуске, но менеджер попросил вас сделать frontend-часть этой задачи, известно лишь то, что новости будут создаваться в некотором редакторе в админке, а клиент будет получать новости по API.
        </p>

        <h2 className={styles['sectionTitle']}>Что известно про новости?</h2>

        <ul>
          <li><p className={styles['sectionText']}>Каждая новость состоит из частей</p></li>
          <li><p className={styles['sectionText']}>Каждая часть новости может содержать</p>
            <ul>
              <li><p className={styles['sectionText']}>изображение</p></li>
              <li><p className={styles['sectionText']}>любой цвет фона</p></li>
              <li><p className={styles['sectionText']}>неограниченное количество блоков текста с их размером и позицией </p></li>
              <li><p className={styles['sectionText']}>Кнопку, при нажатии на которую открывается любой URL</p></li>
            </ul>
          </li>
        </ul>

        <h2 className={styles['sectionTitle']}>Задание</h2>

        <ol>
          <li><p className={styles['sectionText']}>Придумать, в каком формате сервер будет отдавать вам данные</p></li>
          <li><p className={styles['sectionText']}>Создать mock для API - представьте, что сервер отдаёт вам реальные данные.</p></li>
          <li><p className={styles['sectionText']}>Реализовать отображение списка новостей.</p></li>
          <li><p className={styles['sectionText']}>Реализовать просмотрщик.</p></li>
        </ol>

        <Link to="/" className={styles['button']}>Результат</Link>
      </div>


    </div>
  );
};

export default Description;