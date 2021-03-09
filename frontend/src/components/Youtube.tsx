import React from 'react';
import styled from 'styled-components';


const StyledYoutube = styled.div`
    position: relative;
    padding-bottom: 56.25%;
    padding-top: 0;
    height: 0;
    border-radius: 3px;
    overflow: hidden;
    background: #fff;
    line-height: 0;
    box-shadow: 0 6px 35px -9px rgb(0 0 0 / 40%);
    z-index: 1;
    background: #f3f3f3;
    width: 100%;

    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
      border: 0;
    }
`;

interface Props {
  url: string
}

const Youtube: React.FC<Props> = ({url}) => (
  <StyledYoutube>
    <iframe src={url} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"></iframe>
  </StyledYoutube>
)


export default Youtube