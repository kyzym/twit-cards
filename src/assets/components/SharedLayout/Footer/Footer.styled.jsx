import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: ${(p) => p.theme.primaryColor};
  width: 100%;
  min-height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
