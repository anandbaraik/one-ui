import React from 'react'
import styles from "./Card.module.css"
import CodeSlice from "../CodeSlice/CodeSlice"
import Wrapper from "../Wrapper/Wrapper"
import { GiTireIronCross } from "react-icons/gi";
import { BsHeartFill } from "react-icons/bs";
const Card = () => {
  const style = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  return (
    <div className={styles.container}>
      <h1 className={styles.card__header}>Card</h1>
      <h2 className={styles.card__subHeader}>
        Cards are the container that display content on a topic.
      </h2>

      {/* ---------------> */}
      <h1 className={styles.title}>Variants</h1>
      <p className={styles.about__title}>
        CSSENSE includes several card variants, each serving its own semantic
        purpose, with a few extras thrown in for more control.
      </p>
      <Wrapper styles={style}>
        <div className="card">
          <h1>Hello World!</h1>
          <p>This is paragraph.</p>
        </div>
      </Wrapper>
      <p className={styles.copy__code__des}>
        This is the basic card component which is having a fixed dimension value
        of 200x200px.
      </p>
      <p className={styles.copy__code__des}>
        To achieve the above cards, you need to follow the following code:
      </p>
      <CodeSlice
        code={`
        <div className="card">
          <h1>Hello World!</h1>
          <p>This is paragraph.</p>
        </div>
        `}
      />
      {/* ---------------> */}

      {/* ---------------> */}
      <h1 className={styles.title}>Images Cards</h1>
      <p className={styles.about__title}>
        The className = "round-img" is having default value of border-radius of
        50% explicitly.
      </p>
      <Wrapper styles={style}>
        <div className="card-img">
          <img src="https://wallpapercave.com/wp/wp8904202.jpg" alt="coding" />
          <div className="card_data">
            <h1>Hello World </h1>
            <p>This is paragraph.</p>
          </div>
        </div>
      </Wrapper>
      <p className={styles.copy__code__des}>
        To achieve the above cards, you need to follow the following code:
      </p>
      <CodeSlice
        code={`
        <div className="card-img">
          <img src="url of the image" alt="coding" />
          <div className="card_data">
            <h1>Hello World </h1>
            <p>This is paragraph.</p>
          </div>
        </div>
        `}
      />
      {/* ---------------> */}
      {/* ---------------> */}
      <h1 className={styles.title}>Card with Dismiss</h1>
      <p className={styles.about__title}>
        Card with Dismiss will help you to close the dialog/popup message.
      </p>
      <Wrapper styles={style}>
        <div className="card-dismiss">
          <div className="card_header">
            <GiTireIronCross />
          </div>
          <div className="card-data">
            <h1>This is Card with Dismiss</h1>
          </div>
        </div>
      </Wrapper>
      <p className={styles.copy__code__des}>
        To achieve the above cards, you need to follow the following code:
      </p>
      <CodeSlice
        code={`
        <div className="card-dismiss">
          <div className="card_header">
            <GiTireIronCross />
          </div>
          <div className="card-data">
            <h1>This is Card with Dismiss</h1>
          </div>
        </div>
        `}
      />
      {/* ---------------> */}
      {/* ---------------> */}
      <h1 className={styles.title}>Ecommerce Card</h1>
      <p className={styles.about__title}>
        Ecommerce component will help you to list your products on your web
        page.
      </p>
      <Wrapper styles={style}>
        <div className="card ecom">
          <div className="product-image">
            <img
              src="https://rukminim2.flixcart.com/image/850/1000/xif0q/cases-covers/back-cover/m/z/y/i-phone-14-pro-kumar-trading-original-imagmarrzrmztb4d.jpeg?q=20"
              alt="card-pic"
            />
          </div>
          <div className="card-badge">NEW</div>
          <button className="ico">
            <BsHeartFill
              style={{
                width: "1.5rem",
                height: "1.5rem",
                fill: "red",
                color: "red",
              }}
            />
          </button>
          <div className="card-title">Apple</div>
          <div className="card-text">Iphone 15 Pro Max</div>
          <div className="card-price">
            <span className="price-now"> Rs. 12,0000 </span>
            <span className="price-before"> Rs. 150,000 </span>
            <span className="discount"> (22% OFF) </span>
          </div>
          <button className="btn btn-primary">ADD TO CART</button>
        </div>
      </Wrapper>
      <p className={styles.copy__code__des}>
        To achieve the above cards, you need to follow the following code:
      </p>
      <CodeSlice
        code={`
        <div className="card ecom">
          <div className="product-image">
            <img src="url of the image" alt="card-pic"/>
          </div>
          <div className="card-badge">NEW</div>
          <button className="ico">
            <BsHeartFill fill="red" />
          </button>
          <div className="card-title">Apple</div>
          <div className="card-text">Iphone 15 Pro Max</div>
          <div className="card-price">
            <span className="price-now"> Rs. 12,0000 </span>
            <span className="price-before"> Rs. 15,0000 </span>
            <span className="discount"> (22% OFF) </span>
          </div>
          <button className="btn btn-primary">ADD TO CART</button>
        </div>
        `}
      />
      {/* ---------------> */}
    </div>
  )
}

export default Card