import styled, { css } from "styled-components";

export const Label = styled.h1`
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.blue};
  font-weight: bold;
  white-space: pre;
`;

export const Text = styled.h1`
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.blue};
  ${({ weight }) =>
    weight &&
    css`
      font-weight: ${weight};
    `};
`;
