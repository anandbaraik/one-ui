import React from 'react'
import SidebarMenu from '../../Components/SidebarMenu/SidebarMenu';
import styles from "./DocLayout.module.css";
const DocLayout = ({children}) => {
  return (
    <div className={styles.layoutContainer}>
      <div className={styles.sideBarMenuCntainer}>
        <SidebarMenu />
      </div>
      <div className={styles.mainDocContainer}>
        {children}
      </div>
    </div>
  )
}

export default DocLayout