import { Link } from "gatsby";
import React, { ReactElement } from "react";
import styled from "styled-components";

const StyledButton = styled.a`
  position: relative;
  display: inline-flex;
  line-height: 10px;
  background: #221e25;
  padding: 7px 12px 7px 10px;
  border-radius: 3px;
  transition: 0.3s all ease;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px inset;
  color: #fff;
  text-decoration: none;
  text-align: left;
  margin: 0 10px 10px 0;

  &:hover {
    background: #221e25;
    color: #fff;
  }

  strong {
    display: block;
  }
  .icon {
    margin: auto 4px auto 0;
  }
  .icon svg {
    margin: 0;
  }
  span {
    display: inline-block;
    margin: auto 0 auto 5px;
    position: relative;
    text-transform: uppercase;
    font-size: 8px;
    white-space: nowrap;
  }
  span strong {
    font-size: 10px;
    opacity: 0.9;
    letter-spacing: 0.15px;
  }
`;

type ButtonType = {
  title: string;
  subtitle: string;
  icon: ReactElement;
  url: string;
  ariaLabel?: string;
  external?: boolean;
};

const Button = ({
  title,
  subtitle,
  icon,
  url,
  ariaLabel,
  external,
}: ButtonType): ReactElement => (
  <>
    {external ? (
      <StyledButton
        href={url}
        rel="noopener noreferrer"
        target="_blank"
        aria-label={ariaLabel}
      >
        <div className="icon">{icon}</div>
        <span>
          <strong>{title}</strong>
          {subtitle}
        </span>
      </StyledButton>
    ) : (
      <StyledButton
        as={Link}
        to={url}
        className="button"
        aria-label={ariaLabel}
      >
        <div className="icon">{icon}</div>
        <span>
          <strong>{title}</strong>
          {subtitle}
        </span>
      </StyledButton>
    )}
  </>
);

export default Button;
