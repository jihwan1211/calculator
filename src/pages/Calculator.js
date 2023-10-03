import React, { useState } from "react";
import styled from "styled-components";

import PageLayout from "./PageLayout";
// mui
import Grid from "@mui/material/Grid";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    const allowKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "*", "/"];

    if (allowKeys.indexOf(e.nativeEvent.data) === -1) e.preventDefault();
    else setInput(input + e.nativeEvent.data);
    console.log(input);
  };

  const handleNumClicked = (e) => {
    // console.log(e.target.innerText);
    setInput(input + e.target.innerText);
  };

  console.log(input);
  return (
    <PageLayout>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Input onInput={handleInput} value={input} autoFocus></Input>
        </Grid>
        {/*  */}
        <StyledBtnWrapper item xs={3}>
          <StyledBtn>CE</StyledBtn>
        </StyledBtnWrapper>
        <StyledBtnWrapper item xs={3}>
          <StyledBtn>{"("}</StyledBtn>
        </StyledBtnWrapper>
        <StyledBtnWrapper item xs={3}>
          <StyledBtn>{")"}</StyledBtn>
        </StyledBtnWrapper>
        <StyledBtnWrapper item xs={3}>
          <StyledBtn>X</StyledBtn>
        </StyledBtnWrapper>
        {/*  */}
        <StyledBtnWrapper item xs={3}>
          <StyledBtn onClick={handleNumClicked}>7</StyledBtn>
        </StyledBtnWrapper>
        <StyledBtnWrapper item xs={3}>
          <StyledBtn onClick={handleNumClicked}>8</StyledBtn>
        </StyledBtnWrapper>
        <StyledBtnWrapper item xs={3}>
          <StyledBtn onClick={handleNumClicked}>9</StyledBtn>
        </StyledBtnWrapper>
        <StyledBtnWrapper item xs={3}>
          <StyledBtn>/</StyledBtn>
        </StyledBtnWrapper>
        {/*  */}
        <StyledBtnWrapper item xs={3}>
          <StyledBtn onClick={handleNumClicked}>4</StyledBtn>
        </StyledBtnWrapper>
        <StyledBtnWrapper item xs={3}>
          <StyledBtn onClick={handleNumClicked}>5</StyledBtn>
        </StyledBtnWrapper>
        <StyledBtnWrapper item xs={3}>
          <StyledBtn onClick={handleNumClicked}>6</StyledBtn>
        </StyledBtnWrapper>
        <StyledBtnWrapper item xs={3}>
          <StyledBtn>-</StyledBtn>
        </StyledBtnWrapper>
        {/*  */}
        <StyledBtnWrapper item xs={3}>
          <StyledBtn onClick={handleNumClicked}>1</StyledBtn>
        </StyledBtnWrapper>
        <StyledBtnWrapper item xs={3}>
          <StyledBtn onClick={handleNumClicked}>2</StyledBtn>
        </StyledBtnWrapper>
        <StyledBtnWrapper item xs={3}>
          <StyledBtn onClick={handleNumClicked}>3</StyledBtn>
        </StyledBtnWrapper>
        <StyledBtnWrapper item xs={3}>
          <StyledBtn>+</StyledBtn>
        </StyledBtnWrapper>
        {/*  */}
        <StyledBtnWrapper item xs={3}>
          <StyledBtn>.</StyledBtn>
        </StyledBtnWrapper>
        <StyledBtnWrapper item xs={3}>
          <StyledBtn onClick={handleNumClicked}>0</StyledBtn>
        </StyledBtnWrapper>
        <StyledBtnWrapper item xs={3}>
          <StyledBtn onClick={handleNumClicked}>3</StyledBtn>
        </StyledBtnWrapper>
        <StyledBtnWrapper item xs={3}>
          <StyledBtn>=</StyledBtn>
        </StyledBtnWrapper>
      </Grid>
    </PageLayout>
  );
};

const Input = styled.input`
  width: 100%;
  height: 40px;
  font-size: 1.6rem;
  text-align: right;
  border-radius: 12px;
  &:focus {
    caret-color: transparent; /* 깜박임 제거 */
    outline: 0;
    border: 3px solid #042d69;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;

const StyledBtnWrapper = styled(Grid)`
  width: 100px;
  height: 75px;
`;

const StyledBtn = styled.button`
  width: 100%;
  height: 100%;
  border: 1px solid grey;
  cursor: pointer;
  border-radius: 4px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
`;

export default Calculator;
