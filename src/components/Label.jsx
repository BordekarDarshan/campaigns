import React from "react";
import { styled } from "styled-components";

function Label({ linkid, text = "" }) {
  return <LabelWrapper htmlFor={linkid}>{text}</LabelWrapper>;
}

const LabelWrapper = styled.label`
  margin-bottom: 1rem;
  font-weight: 600;
`;

export default Label;
