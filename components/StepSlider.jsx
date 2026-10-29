'use client'

import { useState } from 'react'
import styles from './StepSlider.module.css'

export default function StepSlider({ steps = [] }) {
  const [index, setIndex] = useState(0)
  const step = steps[index]
  if (!step) return null
  const last = steps.length - 1

  return (
    <div className={styles.wrap}>
      <div className={styles.dots}>
        {steps.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`${i + 1}단계로 이동`}
            className={i === index ? `${styles.dot} ${styles.active}` : styles.dot}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>

      <div className={styles.title}>{index + 1}. {step.title}</div>
      {step.text && <p className={styles.text}>{step.text}</p>}
      {step.image && <img className={styles.image} src={step.image} alt={step.title} />}

      <div className={styles.nav}>
        <button type="button" className={styles.btn} disabled={index === 0} onClick={() => setIndex(index - 1)}>
          ← 이전
        </button>
        <span className={styles.count}>{index + 1} / {steps.length}</span>
        <button type="button" className={styles.btn} disabled={index === last} onClick={() => setIndex(index + 1)}>
          다음 →
        </button>
      </div>
    </div>
  )
}