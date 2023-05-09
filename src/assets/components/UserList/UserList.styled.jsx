import styled from 'styled-components';

export const StyledUserList = styled.ul`
  max-width: 1195px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 26px;

  @media screen and(max-width: 785px) {
    flex-direction: column;
    align-items: center;
  }
`;
