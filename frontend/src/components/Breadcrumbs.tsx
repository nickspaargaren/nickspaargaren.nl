import { Link } from "gatsby";
import React, { ReactElement } from "react";
import { FaCaretRight } from "react-icons/fa";
import styled from "styled-components";

const StyledBreadcrumbs = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  li {
    margin-right: 5px;
  }
  li a {
    color: inherit;
    text-decoration: none;
  }
  li a:hover {
    text-decoration: underline;
  }
  li svg {
    display: inline-block;
    vertical-align: middle;
    margin: 0;
  }
`;

type BreadcrumbsType = {
  list: string[];
};

const Breadcrumbs = ({ list }: BreadcrumbsType): ReactElement => (
  <StyledBreadcrumbs>
    <li>
      <Link to="/portfolio">Home</Link>
    </li>
    {list.map((title) => (
      <>
        <li>
          <FaCaretRight />
        </li>
        <li>{title}</li>
      </>
    ))}
  </StyledBreadcrumbs>
);

export default Breadcrumbs;
