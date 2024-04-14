import React from 'react'
import styles from "./Welcome.module.css"
import { Link } from 'react-router-dom'
const Welcome = () => {
  return (
    <main className={styles['container']}>
		<h1 className={styles["heading"]}>
			One-UI : Elevate User Experiences
		</h1>
		<p className={styles['subheading']}>
			Experience the future of design with One-UI Component Library – where beauty meets functionality for seamless user experiences
		</p>
		<div className={styles['action']}>
			<Link to={'/components'}
				className={styles['btn btn-primary']}>
				Get started
			</Link>
			<a href="https://github.com/anandbaraik" target="_blank"
				rel="noopener noreferrer"
				className={styles['btn btn-outline-secondary']}>
				GitHub
			</a>
		</div>
    </main>
  )
}

export default Welcome