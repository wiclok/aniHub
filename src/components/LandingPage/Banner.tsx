import { FC } from "react";
import styles from '../../styles/LandingPage.module.css';
import { List, Star, Calendar, Tv } from 'lucide-react';

export const Banner:FC = () => {

  const cards = [
    {
      icon: <List size={37} />,
      title: "Catálogo Extenso",
      description: "Explora nuestra amplia colección de anime de todos los géneros y épocas."
    },
    {
      icon: <Star size={37} />,
      title: "Perfil Personalizado",
      description: "Crea tu perfil, califica tus animes y comparte tus opiniones con la comunidad."
    },
    {
      icon: <Calendar size={37} />,
      title: "Calendario de Emisiones",
      description: "Mantente al día con los últimos estrenos y episodios de tus series favoritas",
    },
    {
      icon: <Tv size={37} />,
      title: "Recomendaciones Personalizadas",
      description: "Descubre nuevos animes basados en tus gustos y preferencias."
    }
  ]

  return (
    <>
      {cards.map((card, index) => (
        <div key={index}>
          <div className={styles.card}>
            <div className={styles.icon}>{card.icon}</div>
            <div className={styles.title}>{card.title}</div>
            <div className={styles.description}>{card.description}</div>
          </div>
        </div>
      ))
      }
    </>
  );
}
