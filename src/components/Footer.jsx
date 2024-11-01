import styles from './footer.module.css'

export default function Footer({completedCount}) {
    return <div className={styles.footer}>
        <span>완료된 일 : {completedCount} 건</span>
    </div>
}