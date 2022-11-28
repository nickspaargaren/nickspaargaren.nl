import { TagType } from "@src/types";
import { GatsbyImage } from "gatsby-plugin-image";
import React, { ReactElement } from "react";
import styled from "styled-components";

const StyledTaglist = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  height: 0;
  opacity: 0;
  transition: 0.3s all ease;

  li {
    display: inline-block;
    margin: 10px 10px 0 0;
    position: relative;
    transition: 0.3s all ease;
  }

  li span {
    position: absolute;
    bottom: 100%;
    background: #221e25;
    color: #fff;
    line-height: 1;
    white-space: nowrap;
    font-size: 14px;
    padding: 7px;
    position: absolute;
    transition: 0.3s all ease;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    pointer-events: none;
  }

  li span::before {
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

  li:hover span {
    opacity: 1;
    pointer-events: all;
    bottom: 115%;
  }

  .gatsby-image-wrapper {
    position: relative;
  }

  .gatsby-image-wrapper::after {
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

type TaglistType = {
	tags: TagType[];
};

const Taglist = ({ tags }: TaglistType): ReactElement => (
	<StyledTaglist>
		{tags.map(({ title, image }, key) => (
			<li key={key}>
				<GatsbyImage image={image.asset.gatsbyImageData} alt={title} />
				<span>{title}</span>
			</li>
		))}
	</StyledTaglist>
);

export default Taglist;
