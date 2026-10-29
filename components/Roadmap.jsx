import styles from './Roadmap.module.css'

const STATUS = {
  done: { label: '완료', className: styles.done },
  doing: { label: '진행 중', className: styles.doing },
  planned: { label: '예정', className: styles.planned }
}

export default function Roadmap({ items = [] }) {
  return (
    <div className={styles.list}>
      {items.map((item, i) => {
        const s = STATUS[item.status] || STATUS.planned
        return (
          <div key={i} className={`${styles.item} ${s.className}`}>
            <span className={styles.dot} />
            <div className={styles.card}>
              <div className={styles.head}>
                <span className={styles.badge}>{s.label}</span>
                {item.version && <span className={styles.version}>{item.version}</span>}
              </div>
              <div className={styles.title}>{item.title}</div>
              {item.description && <div className={styles.desc}>{item.description}</div>}
            </div>
          </div>
        )
      })}
    </div>
  )
}