import { useState } from 'react';
import './App.css';
import Header from './components/layout/Header';
import MenuOverlay from './components/layout/MenuOverlay';
import AboutPage from './components/pages/AboutPage';
import WorksPage from './components/pages/WorksPage';
import ContactPage from './components/pages/ContactPage';

function App() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  console.log('navbarOpen ===', navbarOpen);

  navbarOpen
    ? (document.body.style.position = 'fixed')
    : (document.body.style.position = '');

  return (
    <>
      <Header navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
      <MenuOverlay navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
      <AboutPage />
      <WorksPage />
      <ContactPage />
    </>
  );
}

export default App;
