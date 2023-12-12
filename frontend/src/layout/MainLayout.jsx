import React, { useState } from "react";
import Header from "../component/Layout/Header/Header";
import Footer from "../component/Layout/Footer/Footer";
import Proptypes from "prop-types";
import Search from "../component/Modals/Search/Search";
import Dialog from "../component/Modals/Dialog/Dialog";

const MainLayout = ({ children }) => {
  const [isSearchShow, setIsSearchShow] = useState(false);
  const [isDialogShow, setIsDialogShow] = useState(true);
  return (
    <div className="main-layout">
      <Dialog  isDialogShow={isDialogShow} setIsDialogShow={setIsDialogShow} />
      <Search isSearchShow={isSearchShow}  setIsSearchShow={setIsSearchShow}/>
      <Header setIsSearchShow={setIsSearchShow} />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;

MainLayout.propTypes = {
  children: Proptypes.node,
};
