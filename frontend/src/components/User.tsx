import React, { ReactElement } from "react";
import styled from "styled-components";

const StyleUser = styled.div`
  display: flex;
  .gatsby-image-wrapper {
    margin: auto 10px auto 0;
    border-radius: 50px;
  }

  .switch {
    overflow: hidden;
    height: 17px;
  }

  .switch > div {
    position: relative;
    top: 0;
    transition: 0.3s all ease;
  }

  &:hover .switch > div {
    top: -17px;
  }
`;

type UserType = {
  title: string;
  subtitle: string;
  subtitleHover: string;
  image?: object;
};

const User = ({
  title,
  subtitle,
  subtitleHover,
  image,
}: UserType): ReactElement => (
  <StyleUser>
    {image}
    <div>
      <strong>{title}</strong>
      <div className="switch">
        <div className="klein">{subtitle}</div>
        <div className="klein">
          <a href={`mailto:${subtitleHover}`}>{subtitleHover}</a>
        </div>
      </div>
    </div>
  </StyleUser>
);

export default User;
