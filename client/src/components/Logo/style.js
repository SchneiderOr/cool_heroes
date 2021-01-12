import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 30px;
  color: ${({ theme }) => theme.colors.b30};
`;
