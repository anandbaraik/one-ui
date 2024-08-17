import React from 'react'
import styles from "./Button.module.css"
import CodeSlice from "../CodeSlice/CodeSlice"
import Wrapper from "../Wrapper/Wrapper"
const Button = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Button</h1>
      <p className={styles.description}>
        The Button component is used to trigger an action or event, such as
        submitting a form, opening a dialog, canceling an action, or performing
        a delete operation.
      </p>
      <h1 className={styles.title}>Primary Buttons</h1>
      <p className={styles.description}>
        CSSENSE includes several button variants, each serving its own semantic
        purpose, with a few extras thrown in for more control.
      </p>
      <Wrapper>
        <button className="btn">Default</button>
        <button className="btn btn-primary">Primary</button>
        <button className="btn btn-secondary">Secondary</button>
        <button className="btn btn-success">Success</button>
        <button className="btn btn-warning">Warning</button>
        <button className="btn btn-danger">Danger</button>
        <button className="btn btn-info">Info</button>
        <button className="btn btn-light">Light</button>
        <button className="btn btn-dark">Dark</button>
      </Wrapper>
      <p className={styles.description}>
        To achieve the above buttons, you need to follow the following code:
      </p>
      <CodeSlice
        code={`
                < -- For Default Button -->
        <button className="btn">Default</button>
                < -- For Primary Button -->
        <button className="btn btn-primary">Primary</button>
                < -- For Secondary Button -->
        <button className="btn btn-secondary">Secondary</button>
                < -- For Success Button -->
        <button className="btn btn-success">Success</button>
                < -- For Warning Button -->
        <button className="btn btn-warning">Warning</button>
                < -- For Danger Button -->
        <button className="btn btn-danger">Danger</button>
                < -- For Info Button -->
        <button className="btn btn-info">Info</button>
                < -- For Light Button -->
        <button className="btn btn-light">Light</button>
                < -- For Dark Button -->
        <button className="btn btn-dark">Dark</button>
        `}
      />
      <h1 className={styles.title}>Outline buttons </h1>
      <p className={styles.description}>
        In need of a button, but not the hefty background colors they bring?
        Replace the default modifier classNamees with the .btn-outline-* ones to
        remove all background images and colors on any button.
      </p>
      <Wrapper>
        <button type="button" className="btn btn-outline-primary">
          Primary
        </button>
        <button type="button" className="btn btn-outline-secondary">
          Secondary
        </button>
        <button type="button" className="btn btn-outline-success">
          Success
        </button>
        <button type="button" className="btn btn-outline-danger">
          Danger
        </button>
        <button type="button" className="btn btn-outline-warning">
          Warning
        </button>
        <button type="button" className="btn btn-outline-info">
          Info
        </button>
        <button type="button" className="btn btn-outline-light">
          Light
        </button>
        <button type="button" className="btn btn-outline-dark">
          Dark
        </button>
      </Wrapper>
      <p className={styles.description}>
        To achieve the above buttons, you need to follow the following code:
      </p>
      <CodeSlice
        code={`
                < -- For Primary Outline Button -->
        <button className="btn btn-outline-primary">Primary</button>
                < -- For Secondary Outline Button -->
        <button className="btn btn-outline-secondary">Secondary</button>
                < -- For Success Outline Button -->
        <button className="btn btn-outline-success">Success</button>
                < -- For Warning Outline Button -->
        <button className="btn btn-outline-danger">Warning</button>
                < -- For Danger Outline Button -->
        <button className="btn btn-outline-warning">Danger</button>
                < -- For Info Outline Button -->
        <button className="btn btn-outline-info">Info</button>
                < -- For Light Outline Button -->
        <button className="btn btn-outline-light">Light</button>
                < -- For Dark Outline Button -->
        <button className="btn btn-outline-dark">Dark</button>
        `}
      />
      <h1 className={styles.title}>Link Button</h1>
      <p className={styles.description}>
        Button with link is used to link from one page to another. here href is
        used to link to another page.
      </p>
      <Wrapper>
        <a href="/docs/button" type="button" className="btn btn-primary">
          Primary
        </a>
        <a href="/docs/button" type="button" className="btn btn-success">
          Success
        </a>
        <a href="/docs/button" type="button" className="btn btn-warning">
          Warning
        </a>
        <a href="/docs/button" type="button" className="btn btn-dark">
          Dark
        </a>
      </Wrapper>
      <p className={styles.description}>
        To achieve the above buttons, you need to follow the following code:
      </p>
      <CodeSlice
        code={`
                < -- For Link Primary Button -->
        <a href="/docs/button" type="button" className="btn btn-primary">Primary</a>
                < -- For Link Success Button -->
        <a href="/docs/button" type="button" className="btn btn-success">Success</a>
                < -- For Link Warning Button -->
        <a href="/docs/button" type="button" className="btn btn-warning">Warning</a>
                < -- For Link Dark Button -->
        <a href="/docs/button" type="button" className="btn btn-dark">Dark</a>
        `}
      />
      <h1 className={styles.title}>Icon Button</h1>
      <p className={styles.description}>
        You can use Icons in your Buttons respectively.
      </p>
      <Wrapper>
        <button href="/docs/button" type="button" className="btn btn-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-airplane-engines-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8 0c-.787 0-1.292.592-1.572 1.151A4.347 4.347 0 0 0 6 3v3.691l-2 1V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.191l-1.17.585A1.5 1.5 0 0 0 0 10.618V12a.5.5 0 0 0 .582.493l1.631-.272.313.937a.5.5 0 0 0 .948 0l.405-1.214 2.21-.369.375 2.253-1.318 1.318A.5.5 0 0 0 5.5 16h5a.5.5 0 0 0 .354-.854l-1.318-1.318.375-2.253 2.21.369.405 1.214a.5.5 0 0 0 .948 0l.313-.937 1.63.272A.5.5 0 0 0 16 12v-1.382a1.5 1.5 0 0 0-.83-1.342L14 8.691V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v.191l-2-1V3c0-.568-.14-1.271-.428-1.849C9.292.591 8.787 0 8 0Z" />
          </svg>
          Primary
        </button>
        <button href="/docs/button" type="button" className="btn btn-success">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-brightness-alt-high-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3zm8 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zm-13.5.5a.5.5 0 0 0 0-1h-2a.5.5 0 0 0 0 1h2zm11.157-6.157a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm-9.9 2.121a.5.5 0 0 0 .707-.707L3.05 5.343a.5.5 0 1 0-.707.707l1.414 1.414zM8 7a4 4 0 0 0-4 4 .5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5 4 4 0 0 0-4-4z" />
          </svg>
          Success
        </button>
        <button href="/docs/button" type="button" className="btn btn-warning">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-exclamation-octagon"
            viewBox="0 0 16 16"
          >
            <path d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353L4.54.146zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1H5.1z" />
            <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
          </svg>
          Warning
        </button>
        <button href="/docs/button" type="button" className="btn btn-dark">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-info-lg"
            viewBox="0 0 16 16"
          >
            <path d="m9.708 6.075-3.024.379-.108.502.595.108c.387.093.464.232.38.619l-.975 4.577c-.255 1.183.14 1.74 1.067 1.74.72 0 1.554-.332 1.933-.789l.116-.549c-.263.232-.65.325-.905.325-.363 0-.494-.255-.402-.704l1.323-6.208Zm.091-2.755a1.32 1.32 0 1 1-2.64 0 1.32 1.32 0 0 1 2.64 0Z" />
          </svg>
          Dark
        </button>
      </Wrapper>
      <p className={styles.description}>
        To achieve the above buttons, you need to follow the following code dont
        forget to replace svg tag in button tag with your own svg tag. you can
        use any svg,icons,img in button tag:
      </p>
      <CodeSlice
        code={`
                < -- For icon Primary Button -->
        <a href="/docs/button" type="button" className="btn btn-primary">
          <svg/> Primary
        </a>
                < -- For icon Success Button -->
        <a href="/docs/button" type="button" className="btn btn-success">
          <svg/> Success
        </a>
                < -- For icon Warning Button -->
        <a href="/docs/button" type="button" className="btn btn-warning">
        <svg/> Warning
        </a>
                < -- For icon Dark Button -->
        <a href="/docs/button" type="button" className="btn btn-dark">
          <svg/> Dark
        </a>
        `}
      />
      <h1 className={styles.title}>Floating Action Button</h1>
      <p className={styles.description}>
        Fancy larger or smaller buttons? Add .btn-lg or .btn-sm for additional
        sizes.
      </p>
      <Wrapper>
      <button href="/docs/button" type="button" className="btn btn-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-airplane-engines-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8 0c-.787 0-1.292.592-1.572 1.151A4.347 4.347 0 0 0 6 3v3.691l-2 1V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.191l-1.17.585A1.5 1.5 0 0 0 0 10.618V12a.5.5 0 0 0 .582.493l1.631-.272.313.937a.5.5 0 0 0 .948 0l.405-1.214 2.21-.369.375 2.253-1.318 1.318A.5.5 0 0 0 5.5 16h5a.5.5 0 0 0 .354-.854l-1.318-1.318.375-2.253 2.21.369.405 1.214a.5.5 0 0 0 .948 0l.313-.937 1.63.272A.5.5 0 0 0 16 12v-1.382a1.5 1.5 0 0 0-.83-1.342L14 8.691V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v.191l-2-1V3c0-.568-.14-1.271-.428-1.849C9.292.591 8.787 0 8 0Z" />
          </svg>
        </button>
        <button href="/docs/button" type="button" className="btn btn-success">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-brightness-alt-high-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3zm8 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zm-13.5.5a.5.5 0 0 0 0-1h-2a.5.5 0 0 0 0 1h2zm11.157-6.157a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm-9.9 2.121a.5.5 0 0 0 .707-.707L3.05 5.343a.5.5 0 1 0-.707.707l1.414 1.414zM8 7a4 4 0 0 0-4 4 .5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5 4 4 0 0 0-4-4z" />
          </svg>
        </button>
        <button href="/docs/button" type="button" className="btn btn-warning">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-exclamation-octagon"
            viewBox="0 0 16 16"
          >
            <path d="M4.54.146A.5.5 0 0 1 4.893 0h6.214a.5.5 0 0 1 .353.146l4.394 4.394a.5.5 0 0 1 .146.353v6.214a.5.5 0 0 1-.146.353l-4.394 4.394a.5.5 0 0 1-.353.146H4.893a.5.5 0 0 1-.353-.146L.146 11.46A.5.5 0 0 1 0 11.107V4.893a.5.5 0 0 1 .146-.353L4.54.146zM5.1 1 1 5.1v5.8L5.1 15h5.8l4.1-4.1V5.1L10.9 1H5.1z" />
            <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z" />
          </svg>
        </button>
        <button href="/docs/button" type="button" className="btn btn-dark">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-info-lg"
            viewBox="0 0 16 16"
          >
            <path d="m9.708 6.075-3.024.379-.108.502.595.108c.387.093.464.232.38.619l-.975 4.577c-.255 1.183.14 1.74 1.067 1.74.72 0 1.554-.332 1.933-.789l.116-.549c-.263.232-.65.325-.905.325-.363 0-.494-.255-.402-.704l1.323-6.208Zm.091-2.755a1.32 1.32 0 1 1-2.64 0 1.32 1.32 0 0 1 2.64 0Z" />
          </svg>
        </button>
      </Wrapper>
      <p className={styles.description}>
        To achieve the above buttons, you need to follow the following code:
      </p>
      <CodeSlice
        code={`
                < -- For Larger Size Primary Button -->
        <button className="btn btn-primary btn-lg">Primary</button>
                < -- For Larger Size Success Button -->
        <button className="btn btn-success btn-lg">Success</button>
                < -- For Larger Size Warning Button -->
        <button className="btn btn-warning btn-lg">Danger</button>
                < -- For Larger Size Dark Button -->
        <button className="btn btn-dark btn-lg">Dark</button>
        `}
      />

    </div>
  )
}

export default Button;