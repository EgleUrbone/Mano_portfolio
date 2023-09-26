import css from './Header.module.css';

export default function Header({ navbarOpen, setNavbarOpen }) {
  return (
    <div className={css.container} id='home'>
      <header className={css.header}>
        <nav className={css.nav}>
          <img className={css.logo} src='img/ManoLogo.svg' alt='logoEU'></img>
          <img
            onClick={() => setNavbarOpen(!navbarOpen)}
            className={`${css.icon} ${
              navbarOpen ? css.iconOpen : css.iconClose
            }`}
            src={
              navbarOpen
                ? '/img/plus-large-svgrepo-com.svg'
                : '/img/plus-large-svgrepo-com (1).svg'
            }
            alt='icon'
          ></img>
        </nav>
        <div className={css.intro}>
          <h1
            className={css.mainLine}
          >{`Hello! I'm Eglė. I'm working on becoming a front-end developer`}</h1>
        </div>
      </header>
    </div>
  );
}
