import React from 'react';
import {GatsbyImage} from 'gatsby-plugin-image';
import styled from 'styled-components';
import {BsChevronUp} from 'react-icons/bs';

const StyledPortfolioItem = styled.div`
  position: relative;
  overflow: hidden;
  min-width: 280px;

  .plaatje .gatsby-image-wrapper {
    width: 100%;
  }
  .beschrijving {
    position: absolute;
    background: linear-gradient(transparent, #1d484f);
    padding: 20px 20px 0;
    text-align: center;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
  .beschrijving h2 {
    font-size: 22px;
    margin: 0;
  }
  .beschrijving p {
    font-size: 15px;
    opacity: 0.75;
  }

  .beschrijving svg {
    transition: 0.3s all ease;
    margin: 0 auto 30px;
    overflow: hidden;
  }

  .beschrijving ul.tags {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    height: 0;
    opacity: 0;
    transition: 0.3s all ease;
  }

  .beschrijving .cm-specialist {
    opacity: 0;
    margin-bottom: 15px;
    transition: 0.3s all ease;
  }

  &:hover {
    .beschrijving .cm-specialist {
      opacity: 0.65;
    }

    .beschrijving ul.tags {
      height: 47px;
      opacity: 1;
      padding-bottom: 30px;
    }
    .beschrijving svg {
      margin: 0 auto;
      height: 0;
      opacity: 0;
    }
    .beschrijving ul.tags li {
      top: 0;
      opacity: 1;
    }
  }
  .beschrijving ul.tags li {
    display: inline-block;
    margin: 10px 5px 0 5px;
    position: relative;
    transition: 0.3s all ease;
  }

  .beschrijving ul.tags li {
    top: 30px;
    opacity: 0;
  }
  .beschrijving ul.tags li:nth-child(2) {
    transition: 0.4s;
  }
  .beschrijving ul.tags li:nth-child(3) {
    transition: 0.5s;
  }
  .beschrijving ul.tags li:nth-child(4) {
    transition: 0.5s;
  }
  .beschrijving ul.tags li:nth-child(5) {
    transition: 0.6s;
  }

  .beschrijving ul.tags li span {
    position: absolute;
    bottom: 100%;
    background: #221e25;
    color: #fff;
    line-height: 1;
    white-space: nowrap;
    font-size: 12px;
    padding: 7px;
    position: absolute;
    transition: 0.3s all ease;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    pointer-events: none;
  }
  .beschrijving ul.tags li span::before {
    border: solid;
    border-color: #221e25 transparent;
    border-width: 6px 6px 0px 6px;
    bottom: -4px;
    content: '';
    position: absolute;
    transition: 0.3s all ease;
    left: 50%;
    transform: translateX(-50%);
  }
  .beschrijving ul.tags li:hover span {
    opacity: 1;
    pointer-events: all;
    bottom: 115%;
  }
  .beschrijving ul.tags .gatsby-image-wrapper {
    position: relative;
  }
  .beschrijving ul.tags .gatsby-image-wrapper::after {
    content: '';
    position: absolute;
    z-index: 0;
    top: -10px;
    right: -10px;
    bottom: -10px;
    left: -10px;
    border-radius: 12px;
    transition: 0.3s all ease;
  }
`;

interface PortfolioItemProps {
  titel: string;
  subtitle: string;
  beschrijving: string;
  slug?: string;
  afbeelding: any; // later bepalen,
  skillsused?: any;
  samenwerking: string;
}

const PortfolioItem = (props: PortfolioItemProps) => {
  return (
    <StyledPortfolioItem>
      <div className="plaatje">
        {props.afbeelding && (
          <GatsbyImage
            image={props.afbeelding.asset.gatsbyImageData}
            alt={props.titel}
          />
        )}
      </div>
      <div className="beschrijving">
        {props.samenwerking && (
          <div className="cm-specialist">
            <img
              src="../../images/cm-specialist.png"
              alt="CM Specialist"
              width={57.5}
            />
          </div>
        )}
        <h2>{props.titel}</h2>
        <p>{props.subtitle}</p>
        <BsChevronUp />
        <ul className="tags">
          {props.skillsused.map((skill, key) => (
            <li key={key}>
              <GatsbyImage
                image={skill.afbeelding.asset.gatsbyImageData}
                alt={skill.titel}
              />
              <span>{skill.titel}</span>
            </li>
          ))}
        </ul>
      </div>
    </StyledPortfolioItem>
  );
};

export default PortfolioItem;
