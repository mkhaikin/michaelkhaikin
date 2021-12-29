import React from "react";
import { HeaderContainer, ImageBg, Title } from "./headerElems";

const Header = ({ title }) => {
  let pageTitle = title;
  return (
    <HeaderContainer className="Container">
      <ImageBg />
      <Title className="Title">
        <div className="title">
          <h2>{pageTitle}</h2>
          <div className="underline"></div>
        </div>
      </Title>
    </HeaderContainer>
  );
};

export default Header;
