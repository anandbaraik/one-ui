import React from 'react'
import CodeSlice from "../CodeSlice/CodeSlice"
import Wrapper from '../Wrapper/Wrapper'
import styles from "./Avatar.module.css"
const Avatar = () => {
  return (
    <div>
      <div className={styles.container}>
        <h1 className={styles.title}>Avatar</h1>
        <h2 className={styles.description}>
          The Avatar component is used to represent a user, and displays the
          profile picture, initials or fallback icon.
        </h2>
        <h1 className={styles.title}>Profile Avatar</h1>
        <p className={styles.description}>
          CSSENSE includes Profile avatar to save our time use default avatar
        </p>
        <Wrapper>
          <img
            src="https://github.com/anandbaraik/one-ui/assets/31516195/f4e0b139-f3dd-4709-8ab6-d9bbb1a11688"
            className="avatar"
          />
        </Wrapper>
			<p className={styles.details}>
			To achieve the above buttons, you need to follow the following code:
			</p>
        <CodeSlice
          code={`<img src="/img/anand.jpg" className="avatar"/>`}
        />
        <h1 className={styles.title}>Avatar With Sizes</h1>
        <p className={styles.description}>
          We have pre defined some avatar of a specific size
        </p>
        <Wrapper>
          <img
            src="https://github.com/anandbaraik/one-ui/assets/31516195/f4e0b139-f3dd-4709-8ab6-d9bbb1a11688"
            className="avatar-sm"
          />
          <img
            src="https://github.com/anandbaraik/one-ui/assets/31516195/f4e0b139-f3dd-4709-8ab6-d9bbb1a11688"
            className="avatar-md"
          />
          <img
            src="https://github.com/anandbaraik/one-ui/assets/31516195/f4e0b139-f3dd-4709-8ab6-d9bbb1a11688"
            className="avatar-lg"
          />
          <img
            src="https://github.com/anandbaraik/one-ui/assets/31516195/f4e0b139-f3dd-4709-8ab6-d9bbb1a11688"
            className="avatar"
          />
        </Wrapper>
        <p>
          To achieve the above avatar, you need to follow the following code:
        </p>
        <CodeSlice
          code={`
            	< -- small size avatar -->
			<img src="/img/anand.jpg" className="avatar-sm"/>
				< -- medium size avatar -->
			<img src="/img/anand.jpg" className="avatar-md"/>
				< -- large avatar -->
			<img src="/img/anand.jpg" className="avatar-lg"/>
				< -- default avatar -->
			<img src="/img/anand.jpg" className="avatar"/>
        `}
        />
      </div>
    </div>
  )
}

export default Avatar