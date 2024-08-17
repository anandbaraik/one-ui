import React from 'react'
import CodeSlice from "../CodeSlice/CodeSlice"
import Wrapper from "../Wrapper/Wrapper"
import styles from "./List.module.css"
const List = () => {
  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.list__header}>List</h1>
      <h2 className={styles.list__subHeader}>
        List component is used to list the product/items.
      </h2>

      {/* ---------------> */}
      <h1 className={styles.title}>Variants</h1>
      <p className={styles.about__title}>
        CSSENSE includes several list variants, each serving its own semantic
        purpose, with a few extras thrown in for more control.
      </p>
      <Wrapper styles={style}>
        <div className="ordered-list">
          <ol>
            <li>Car</li>
            <li>Bike</li>
            <li>Cycle</li>
          </ol>
        </div>
      </Wrapper>
      <p className={styles.copy__code__des}>
        To achieve the above lists, you need to follow the following code:
      </p>
      <CodeSlice
        code={`
        <div className="ordered-list">
          <ol>
            <li>Car</li>
            <li>Bike</li>
            <li>Cycle</li>
          </ol>
        </div>
        `}
      />
      {/* ---------------> */}

      {/* ---------------> */}
      <h1 className={styles.title}>Bullet List</h1>
      <p className={styles.about__title}>
        In this style, items will start with bullet.
      </p>
      <Wrapper styles={style}>
        <ul className="bullet-list">
          <li>Bullet Item 1</li>
          <li>Bullet Item 2</li>
          <li>Bullet Item 3</li>
          <li>Bullet Item 4</li>
        </ul>
      </Wrapper>
      <p className={styles.copy__code__des}>
        To achieve the above lists, you need to follow the following code:
      </p>
      <CodeSlice
        code={`
        <ul className="bullet-list">
          <li>Bullet Item 1</li>
          <li>Bullet Item 2</li>
          <li>Bullet Item 3</li>
          <li>Bullet Item 4</li>
        </ul>
        `}
      />
      {/* ---------------> */}
      {/* ---------------> */}
      <h1 className={styles.title}>Squared List</h1>
      <p className={styles.about__title}>
        In this predifined className list will start with sqaure dot.
      </p>
      <Wrapper styles={style}>
        <ul className="square-list">
          <li>Square Item 1</li>
          <li>Square Item 2</li>
          <li>Square Item 3</li>
          <li>Square Item 4</li>
        </ul>
      </Wrapper>
      <p className={styles.copy__code__des}>
        To achieve the above lists, you need to follow the following code:
      </p>
      <CodeSlice
        code={`
        <ul className="square-list">
          <li>Square Item 1</li>
          <li>Square Item 2</li>
          <li>Square Item 3</li>
          <li>Square Item 4</li>
        </ul>
        `}
      />
      {/* ---------------> */}
      {/* ---------------> */}
      <h1 className={styles.title}>Stacked List</h1>
      <p className={styles.about__title}>
        You can style your list more attractive by adding own images.
      </p>
      <Wrapper styles={style}>
        <ul className="img-list">
          <li>
            <img
              className="avatar"
              src="https://static.vecteezy.com/system/resources/previews/006/627/320/non_2x/beard-logo-illustration-barbershop-logo-template-haircut-men-vector.jpg"
              alt="img"
            />
            Hey, welcome to componently.
          </li>
        </ul>
      </Wrapper>
      <p className={styles.copy__code__des}>
        To achieve the above lists, you need to follow the following code:
      </p>
      <CodeSlice
        code={`
        <ul className="img-list">
          <li>
            <img className="avatar" src="url here" alt="img" />
            Hey, welcome to componently.
          </li>
        </ul>
        `}
      />
      {/* ---------------> */}
    </div>
  )
}

export default List