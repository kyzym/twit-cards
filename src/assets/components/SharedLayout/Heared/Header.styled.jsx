import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${(p) => p.theme.primaryColor};
  width: 100%;
  min-height: 72px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
