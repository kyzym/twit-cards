import React from "react";

export const SocialLink = ({ Icon, url, ariaLabel }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      aria-label={ariaLabel}
      style={{ margin: "0 10px" }}
    >
      <Icon size={24} />
    </a>
  );
};
