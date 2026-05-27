import styles from "./Card.module.css";


export default function Card({ img = '/error.png', title = "нет название", text = "нет текста", price = "нет цены" }) {
  return (
    <div className={styles.card}>
      <img src={styles.img} alt={title} />
      <h2>{title}</h2>
      <p>{text}</p>
      <p>{price} $</p>
      <button style={styles.button}>Купить</button>
    </div>
  );
}
