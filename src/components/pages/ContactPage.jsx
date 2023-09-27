import css from './ContactPage.module.css';

export default function ContactPage() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <section id='contact' className={css.contactSection}>
      <div className={css.contactInfo}>
        <h2 className={css.contactTitle}>Contact me</h2>
        <ul className={css.contactList}>
          <li
            onClick={() => (window.location = 'mailto:urboneegle@gmail.com')}
            className={css.listItem}
          >
            <img
              className={css.contactIcon}
              src='/img/email-mail-svgrepo-com.svg'
              alt='emailIcon'
            ></img>
            <p className={css.liText}>urboneegle@gmail.com</p>
          </li>
          <li className={css.listItem}>
            <a
              href={'https://www.linkedin.com/in/egle-urbone-eu/'}
              target='_blank'
              rel='noreferrer'
              className={css.tag}
            >
              <img
                className={css.contactIcon}
                src='/img/linked-in-logo-of-two-letters-svgrepo-com.svg'
                alt='emailIcon'
              ></img>
              <p className={css.liText}>/egle-urbone-eu</p>
            </a>
          </li>
          <li className={css.listItemNoPointer}>
            <img
              className={css.contactIcon}
              src='/img/mobile-button-svgrepo-com.svg'
              alt='emailIcon'
            ></img>
            <p className={css.liText}>+370 67474748</p>
          </li>
        </ul>
      </div>
      <button className={css.up} onClick={scrollToTop}>
        <img
          className={css.arrowUp}
          src='/img/arrow-up.svg'
          alt='arrow-up'
        />{' '}
      </button>
    </section>
  );
}
