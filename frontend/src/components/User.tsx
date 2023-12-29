import { useSiteMetadata } from "@src/hooks/useSiteMetadata";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import styled from "styled-components";

const StyleUser = styled.div`
  display: flex;
  .gatsby-image-wrapper {
    margin: auto 10px auto 0;
    border-radius: 50px;
  }
`;

const User = () => {
  const siteMetadata = useSiteMetadata();

  return (
    <StyleUser>
      <StaticImage
        src="../images/nick-spaargaren.jpeg"
        width={37}
        height={37}
        alt={`${"Profielfoto"} ${siteMetadata?.name}`}
      />
      <div>
        <strong>{siteMetadata?.name}</strong>
        <div className="small">{siteMetadata?.position}</div>
      </div>
    </StyleUser>
  );
};

export default User;
