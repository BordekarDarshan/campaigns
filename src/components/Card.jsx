import React from "react";
import { styled } from "styled-components";
import { Box, alignEnd, alignSpace } from "../styling/Reusables";

function Card({ alignment, children }) {
  return <CardWrapper alignment={alignment}>{children}</CardWrapper>;
}

const CardWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
  ${Box}
  ${({ alignment }) => (alignment === "end" ? alignEnd : alignSpace)}
`;

export default Card;
