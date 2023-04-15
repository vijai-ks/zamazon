import React from "react";
import bannerImage from "../assets/bannerImage.jpg";
import trackpant from "../assets/trackpant.jpg";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img src={bannerImage} className="home__image" alt="Home Page Banner" />
      <div className="home__products">
        <Product
          id="1"
          title="Tockey Men Track Pant"
          price={200}
          rating={5}
          image={trackpant}
        />
        <Product
          id="1"
          title="Tockey Men Track Pant"
          price={200}
          rating={5}
          image={trackpant}
        />
        <Product
          id="1"
          title="Tockey Men Track Pant"
          price={200}
          rating={5}
          image={trackpant}
        />
        <Product
          id="1"
          title="Tockey Men Track Pant"
          price={200}
          rating={5}
          image={trackpant}
        />
      </div>
    </div>
  );
}

export default Home;
