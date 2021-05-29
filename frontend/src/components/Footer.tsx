import React from 'react';

import {useSiteMetadata} from '../data/hooks/algemeen';
import {SocialData} from '../data/socials/SocialData';
import Button from '../components/button/Button';
import styled from 'styled-components';

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

const Footer = () => {
  const {telefoonnummer} = useSiteMetadata();

  return (
    <StyledFooter>
      <footer>
        <div className="inhoud">
          <div className="tel">{telefoonnummer}</div>
          <p>
            Of toch eerst{' '}
            <a
              href="https://www.google.com/search?q=site%3Acmspecialist.nl+%22Nick+Spaargaren%22"
              rel="noopener noreferrer"
              target="_blank"
            >
              meer projecten
            </a>{' '}
            zien?
          </p>
          {SocialData.map((social, key) => (
            <Button
              key={key}
              title={social.platform}
              subtitle="Account"
              icoon={social.icoon}
              url={social.url}
              external
            />
          ))}
        </div>
      </footer>
    </StyledFooter>
  );
};

export default Footer;
