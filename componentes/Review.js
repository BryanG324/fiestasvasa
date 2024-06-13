
import React, { useState } from 'react';
import styles from '../styles/Review.module.css';

const reviews = [  
  {
    id: 1,
    name: 'Brayan Yair Hernandez Cervantes',
    job: 'Diseñador',
    birthday: '18 de Enero',
    img: '/images/icono.png',
    month: 'Enero'
  },
  {
    id: 2,
    name: 'Sofia Castelan',
    day: '19 de Febrero',
    job: 'Diseñador',
    birthday: '19 de Febrero',
    img: '/images/icono.png',
    month: 'Febrero'
  },
  {
    id: 3,
    name: 'Gael Cruz',
    job: 'Diseñador',
    birthday: '11 de Marzo',
    img: '/images/icono.png',
    month: 'Marzo'
  },
  {
    id: 4,
    name: 'Luis Cruz',
    job: 'Diseñador',
    birthday: '05 de Marzo',
    img: '/images/icono.png',
    month: 'Marzo'
  },
  {
    id: 5,
    name: 'Perla Pamela',
    job: 'Diseñador',
    birthday: '10 de Abril',
    img: '/images/icono.png',
    month: 'Abril'
  },
  {
    id: 6,
    name: 'Cristopher Jimenez',
    job: 'Diseñador',
    birthday: '09 de Mayo',
    img: '/images/icono.png',
    month: 'Mayo'
  },
  {
    id: 7,
    name: 'Toño Albarado',
    job: 'Diseñador',
    birthday: '25 de Junio',
    img: '/images/icono.png',
    month: 'Junio'
  },
  {
    id: 7,
    name: 'Pamela Gomez',
    job: 'Desarrollador',
    birthday: '28 de Junio',
    img: '/images/icono.png',
    month: 'Junio'
  },
  {
    id: 8,
    name: 'Perla Hernandez',
    job: 'Diseñador',
    birthday: '11 de Julio',
    img: '/images/icono.png',
    month: 'Julio'
  },
  {
    id: 9,
    name: 'Daniela Jimenez ',
    job: 'Diseñador',
    birthday: '24 de Agosto',
    img: '/images/icono.png',
    month: 'Agosto'
  },
  {
    id: 10,
    name: 'Omar Hernandez',
    job: 'Diseñador',
    birthday: '28 de Septiembre',
    img: '/images/icono.png',
    month: 'Septiembre'
  },
  {
    id: 11,
    name: 'Pamela Gomez',
    job: 'Diseñador',
    birthday: '22 de Octubre',
    img: '/images/icono.png',
    month: 'Octubre'
  },
  {
    id: 12,
    name: 'Elena Cervantes',
    job: 'Diseñador',
    birthday: '1 de Enero',
    img: '/images/icono.png',
    month: 'Noviembre'
  },
  {
    id: 13,
    name: 'Coral Cruz ',
    job: 'Diseñador',
    birthday: '1 de Enero',
    img: '/images/icono.png',
    month: 'Diciembre'
  },

];

const Review = () => {
  const [currentMonth, setCurrentMonth] = useState(reviews[0].month);
  const [currentItem, setCurrentItem] = useState(0);

  const showPerson = (month) => {
    setCurrentMonth(month);
    setCurrentItem(0);
  };

  const reviewsByMonth = reviews.filter(review => review.month === currentMonth);
  const { img, name, job, birthday} = reviewsByMonth[currentItem];

  return (
    <article className={styles.review}>
      <div className={styles.contenedor}>
      <h2 className={styles.texto}>Calendario de Cumpleaños</h2>
      <h2 className={styles.texto2}>Descubre que dia y que mes cumplen años tus compañeros de trabajo</h2>
      </div>
      <div className={styles.imgContainer}>
        <img src={img} alt={name} className={styles.personImg} />
      </div>
      <h4 className={styles.author}>{name}</h4>
      <p className={styles.job}>{job}</p>
      <p className={styles.author}>{birthday}</p>
      <div className={styles.buttonContainer}>
        <button className={styles.prevBtn} onClick={() => setCurrentItem((currentItem - 1 + reviewsByMonth.length) % reviewsByMonth.length)}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className={styles.nextBtn} onClick={() => setCurrentItem((currentItem + 1) % reviewsByMonth.length)}>
          <i className="fas fa-chevron-right"></i>
        </button>
      </div>
      <select className={styles.randomBtn} onChange={(e) => showPerson(e.target.value)}>
        {Array.from(new Set(reviews.map(review => review.month))).map((month, index) => (
          <option key={index} value={month}>
            {month}
          </option>
        ))}
      </select>
    </article>
  );
};

export default Review;
