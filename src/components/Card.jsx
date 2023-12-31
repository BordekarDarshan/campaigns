import React from "react";
import { styled } from "styled-components";
import { Box, alignEnd, alignSpace } from "../styling/Reusables";

function Card({ alignment = "space", children }) {
  return <CardWrapper alignment={alignment}>{children}</CardWrapper>;
}

const CardWrapper = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  padding: 1rem;
  ${Box}
  ${({ alignment }) => (alignment === "end" ? alignEnd : alignSpace)}

  >.header {
    font-weight: 500;
  }
`;

export default Card;
