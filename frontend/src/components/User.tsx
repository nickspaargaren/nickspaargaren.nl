import React, { ReactElement } from "react";
import styled from "styled-components";

const StyleUser = styled.div`
  display: flex;
  .gatsby-image-wrapper {
    margin: auto 10px auto 0;
    border-radius: 50px;
  }
`;

type UserType = {
  title: string;
  subtitle: string;
  image?: object;
};

const User = ({ title, subtitle, image }: UserType): ReactElement => (
  <StyleUser>
    {image}
    <div>
      <strong>{title}</strong>
      <div className="klein">{subtitle}</div>
    </div>
  </StyleUser>
);

export default User;
