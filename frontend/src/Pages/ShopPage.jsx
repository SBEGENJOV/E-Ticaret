import { Fragment } from 'react'
import Category from "../Category/Category";
import Product from "../Product/Product";
import CampaignSingle from "../CampaignSingle/CampaignSingle";

const ShopPage = () => {
  return (
    <Fragment>
        <Category />
        <Product />
        <CampaignSingle />
        <Product />
    </Fragment>
  )
}

export default ShopPage