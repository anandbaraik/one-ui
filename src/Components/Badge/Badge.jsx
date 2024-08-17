import React from 'react'
import styles from "./Badge.module.css"
import CodeSlice from "../CodeSlice/CodeSlice"
import Wrapper from "../Wrapper/Wrapper"
const Badge = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Badge</h1>
      <p className={styles.description}>
        Badges are used to highlight an item's status for quick recognition.
      </p>
      <h1 className={styles.title}>Avatar Badge</h1>
      <p className={styles.description}>
        CSSENSE includes several badges variants, each serving its own semantic
        purpose, with a few extras thrown in for more control.
      </p>
      <Wrapper >
        <div className="badge">
          <img
            src="https://github.com/anandbaraik/one-ui/assets/31516195/64ef54cc-9e10-4d08-a751-004d0653a3f8"
            className="avatar"
          />
          <div className="online"></div>
        </div>
        <div className="badge">
          <img
            src="https://github.com/anandbaraik/one-ui/assets/31516195/64ef54cc-9e10-4d08-a751-004d0653a3f8"
            className="avatar"
            alt=""
          />
          <div className="offline"></div>
        </div>
        <div className="badge">
          <img
            src="https://github.com/anandbaraik/one-ui/assets/31516195/64ef54cc-9e10-4d08-a751-004d0653a3f8"
            className="avatar"
            alt=""
          />
          <div className="dnd"></div>
        </div>
		<div className="badge">
          <img
            src="https://github.com/anandbaraik/one-ui/assets/31516195/64ef54cc-9e10-4d08-a751-004d0653a3f8"
            className="avatar"
          />
          <div className="number">1</div>
        </div>
      </Wrapper>
      <p className={styles.description}>
        To achieve the above badgess, you need to follow the following code:
      </p>
      <CodeSlice
        code={`
        <div class="badge">
          <img src="./img/anand.png" class="avatar"/>
          <div class="online"></div>
        </div>
        <div class="badge">
          <img src="./img/anand.png" class="avatar"/>
          <div class="offline"></div>
        </div>
        <div class="badge">
          <img src="./img/anand.png" class="avatar"/>
          <div class="dnd"></div>
        </div>
		<div class="badge">
          <img src="./img/anand.png" class="avatar"/>
          <div class="number"></div>
        </div>
        `}
      />
      <h1 className={styles.title}>Icon badges</h1>
      <p className={styles.description}>
        Icon Badge is used to show the quantity on the top of the svg/image.
      </p>
      <Wrapper >
	  	<div className="badge">
          	<button className='btn'>Hello</button>
          <div className="number">1</div>
        </div>
      </Wrapper>
      <p className={styles.description}>
        To achieve the above badgess, you need to follow the following code:
      </p>
      <CodeSlice
        code={`
		<div className="badge">
				<button className='btn'>Hello</button>
			<div className="number">1</div>
		</div>
        `}
      />
      {/* ---------------> */}
    </div>
  )
}

export default Badge