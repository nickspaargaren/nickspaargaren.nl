import React from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';

const StyledButton = styled.a`
  position: relative;
  display: inline-flex;
  line-height: 10px;
  background: #221e25;
  padding: 9px 12px 9px 11px;
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
  .icoon {
    margin: auto 2px auto 0;
  }
  .icoon svg {
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

interface ButtonProps {
  title: string;
  subtitle: string;
  icoon: any;
  url: string;
  external?: boolean;
}

const Button = ({title, subtitle, icoon, url, external}: ButtonProps) => {
  return (
    <>
      {external ? (
        <StyledButton href={url} rel="noopener noreferrer" target="_blank">
          <div className="icoon">{icoon}</div>
          <span>
            <strong>{title}</strong>
            {subtitle}
          </span>
        </StyledButton>
      ) : (
        <StyledButton as={Link} to={url} className="button">
          <div className="icoon">{icoon}</div>
          <span>
            <strong>{title}</strong>
            {subtitle}
          </span>
        </StyledButton>
      )}
    </>
  );
};

export default Button;
