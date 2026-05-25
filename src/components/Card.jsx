import styles from "./Card.module.css";

export default function Card({ title, text, price }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{text}</p>
      <p>{price} $</p>
      <button className={styles.btn}>Купить</button>
    </div>
  );
}
