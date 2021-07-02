import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.a`
  position: relative;
  display: inline-flex;
  line-height: normal;
  background: #221e25;
  padding: 10px 12px 11px;
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px inset;
  color: #fff;
  font-size: 15px;
  font-weight: bold;
  text-decoration: none;
  margin: 0 10px 10px 0;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    color: #fff;
  }

  .icoon {
    margin: auto 2px auto 0;
  }
  .icoon svg {
    margin: 0;
  }
`;
const StyledPrimaryButton = styled(StyledButton)`
  background: #009bff;

  &:hover {
    background: #0c7ecf;
  }
`;

interface ButtonProps {
  title: string;
  icoon?: any;
  url: string;
  primary?: boolean;
}

const ButtonGroot = (props: ButtonProps) => {
  const {title, icoon, url, primary} = props;
  if (primary) {
    return (
      <StyledPrimaryButton href={url}>
        <div className="icoon">{icoon}</div>
        <span>{title}</span>
      </StyledPrimaryButton>
    );
  } else {
    return (
      <StyledButton href={url}>
        <div className="icoon">{icoon}</div>
        <span>{title}</span>
      </StyledButton>
    );
  }
};

export default ButtonGroot;
