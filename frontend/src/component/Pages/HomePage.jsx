import React from "react";
import Slider from "../Slider/Slider";
import Category from "../Category/Category";
import Product from "../Product/Product";
import Campaigns from "../Campaigns/Campaigns";
import Blog from "../Blog/Blog";
import Brands from "../Brands/Brands";
import CampaignSingle from "../CampaignSingle/CampaignSingle";

const HomePage = () => {
    return (
      <React.Fragment>
        <Slider />
        <Category />
        <Product />
        <Campaigns />
        <Product />
        <Blog />
        <Brands />
        <CampaignSingle />
      </React.Fragment>
    );
  };
  
  export default HomePage;
