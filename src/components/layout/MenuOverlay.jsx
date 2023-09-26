import { HashLink as Link } from 'react-router-hash-link';
import css from './MenuOverlay.module.css';

export default function MenuOverlay({ navbarOpen, setNavbarOpen }) {


  return (
    <nav className={`${css.nav} ${navbarOpen ? css.open : css.closed}`}>
      <ul className={css.unlisted}>
        {/* <li>
          <Link to={'/'}
            onClick={() => {
              setNavbarOpen(false);
            }}
            href='/'
          >
            Home
          </Link>
        </li> */}
        <li>
          <Link
            to='#about'
            onClick={() => {
              setNavbarOpen(false);
            }}
            className={css.liItem}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to='#works'
            onClick={() => {
              setNavbarOpen(false);
            }}
            className={css.liItem}
          >
            Works
          </Link>
        </li>
        <li>
          <Link
            to='#contact'
            onClick={() => {
              setNavbarOpen(false);
            }}
            className={css.liItem}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
