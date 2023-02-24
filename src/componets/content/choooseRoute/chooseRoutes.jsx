import React from "react";
import s from './chooseRoute.module.css'


const ChooseRoute = () => {
    return (
        <div className={s.chooseContent}>
            <div className={s.container}>
                <div className={s.wrap}>
                    <div className={s.content}>
                        <h2 className={s.title}>Затрудняетесь выбрать маршрут?</h2>
                        <p className={s.subtitle}>Пройдите тест и мы поможем вам подобрать оптимальную под вас экскурсию</p>
                        <button className={s.btn}>Начать тест</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ChooseRoute;