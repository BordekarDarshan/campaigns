import React from "react";
import { Button } from "antd";
import { styled } from "styled-components";

function CustomButton({ type = "button", children }) {
  return <ButtonWrap htmlType={type}>{children}</ButtonWrap>;
}

const ButtonWrap = styled(Button)`
  background-color: var(--buttonBackground);
  color: var(--buttonColor);
`;

export default CustomButton;
