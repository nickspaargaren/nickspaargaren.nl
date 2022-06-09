import React, { ReactElement } from "react";
import styled from "styled-components";

const StyledYoutube = styled.iframe`
  aspect-ratio: 16/9;
  border: 0;
  border-radius: 3px;
  box-shadow: 0 6px 35px -9px rgb(0 0 0 / 40%);
  background: #f3f3f3;
  width: 100%;
`;

type YoutubeType = {
  title: string;
  url: string;
};

const Youtube = ({ title, url }: YoutubeType): ReactElement => (
  <StyledYoutube
    title={title}
    src={url}
    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
  />
);

export default Youtube;
