import React from 'react'
import {MENUS} from "../../Utils/Util"
import { NavLink } from 'react-router-dom';
import styles from "./SidebarMenu.module.css";
const SidebarMenu = () => {
  return (
    <div className={styles.sideBarContainer}>
        <div>
            <h1 className={styles.menuHeader}>
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-book" width="35"  viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                    <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />
                    <path d="M3 6l0 13" />
                    <path d="M12 6l0 13" />
                    <path d="M21 6l0 13" />
                </svg>
                Getting started
            </h1>
            <NavLink
                to="/docs/getting-started"
                className={({ isActive }) =>
                isActive
                    ? styles.linkActive
                    : styles.menuLink
                }
            >
                Introduction
            </NavLink>
        </div>
        <h1 className={styles.menuHeader}>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-list-details" width="35" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M13 5h8" />
                <path d="M13 9h5" />
                <path d="M13 15h8" />
                <path d="M13 19h5" />
                <path d="M3 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
                <path d="M3 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
            </svg>
            Components
        </h1>
        <div className={styles.menuList}>
            {MENUS?.map((menu) => {
                return (
                <NavLink
                    to={menu.path}
                    key={menu.id}
                    className={({ isActive }) =>
                    isActive
                        ? styles.linkActive
                        : styles.menuLink
                    }
                >
                    {menu.name}
                </NavLink>
                );
            })}
        </div>
    </div>
  )
}

export default SidebarMenu