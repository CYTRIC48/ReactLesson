import styles from "./Card.module.css";
import Pingvin from "../../public/images/pingviny.jpg";

export default function Card({ title, text, price }) {
  return (
    <div className={styles.card}>
      {/* <img className={styles.picture} src="/images/pingvin.jpg" alt="" /> */}
      <img className={styles.picture} src={Pingvin} alt="" />
      <h2>{title}</h2>
      <p>{text}</p>
      <p>{price} $</p>
      <button className={styles.btn}>Купить</button>
    </div>
  );
}
