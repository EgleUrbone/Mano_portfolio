import css from './About.module.css';

export default function AboutPage() {
  return (
    <section className={css.about} id='about'>
      <div className={css.aboutTextCont}>
        <h2 className={css.aboutTitle}>About</h2>
        <p className={css.aboutText}>My name is Eglė Urbonė. </p>
        <p className={css.aboutText}>
          I just finished my Front-End Serverless course at Code Academy and I
          am hooked. I am determined to learn, get all the information that I
          can to one day become the best at what I do.
        </p>
        <a href='/img/ManoCV-en.pdf' target="_blank">My RESUME</a>
      </div>
    </section>
  );
}
