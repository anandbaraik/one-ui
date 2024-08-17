import React from 'react'
import { Link } from 'react-router-dom'
import CodeSlice from "../../Components/CodeSlice/CodeSlice"
import {MENUS} from "../../Utils/Util"
import styles from "./Home.module.css"
const Home = () => {
  return (
    <div className={styles.container}>
		<h1 className={styles.title}>Introduction</h1>
		<p className={styles.description}>
			OneUi is a good collection of components that makes it easier and faster to build websites. It helps you make your Dream Project quickly by focusing on how well things work, because we handle the designs for you.
		</p>
		<h1 className={styles.title}>Quick start</h1>
		<p className={styles.description}>
			Get started by including OneUi production-ready CSS and JavaScript via CDN without the need for any build steps. Simply add the following link in the head section of your webpage, before your project's stylesheets.
		</p>
		<CodeSlice code={`<link rel="stylesheet" href="https://oneui.vercel.app/Styles/main.css"/>`}
		/>
		<h1 className={styles.title}>OneUi CSS Components</h1>
		<hp className={styles.description}>
			All of our components have listed below-
			Explore the whole collection of UI components and interactive elements we have-
		</hp>
		<div className={styles.componentList}>
			{MENUS.map((menu) => (
				<Link to={menu.path} key={menu.id}>
				<button className={styles.btn__components}>{menu.name}</button>
				</Link>
			))}
		</div>
	</div>
  )
}

export default Home