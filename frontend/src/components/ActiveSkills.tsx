import React, { ReactElement } from "react";
import { MdClear, MdDone } from "react-icons/md";
import styled from "styled-components";

const StyledTags = styled.div`
  .tag {
    display: inline-flex;
    background: #221e25;
    padding: 7px 8px;
    border-radius: 3px;
    font-size: 13px;
    margin: 0 5px 5px 0;
    color: #fff;
    border: 0;
    line-height: normal;
  }

  .tag svg {
    margin: auto 5px auto 0;
    fill: #35ca88;
  }
  .tag.reset {
    cursor: pointer;
  }
  .tag.reset:hover {
    background: rgba(255, 255, 255, 0.2);
  }
  .tag.reset svg {
    fill: #f13f30;
  }
`;

type ActiveSkillsType = {
  favorites: any;
  setFavorites: (item: any) => void;
};

const ActiveSkills = ({
  favorites,
  setFavorites,
}: ActiveSkillsType): ReactElement => {
  if (!favorites.length) {
    return <></>;
  }

  const formatter = new Intl.ListFormat("nl", {
    style: "long",
    type: "conjunction",
  });

  const favoriteList = favorites.map(({ skill }) => skill);

  return (
    <>
      <hr />
      <h5>Uw selectie</h5>
      <StyledTags>
        {favorites.map(({ skill }, key) => (
          <div key={key} className="tag">
            <MdDone />
            {skill}
          </div>
        ))}
        <button
          className="tag reset"
          onClick={() => {
            setFavorites([]);
          }}
          aria-label={`Uw selectie (${formatter.format(
            favoriteList,
          )}) verwijderen`}
        >
          <MdClear />
          Alle verwijderen
        </button>
      </StyledTags>
    </>
  );
};
export default ActiveSkills;
