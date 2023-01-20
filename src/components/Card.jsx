import styles from "../components/Card.module.css";

function Card({name, gender, onClose, species, image}) {
   return (
      <div className={styles.card}>
         <button onClick={onClose}>X</button>
         <h2 className={styles.cardH2s}>{name}</h2>
         <h2 className={styles.cardH2s}>{species}</h2>
         <h2 className={styles.cardH2s}>{gender}</h2>
         <img  src={image} alt={name} />
      </div>
   );
}

export default Card;
