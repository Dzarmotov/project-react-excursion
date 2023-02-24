import React from "react";
import s from './routes.module.css'
import carOne from './carOne.jpg'
import carTwo from './carTwo.jpg'

const RoutesContent = () => {

    const levelData = {
        id: 1, basicLevel: 'Базовый', basicPrice: 'от 4000 ₽', basicTime: 'Время в пути: 1,5 - 2 часа', basicDistance: 'Расстояние: 20-25 км', basicComplexity: "Сложность: 5***",
        id: 2, advancedLevel: 'Расширенный', advancedPrice: 'от 16000 ₽', advancedTime: 'Время в пути: 6,8 часов', advancedDistance: 'Расстояние: 60 - 70 км', advancedComplexity: 'Сложность: 5***',
        id: 3, experienceLevel: 'Расширенный', experiencePrice: 'от 7000 ₽', experienceTime: 'Время в пути: 4 часа', experienceDistance: 'Расстояние: 40 - 50 км', experienceComplexity: 'Сложность: 5***'
    }


    const levelRoutes = {
        id: 1, routes: 'Маршрут', basicPlace: ' Смотровая - Родник - Камень Джигита - Адербиевка - Гора Нексис - -Грозовые Ворота - Шашлыки - Цыгельский водопад (чаша любви) - -Форсаж',
        id: 2, routes: 'Маршрут', advancedPlace: ' Смотровая - Родник - Камень Джигита - Адербиевка - Гора Нексис - -Грозовые Ворота - Шашлыки - Цыгельский водопад (чаша любви) - -Форсаж',
        id: 2, routes: 'Маршрут', experiencePlace: 'Форсаж - Голубая бухта – Заброшенная Тур База – Сухогруз Рио –- Форсаж'
    }


    return (
        <div className={s.fon}>
            <div className={s.container}>
                <h1 className={s.heding}>Наши маршруты</h1>
                <div className={s.wrap}>

                    <div className={s.content}>
                        <h2 key={levelData} className={s.subject}>{levelData.basicLevel}
                            <span className={s.price}>{levelData.basicPrice}</span>
                        </h2>
                        <p className={s.time}>{levelData.basicTime}</p>
                        <p className={s.distance}>{levelData.basicDistance}</p>
                        <p className={s.complexity}>{levelData.basicComplexity}</p>
                        <p className={s.title}>{levelRoutes.routes}</p>
                        <p className={s.subtitle}>{levelRoutes.basicPlace}
                        </p>
                        <a href="" className={s.link}>Подробнее</a>
                        <button className={s.btn}>Забронировать</button>
                    </div>

                    <ul className={s.listImg}>
                        <li >
                            <img src={carOne} />
                        </li>
                        <li>
                            <img src={carTwo} />
                        </li>
                    </ul>
               
               
                </div>
               
               
                <div className={s.wrap}>
               
                    <ul className={s.listImg}>
                        <li >
                            <img src={carOne} />
                        </li>
                        <li>
                            <img src={carTwo} />
                        </li>
                    </ul>
               
                    <div className={s.content}>
                        <h2 key={levelData} className={s.subject}>{levelData.advancedLevel}
                            <span className={s.price}>{levelData.advancedPrice}</span>
                        </h2>
                        <p className={s.time}>{levelData.advancedTime}</p>
                        <p className={s.distance}>{levelData.advancedDistance}</p>
                        <p className={s.complexity}>{levelData.advancedComplexity}</p>
                        <p className={s.title}>{levelRoutes.routes}</p>
                        <p className={s.subtitle}>{levelRoutes.advancedPlace}
                        </p>
                        <a href="" className={s.link}>Подробнее</a>
                        <button className={s.btn}>Забронировать</button>
                    </div>
                </div>
             
                <div className={s.wrap}>

                    <div className={s.content}>
                        <h2 key={levelData} className={s.subject}>{levelData.experienceLevel}
                            <span className={s.price}>{levelData.experiencePrice}</span>
                        </h2>
                        <p className={s.time}>{levelData.experienceTime}</p>
                        <p className={s.distance}>{levelData.experienceDistance}</p>
                        <p className={s.complexity}>{levelData.experienceComplexity}</p>
                        <p className={s.title}>{levelRoutes.routes}</p>
                        <p className={s.subtitle}>{levelRoutes.experiencePlace}
                        </p>
                        <a href="" className={s.link}>Подробнее</a>
                        <button className={s.btn}>Забронировать</button>
             
                    </div>

                    <ul className={s.listImg}>
                        <li >
                            <img src={carOne} />
                        </li>
                        <li>
                            <img src={carTwo} />
                        </li>
                    </ul>
               
                </div>
            </div>
        </div>
    )
}
export default RoutesContent;