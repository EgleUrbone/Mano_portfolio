import css from './Works.module.css';
import SingleWorkObject from '../SingleWorkObject';
import { works } from './data';

export default function WorksPage() {
  return (
    <section id='works' className={css.worksSection}>
      <div className={css.workText}>
        <h2 className={css.worksTitle}>Works</h2>
        {works.map((wObj) => (
          <SingleWorkObject key={wObj.id} {...wObj} />
        ))}
      </div>
      <div className={css.gradientBg}>
        <div className={css.gradientContainter}>
          <div className={css.g1}></div>
          <div className={css.g2}></div>
          <div className={css.g3}></div>
          <div className={css.g4}></div>
          <div className={css.g5}></div>
        </div>
      </div>
    </section>
  );
}
