import Link from 'next/link';

import css from './Navbar.scss';

const Navbar = () => (
  <div className={css.navbar}>
    <ul>
      <li><Link href="/"><a>Home</a></Link></li>
      <li><Link href="/about"><a>About</a></Link></li>
    </ul>
  </div>
);

export default Navbar;
