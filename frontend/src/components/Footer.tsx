import Button from "@src/components/Button";
import { SocialData } from "@src/hooks/useSocialData";
import React, { ReactElement } from "react";
import styled from "styled-components";

const StyledFooter = styled.div`
  footer {
    background: #221e25;
    color: rgba(255, 255, 255, 0.6);
    text-align: center;
  }
  footer .inhoud {
    padding: 40px;
    margin: 0 auto;
  }
  footer .inhoud a {
    color: #fff;
  }
  footer .inhoud .tel {
    font-size: 25px;
    font-weight: bold;
    color: #fff;
    margin: 0 0 10px;
  }
  footer .inhoud .tel + p {
    margin-top: -10px;
  }
`;

const Footer = (): ReactElement => (
  <StyledFooter>
    <footer>
      <div className="inhoud">
        {SocialData.map((social, key) => (
          <Button
            key={key}
            title={social.platform}
            subtitle="Account"
            icon={social.icon}
            url={social.url}
            external
            ariaLabel={`Nick's ${social.platform} account`}
          />
        ))}
      </div>
    </footer>
  </StyledFooter>
);

export default Footer;
