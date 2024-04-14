import React from 'react';
import styles from "./Navbar.module.css";
import { Link, NavLink } from 'react-router-dom';
const Navbar = () => {
  return (
    <header className={styles.navContainer}>
		<nav className={styles.nav}>
			<div className={styles.navLeft}>
				<h1>
					<Link to={'/'}>
						OneUI
					</Link>
				</h1>
			</div>
			<div className={styles.navRight}>
				<ul className={styles.navItems}>
					<li className={styles.navItem}>
						<NavLink to={'/docs/getting-started'}>
							Documentation
						</NavLink>
					</li>
					<li className={styles.navItem}>
						<a href='https://github.com/anandbaraik' target='_blank'>
							Github
						</a>
					</li>
				</ul>
			</div>
		</nav>
    </header>
  )
}

export default Navbar;