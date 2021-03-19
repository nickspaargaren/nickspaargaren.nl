import React from 'react';
import { Link } from "gatsby"
import styled from 'styled-components';

const StyledButton = styled.a`

  position: relative;
  display: inline-flex;
  line-height: 10px;
  background: #221e25;
  padding: 5px 8px 5px 7px;
  border-radius: 3px;
  transition: .3s all ease;
  box-shadow: rgba(0, 0, 0, .1) 0px 1px 2px 0px inset;
  color: #fff;
  text-decoration: none;
  margin: 0 10px 10px 0;


:hover {background: #221e25; color: #fff;}

 strong {display: block;}
 svg {margin: auto 0;}
 span {
  display: inline-block;
  margin: auto 0 auto 5px;
  position: relative;
  text-transform: uppercase;
  font-size: 8px;
  white-space: nowrap;
}
 span strong {font-size: 10px; opacity: .9; letter-spacing: .15px;}

`;

interface Props {
  title: string,
  subtitle: string,
  icoon: any,
  url: string,
  external?: boolean
}

const Button: React.FC<Props> = ({title, subtitle, icoon, url, external}) => {

  return (
          <>
          {external ?
            <StyledButton href={url} rel="noopener noreferrer" target="_blank">
                {icoon}
                <span>
                  <strong>{title}</strong>
                  {subtitle}
                </span>
              </StyledButton>
              :
              <Link to={url} className="button">
                {icoon}
                <span>
                  <strong>{title}</strong>
                  {subtitle}
                </span>
              </Link>
              }
            </>
            
          
  )

}

export default Button