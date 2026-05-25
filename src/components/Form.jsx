import styles from "./Form.module.css";

export default function Form() {
  return (
    <form>
      <h2 className={styles.title}>заказ товаров</h2>
      <input type="text" placeholder="Название..." />
      <input type="number" placeholder="Количество..." />
      <button className={styles.btn}>Save...</button>
    </form>
  );
}
