import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: ${(p) => p.theme.primaryColor};
  width: 100%;
  min-height: 56px;
`;

export const StyledFooterContainer = styled.div`
  padding: 0 36px;
  max-width: 1100px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
