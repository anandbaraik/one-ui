import React from 'react'
import styles from "./Navigation.module.css"
import {
  FaBarsStaggered,
  FaPrint,
  FaBookBookmark,
  FaDownload,
} from "react-icons/fa6";
import CodeSlice from "../CodeSlice/CodeSlice"
import Wrapper from "../Wrapper/Wrapper"
const Navigation = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.navigation__header}>Navigation</h1>
      <h2 className={styles.navigation__subHeader}>
        Navigation helps users of a website to easily access sections of a
        webpage or access completely different websites.
      </h2>
      <h2 className={styles.navigation__subHeader}>
        This is the default navigation bar from our component library. You are
        wellcome to add your own styles to it.
      </h2>

      <Wrapper>
        <div className="header_component">
          <div className="header_menu">
            <FaBarsStaggered className="icons" />
            <h1>neoG 23 Batch</h1>
          </div>
          <div className="header__btns">
            <FaDownload className="icons" />
            <FaPrint className="icons" />
            <FaBookBookmark className="icons" />
          </div>
        </div>
      </Wrapper>
      <p className={styles.copy__code__des}>
        To achieve the above navigations, you need to follow the following code:
      </p>
      <CodeSlice
        code={`
        <div className="header_component">
        <div className="header_menu">
          <i className="fa fa-bars" aria-hidden="true"></i>
          <h1>neoG 23 Batch</h1>
        </div>
        <div className="header__btns">
          <i className="fa fa-download" aria-hidden="true"></i>
          <i className="fa fa-print" aria-hidden="true"></i>
          <i className="fa fa-bookmark" aria-hidden="true"></i>
        </div>
        </div>
        `}
      />
      {/* ---------------> */}
    </div>
  )
}

export default Navigation