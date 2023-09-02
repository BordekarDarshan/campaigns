import React from "react";
import { styled } from "styled-components";

function NoDataFound() {
  return (
    <EmptyWrapper>
      <h3>No Campaigns found</h3>
    </EmptyWrapper>
  );
}

const EmptyWrapper = styled.div`
  height: 627px;
  background-color: #fff;
  grid-column: 1/7;
  color: var(--textColor);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default NoDataFound;
