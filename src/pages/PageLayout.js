import React from "react";
import styled from "styled-components";

// mui
import Container from "@mui/material/Container";

const PageLayout = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

const StyledContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1024px;
  height: 100vh;
  /* background-color: red; */
`;
export default PageLayout;
