import styled from "styled-components";
import { lighten } from "polished";
import BaseImage from "../Image/image";

export const Content = styled.div`
  color: ${({ theme }) => theme.colors.blue};
`;

export const Name = styled.h2`
  position: relative;
  font-size: 24px;
  color: ${({ theme }) => theme.colors.blue};
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => lighten(0.125, theme.colors.blue)};
    &:before {
      display: flex;
      content: "";
      position: absolute;
      height: 1px;
      width: 100%;
      background: ${({ theme }) => lighten(0.125, theme.colors.blue)};
      bottom: -2px;
    }
  }
`;

export const Image = styled(BaseImage)``;
