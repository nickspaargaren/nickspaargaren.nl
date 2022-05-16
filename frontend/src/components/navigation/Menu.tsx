import { Link } from "gatsby";
import React, { ReactElement, useEffect, useRef } from "react";
import styled from "styled-components";

const StyledMenu = styled.div`
  margin: auto 0 auto auto;
  position: relative;

  ul.menu {
    margin: 0;
    padding: 4px 0;
    background: #eee;
    border-radius: 5px;
    text-align: right;
    list-style: none;
    display: flex;
    position: relative;
    box-shadow: 0 2px 7px -1px rgb(0 0 0 / 15%) inset;
  }

  ul.menu li a {
    display: block;
    position: relative;
    margin: 0 5px;
    padding: 7px 15px;
    text-decoration: none;
    z-index: 2;
    font-weight: 400;
  }
  .hover {
    top: 4px;
    bottom: 4px;
    background: #fff;
    box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.15);
    position: absolute;
    transition: 0.3s all cubic-bezier(0.65, 0.05, 0.36, 1);
    border-radius: 5px;
    z-index: 1;
  }

  @media (max-width: 760px) {
    ul.menu {
      justify-content: center;
    }
  }
`;

const Menu = (): ReactElement => {
  const hoverRef = useRef<HTMLDivElement>(null);
  const menuItemRef = useRef<HTMLUListElement>(null);

  const hover = (e) => {
    hoverRef.current.style.left = `${e.target.offsetLeft}px`;
    hoverRef.current.style.width = `${e.target.clientWidth}px`;
  };

  const leave = () => {
    menuItemRef.current?.childNodes.forEach((item) => {
      const {
        children: [box],
      } = item;

      if (box.classList.contains("active")) {
        hoverRef.current.style.left = `${box.offsetLeft}px`;
        hoverRef.current.style.width = `${box.clientWidth}px`;
      }
    });
  };

  useEffect(() => {
    leave();
  }, []);

  return (
    <StyledMenu>
      <ul className="menu" ref={menuItemRef} onMouseLeave={leave}>
        <li>
          <Link activeClassName="active" onMouseEnter={hover} to="/portfolio/">
            Home
          </Link>
        </li>
        <li>
          <Link
            activeClassName="active"
            onMouseEnter={hover}
            to="/portfolio/drone/"
          >
            Drone
          </Link>
        </li>
      </ul>
      <div className="hover" ref={hoverRef}></div>
    </StyledMenu>
  );
};
export default Menu;
