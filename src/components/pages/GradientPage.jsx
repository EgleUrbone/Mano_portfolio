
import css from './GradientPage.module.css';

export default function GradientPage() {
  return (
    <div className={css.gradientBg}>
      <div className={css.gradientContainter}>
        <div className={css.g1}></div>
        <div className={css.g2}></div>
        <div className={css.g3}></div>
        <div className={css.g4}></div>
        <div className={css.g5}></div>
      </div>
    </div>
  )
}
