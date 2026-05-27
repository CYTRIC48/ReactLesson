import styles from "./Wrap.module.css";

export default function Wrap({ children, title }) {
  return (
    <div>
      <h2>{title}</h2>
      <hr />
      <div className={styles.block}>{children}</div>
    </div>
  );
}
