import { css } from "styled-components";

export const Box = css`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 0px,
    rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;
  border-radius: 5px;
  background-color: var(--cardBackground);
`;

export const alignEnd = css`
  justify-content: end;
  @media (max-width: 468px) {
    flex-direction: column;
  }
`;

export const alignSpace = css`
  justify-content: space-between;
`;
