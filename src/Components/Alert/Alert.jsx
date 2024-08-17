import React from 'react'
import styles from "./Alert.module.css"
import Wrapper from "../Wrapper/Wrapper"
import CodeSlice from "../CodeSlice/CodeSlice"
const Alert = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Alert</h1>
      <p className={styles.description}>
        Alerts are used to communicate a state that affects a system, feature or
        page.
      </p>
      <h1 className={styles.title}>Variants</h1>
      <p className={styles.description}>
        CSSENSE includes several Alert variants, each serving its own semantic
        purpose, with a few extras thrown in for more control.
      </p>
      <Wrapper >
        <div className="alert">This is Primary alert message from Cssense.</div>
        <div className="alert alert-success">
          This is Success alert message from Cssense.
        </div>
        <div className="alert alert-danger">
          This is Danger alert message from Cssense.
        </div>
        <div className="alert alert-warning">
          This is Warning alert message from Cssense.
        </div>
        <div className="alert alert-info">
          This is Info alert message from Cssense.
        </div>
      </Wrapper>
      <p className={styles.description}>
        To achieve the above alerts, you need to follow the following code:
      </p>
      <CodeSlice
        code={`
		<div class="alert">This is Primary alert message from Cssense.</div>
		<div class="alert alert-success">This is Success alert message from Cssense.</div>
		<div class="alert alert-danger">This is Danger alert message from Cssense.</div>
		<div class="alert alert-warning">This is Warning alert message from Cssense.</div>
		<div class="alert alert-info">This is Info alert message from Cssense.</div>
        `}
      />
    </div>
  )
}

export default Alert