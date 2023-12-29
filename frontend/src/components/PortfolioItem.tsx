import Taglist from "@src/components/Taglist";
import { TagType } from "@src/types";
import { GatsbyImage, IGatsbyImageData } from "gatsby-plugin-image";
import React, { ReactElement } from "react";
import { BsChevronUp } from "react-icons/bs";
import styled from "styled-components";

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
    color: #fff;
  }
  .description h2 {
    font-size: 22px;
    margin: 0;
    color: inherit;
  }
  .description p {
    opacity: 0.75;
  }

  .description svg {
    transition: 0.3s all ease;
    margin: 0 auto 30px;
    overflow: hidden;
  }

  &:hover {
    .description ul {
      height: 47px;
      opacity: 1;
      padding-bottom: 30px;
    }
    .description svg {
      margin: 0 auto;
      height: 0;
      opacity: 0;
    }
    .description ul li {
      top: 0;
      opacity: 1;
    }
  }
`;

type PortfolioItemType = {
  title: string;
  image?: IGatsbyImageData;
  skillsused?: Queries.portfolioQuery["portfolio"]["nodes"][0]["skillsused"];
};

const PortfolioItem = ({
  title,
  image,
  skillsused,
}: PortfolioItemType): ReactElement => (
  <StyledPortfolioItem>
    <div className="image">
      {image && <GatsbyImage image={image} alt={title} />}
    </div>
    <div className="description">
      <h2>{title}</h2>
      <BsChevronUp aria-hidden="true" />
      <Taglist tags={skillsused || []} />
    </div>
  </StyledPortfolioItem>
);

export default PortfolioItem;
