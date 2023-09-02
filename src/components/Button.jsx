import React from "react";
import { Button } from "antd";
import { styled } from "styled-components";

function CustomButton({ type = "button", children, onClickHandler }) {
  return (
    <ButtonWrap htmlType={type} onClick={onClickHandler}>
      {children}
    </ButtonWrap>
  );
}

const ButtonWrap = styled(Button)`
  background-color: var(--buttonBackground);
  color: var(--buttonColor);
  height: 2.5rem;
  align-self: center;
  :hover {
    color: var(--buttonColor);
  }
`;

export default CustomButton;
