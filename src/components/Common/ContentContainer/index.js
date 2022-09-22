import React from "react";
import { ContentContainer } from "./styled";

const Container = ({ paddingLeft, paddingRight, children, widthc }) => {
  return (
    <ContentContainer
      paddingLeft={paddingLeft}
      paddingRight={paddingRight}
      widthc={widthc}
    >
      {children}
    </ContentContainer>
  );
};

export default Container;
