import React from 'react'
import style from "./Wrapper.module.css"
const Wrapper = ({children, styles}) => {
  return (
    <div className={style.component__display} style={styles}>
        {children}
    </div>
  )
}

export default Wrapper