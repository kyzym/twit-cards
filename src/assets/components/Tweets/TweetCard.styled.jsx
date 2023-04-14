import styled from "styled-components";

export const StyledCardContainer = styled.div`
  background: ${(p) => p.theme.cardBgGradient};
  width: 380px;
  height: 460px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;

  box-shadow: ${(p) => p.theme.cardShadow};

  &::before {
    content: "";
    background: ${(p) => p.theme.lineBgColor};
    box-shadow: ${(p) => p.theme.lineShadow};
    width: 100%;
    height: 8px;
    position: absolute;
    top: 47%;
    left: 0;
    transform: translateY(-50%);
  }
`;

export const StyledStats = styled.p`
  color: ${(p) => p.theme.primaryColor};
  text-transform: uppercase;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
`;

export const StyledStatsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 16px;
  margin-top: auto;
`;

export const StyledLogo = styled.img`
  width: 76px;
  height: 22px;
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const BackgroundImg = styled.img`
  width: 308px;
  height: 168px;
  margin-top: 28px;
`;

export const StyledUserCircle = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;
  left: 50%;
  top: 47%;
  transform: translate(-50%, -50%);
  background: ${(p) => p.theme.primaryColor};
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: ${(p) => p.theme.lineShadow};
`;

export const StyledUserImageContainer = styled.div`
  width: 62px;
  height: 62px;
  border-radius: 50%;
  background-color: ${(p) => p.theme.circleBgColor};
`;

export const StyledAvatar = styled.img`
  height: 100%;
  width: 100%;
`;
