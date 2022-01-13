import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import styled from "styled-components";
import { BsChevronUp } from "react-icons/bs";

const StyledPortfolioItem = styled.div`
  position: relative;
  overflow: hidden;
  min-width: 280px;

  .image .gatsby-image-wrapper {
    width: 100%;
  }
  .description {
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
  .description h2 {
    font-size: 22px;
    margin: 0;
  }
  .description p {
    font-size: 15px;
    opacity: 0.75;
  }

  .description svg {
    transition: 0.3s all ease;
    margin: 0 auto 30px;
    overflow: hidden;
  }

  .description ul.tags {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    height: 0;
    opacity: 0;
    transition: 0.3s all ease;
  }

  .description .cm-specialist {
    opacity: 0;
    margin-bottom: 15px;
    transition: 0.3s all ease;
  }

  &:hover {
    .description .cm-specialist {
      opacity: 0.65;
    }

    .description ul.tags {
      height: 47px;
      opacity: 1;
      padding-bottom: 30px;
    }
    .description svg {
      margin: 0 auto;
      height: 0;
      opacity: 0;
    }
    .description ul.tags li {
      top: 0;
      opacity: 1;
    }
  }
  .description ul.tags li {
    display: inline-block;
    margin: 10px 5px 0 5px;
    position: relative;
    transition: 0.3s all ease;
  }

  .description ul.tags li {
    top: 30px;
    opacity: 0;
  }
  .description ul.tags li:nth-child(2) {
    transition: 0.4s;
  }
  .description ul.tags li:nth-child(3) {
    transition: 0.5s;
  }
  .description ul.tags li:nth-child(4) {
    transition: 0.5s;
  }
  .description ul.tags li:nth-child(5) {
    transition: 0.6s;
  }

  .description ul.tags li span {
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
  .description ul.tags li span::before {
    border: solid;
    border-color: #221e25 transparent;
    border-width: 6px 6px 0px 6px;
    bottom: -4px;
    content: "";
    position: absolute;
    transition: 0.3s all ease;
    left: 50%;
    transform: translateX(-50%);
  }
  .description ul.tags li:hover span {
    opacity: 1;
    pointer-events: all;
    bottom: 115%;
  }
  .description ul.tags .gatsby-image-wrapper {
    position: relative;
  }
  .description ul.tags .gatsby-image-wrapper::after {
    content: "";
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
  title: string;
  subtitle: string;
  description: string;
  slug?: string;
  image: any; // later bepalen,
  skillsused?: any;
  collaboration: string;
}

const PortfolioItem = ({
  title,
  subtitle,
  description,
  slug,
  image,
  skillsused,
  collaboration,
}: PortfolioItemProps) => (
  <StyledPortfolioItem>
    <div className="image">
      {image && <GatsbyImage image={image.asset.gatsbyImageData} alt={title} />}
    </div>
    <div className="description">
      <h2>{title}</h2>
      <p>{subtitle}</p>
      <BsChevronUp />
      <ul className="tags">
        {skillsused.map((skill, key) => (
          <li key={key}>
            <GatsbyImage
              image={skill.image.asset.gatsbyImageData}
              alt={skill.title}
            />
            <span>{skill.title}</span>
          </li>
        ))}
      </ul>
    </div>
  </StyledPortfolioItem>
);

export default PortfolioItem;
