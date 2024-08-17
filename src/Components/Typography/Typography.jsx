import React from 'react'
import styles from "./Typography.module.css"
import CodeSlice from "../CodeSlice/CodeSlice"
import Wrapper from "../Wrapper/Wrapper"
const Typography = () => {
  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.text__header}>Typography</h1>
      <h2 className={styles.text__subHeader}>
        Text component is the used to render text and paragraphs within an
        interface. Our default text color is black.
      </h2>

      {/* ---------------> */}
      <h1 className={styles.title}>Variants</h1>
      <p className={styles.about__title}>
        CSSENSE includes several text variants, each serving its own semantic
        purpose, with a few extras thrown in for more control.
      </p>
      <Wrapper styles={style}>
        <h1 className="master">Hello World</h1>
        <h2 className="submaster">Hello World</h2>
        <h3 className="miniheading">Hello World</h3>
        <h4 className="subminiheading">Hello World</h4>
        <h5 className="hyphenate">Hello World</h5>
        <h6 className="subhyphenate">Hello World</h6>
      </Wrapper>
      <p className={styles.copy__code__des}>
        To achieve the above texts, you need to follow the following code:
      </p>
      <CodeSlice
        code={`
        <h1 className="master">Hello World</h1>
        <h2 className="submaster">Hello World</h2>
        <h3 className="miniheading">Hello World</h3>
        <h4 className="subminiheading">Hello World</h4>
        <h5 className="hyphenate">Hello World</h5>
        <h6 className="subhyphenate">Hello World</h6>
        `}
      />
      {/* ---------------> */}

      {/* ---------------> */}
      <h1 className={styles.title}>Text with Different Color</h1>
      <p className={styles.about__title}>
        We have pre defined some Sizes for the texts.
      </p>
      <Wrapper styles={style}>
        <h1 className="text-cyan">Hello World</h1>
        <h2 className="text-red">Hello World</h2>
        <h3 className="text-green">Hello World</h3>
        <h4 className="text-yellow">Hello World</h4>
        <h5 className="text-gray">Hello World</h5>
        <h6 className="text-blue">Hello World</h6>
      </Wrapper>
      <p className={styles.copy__code__des}>
        To achieve the above texts, you need to follow the following code:
      </p>
      <CodeSlice
        code={`
        <h1 className="text-cyan">Hello World</h1>
        <h2 className="text-red">Hello World</h2>
        <h3 className="text-green">Hello World</h3>
        <h4 className="text-yellow">Hello World</h4>
        <h5 className="text-gray">Hello World</h5>
        <h6 className="text-blue">Hello World</h6>
        `}
      />
      {/* ---------------> */}
      {/* ---------------> */}
      <h1 className={styles.title}>Centered text</h1>
      <p className={styles.about__title}>
        We have predefined the aligned the text property as center.
      </p>
      <Wrapper styles={style}>
        <div className="text-centered">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas
            corrupti deserunt, illum aspernatur eum reiciendis veritatis ipsum
            asperiores quos consectetur! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Similique fugit, architecto provident dignissimos,
            officiis tenetur harum impedit saepe repellendus tempora numquam
            ipsum sunt ipsa sed, laborum nihil explicabo! Sint architecto enim
            mollitia illo dolores minima reiciendis recusandae eligendi, eius
            accusantium laboriosam placeat impedit nisi nemo cupiditate.
            Officiis ipsam deleniti officia.
          </p>
        </div>
      </Wrapper>
      <p className={styles.copy__code__des}>
        To achieve the above texts, you need to follow the following code:
      </p>
      <CodeSlice
        code={`
        <div className="text-centered">
          <p> text...</p>
        </div>
        `}
      />
      {/* ---------------> */}
      {/* ---------------> */}
      <h1 className={styles.title}>Text with Styling</h1>
      <p className={styles.about__title}>
        We have predefined some style/tranformation of the texts.
      </p>
      <Wrapper styles={style}>
        <p className="text-underline">This is Underlined Text.</p>
        <p className="text-cross">This is line-through Text.</p>
        <p className="text-highlight">This is Highlighted Text.</p>
        <p className="text-italic">This is italic Text.</p>
      </Wrapper>
      <p className={styles.copy__code__des}>
        To achieve the above texts, you need to follow the following code:
      </p>
      <CodeSlice
        code={`
        <div className="text-centered">
          <p> text...</p>
        </div>
        `}
      />
      {/* ---------------> */}
    </div>
  )
}

export default Typography