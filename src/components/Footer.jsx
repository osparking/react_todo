import styles from "./footer.module.css";

export default function Footer({ completedCount, totalCount }) {
  return (
    <div className={styles.footer}>
      <span className={styles.item}>완료된 일 : {completedCount} 건</span>
      <span className={styles.item}>전체 일 : {totalCount} 건</span>
    </div>
  );
}
