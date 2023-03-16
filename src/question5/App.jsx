// 5. Navbar 3p
// Skapa en navbar med titeln "Company name" längst till vänster och
// Länkarna Home, Blog, About och Contact. längst till höger.
// Vid mobil-vy ska länkarna gömmas och istället visas en hamburger-meny-knapp.
// När man klickar på knappen ska menyn med länkarna visas i
// en kolumn efter varandra vertikalt.
// När man klickar igen ska länkarna gömmas.

import { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from 'react-icons/rx';

const links = [

  {
    link: '/',
    title: 'Home'
  },
  {
    link: '/',
    title: 'Blog'
  },
  {
    link: '/',
    title: 'About'
  },
  {
    link: '/',
    title: 'Contact'
  },

];

const MenuLink = ({ link, title }) => {

  return <li><Link to={link} className='hover:underline'>{title}</Link></li>;

}

function App() {

  const [mobileMenu, setMobileMenu] = useState(false);

  return <div>
    <header className="bg-slate-600 text-slate-200 h-36 p-4 flex justify-between">
      <h1 className="text-slate-200 text-5xl">Company Name</h1>
      <nav>
        <ul className="hidden md:flex gap-4">
          {links.map((link) => <MenuLink link={link.link} title={link.title} />)}
        </ul>
        <RxHamburgerMenu className="md:hidden text-xl cursor-pointer" onClick={() => setMobileMenu(!mobileMenu)} />

      </nav>
    </header>
    {mobileMenu && <ul className="flex flex-col items-center md:hidden gap-4 bg-slate-500 text-slate-200 p-4">
      {links.map((link) => <MenuLink link={link.link} title={link.title} />)}
    </ul>}
  </div>;
}

export default App;
