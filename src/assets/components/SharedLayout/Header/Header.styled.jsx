import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: ${(p) => p.theme.primaryColor};
  width: 100%;
`;

export const StyledHeaderContainer = styled.div`
  max-width: 1200px;
  min-height: 72px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0 auto;
`;
