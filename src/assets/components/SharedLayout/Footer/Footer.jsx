import React from "react";
import { StyledFooter } from "./Footer.styled";
import { SocialLink } from "../../buttons/SocialButton/SocialButton";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <StyledFooter>
      <h5>2023 Denys Kyzym 😉</h5>

      <div>
        <SocialLink
          Icon={FaGithub}
          url="https://github.com/kyzym?tab=repositories"
          ariaLabel="Github profile"
        />
        <SocialLink
          Icon={FaLinkedin}
          url="https://www.linkedin.com/in/denys-kyzym/"
          ariaLabel="LinkedIn profile"
        />
      </div>
    </StyledFooter>
  );
};
