import React from "react";
import bannerImage from "../assets/bannerImage.jpg";
function Home() {
  return (
    <div className="home">
      <img src={bannerImage} className="home__image" alt="Home Page Banner" />
    </div>
  );
}

export default Home;
