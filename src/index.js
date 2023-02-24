import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import icontree from './icon-tree.svg'
import iconbike from './icon-bike.svg'
import iconhelmet from './icon-helmet.svg'
import iconinstructor from './icon-instructor.svg'
import styles from './componets/main/section-column.module.css'


const sectionColumnData = [
  { id: 1, heading: 'Увлекательные экскурсии', title: 'Маршруты от лесных дорожек до полного бездорожья!', icon: icontree },
  { id: 2, heading: 'Надежная техника', title: '18 квадроциклов всех японских брендов', icon: iconbike },
  { id: 3, heading: 'Экипировка бесплатно', title: 'Необходимая экипировка выдается бесплатно', icon: iconhelmet },
  { id: 4, heading: 'Опытные инструктора', title: 'Обеспечат полную безопасность Вашего отдыха', icon: iconinstructor },
]

const sectionColumn = sectionColumnData.map(column =>
  <div key={column.id} className={styles.sectionColumnContent}>
    <img src={column.icon}></img>
    <h2 className={styles.columnTitle}>
      {column.heading}
    </h2>
    <p className={styles.columnSubtitle}>
      {column.title}
    </p>
  </div>
)

let ContentData = {
  'heading': 'Экскурсии на квадроциклах в Геленджике',
  'title': ' Приезжайте за новыми приключениями и эмоцими',
  'btn': 'Подобрать маршрут'
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App state={sectionColumn} content={ContentData} />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
