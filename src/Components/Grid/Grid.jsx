import React from 'react'
import styles from "./Grid.module.css"
import Wrapper from "../Wrapper/Wrapper"
import CodeSlice from "../CodeSlice/CodeSlice"
const Grid = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.grid__header}>Grid</h1>
      <h2 className={styles.grid__subHeader}>
        Grid allows us to organize web app in structured manner
      </h2>

      {/* ---------------> */}
      <h1 className={styles.title}>Variants</h1>
      <p className={styles.about__title}>
        CSSENSE includes several grid variants, each serving its own semantic
        purpose, with a few extras thrown in for more control.
      </p>
      <Wrapper>
        <div className="grid grid-2">
          <div className="grid-item ">Item 1 </div>
          <div className="grid-item ">Item 2 </div>
        </div>
      </Wrapper>
      <p className={styles.copy__code__des}>
        To achieve the above grids, you need to follow the following code:
      </p>
      <CodeSlice
        code={`
        <div className="grid grid-2">
          <div className="grid-item">Item 1 </div>
          <div className="grid-item">Item 2 </div>
        </div>
        `}
      />
      {/* ---------------> */}

      {/* ---------------> */}
      <h1 className={styles.title}>3x3 Grid</h1>
      <p className={styles.about__title}>
        This is the 3x3 Grid, which is used to align 3 items in row.
      </p>
      <Wrapper>
        <div className="grid grid-3">
          <div className="grid-item">Item 1 </div>
          <div className="grid-item">Item 2 </div>
          <div className="grid-item">Item 3 </div>
        </div>
      </Wrapper>
      <p className={styles.copy__code__des}>
        To achieve the above grids, you need to follow the following code:
      </p>
      <CodeSlice
        code={`
        <div className="grid grid-3">
          <div className="grid-item">Item 1 </div>
          <div className="grid-item">Item 2 </div>
          <div className="grid-item">Item 3 </div>
        </div>
        `}
      />
      {/* ---------------> */}
      {/* ---------------> */}
      <h1 className={styles.title}>Auto-Fit Grid</h1>
      <p className={styles.about__title}>
        This is the Auto-Fit Grid, which is used to align items in row according
        to screen size.
      </p>
      <Wrapper>
        <div className="grid-auto-fit">
          <div className="grid-item">Item 1 </div>
          <div className="grid-item">Item 2 </div>
          <div className="grid-item">Item 3 </div>
        </div>
      </Wrapper>
      <p className={styles.copy__code__des}>
        To achieve the above grids, you need to follow the following code:
      </p>
      <CodeSlice
        code={`
        <div className="grid-auto-fit">
          <div className="grid-item">Item 1 </div>
          <div className="grid-item">Item 2 </div>
          <div className="grid-item">Item 3 </div>
        </div>
        `}
      />
      {/* ---------------> */}
    </div>
  )
}

export default Grid