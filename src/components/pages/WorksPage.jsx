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
    </section>
  );
}
