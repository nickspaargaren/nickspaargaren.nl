import { useSiteMetadata } from "@src/hooks/useSiteMetadata";
import { useSkillsData } from "@src/hooks/useSkillsData";
import { useLocalStorage } from "@src/utils/localStorage";
import { motion } from "framer-motion";
import { GatsbyImage } from "gatsby-plugin-image";
import React, { ReactElement, useEffect } from "react";
import { useState } from "react";
import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdClear,
  MdDone,
} from "react-icons/md";
import styled from "styled-components";

const StyledSkills = styled.div`
  background: #18151a;
  color: #fff;
  padding: 30px;
  box-shadow: 0 50px 75px -40px rgba(0, 0, 0, 0.6);
  position: relative;
  z-index: 0;
  max-width: 800px;
  margin: 0 auto;
  h2 {
    color: #fff;
  }
  .skill {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: 35px 1fr 29px;
    margin: 0 0 10px;
    user-select: none;
  }
  .skill > div {
    margin: auto 0;
  }
  .skill .title {
    display: flex;
    color: rgba(255, 255, 255, 0.6);
    margin-bottom: 4px;
    font-size: 13px;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 0.7px;
  }
  .skill .title span {
    margin-left: auto;
  }
  .skill .percentage {
    height: 6px;
    background: rgba(255, 255, 255, 0.2);
    padding: 2px;
    border-radius: 10px;
  }
  .skill .percentage .gevuld {
    background: #009bff;
    height: 100%;
    border-radius: inherit;
  }
  .skill .opties .icon {
    cursor: pointer;
    background: #221e25;
    line-height: 0;
    margin: auto;
    padding: 6px;
    border-radius: 5px;
  }
  .skill .opties .icon:hover {
    background: rgba(255, 255, 255, 0.2);
  }
  .skill .opties .icon.actief {
    background: rgba(255, 255, 255, 0.2);
    color: #35ca88;
  }
  .skill .opties .icon svg {
    margin: 0;
  }
  .tags {
    margin: 0 0 15px;
    padding: 0;
  }
  .tags .tag {
    display: inline-flex;
    background: #221e25;
    padding: 5px 7px;
    border-radius: 3px;
    font-size: 13px;
    margin: 0 5px 5px 0;
  }
  .tags .tag svg {
    margin: auto 5px auto 0;
    fill: #35ca88;
  }
  .tags .tag.reset {
    cursor: pointer;
  }
  .tags .tag.reset:hover {
    background: rgba(255, 255, 255, 0.2);
  }
  .tags .tag.reset svg {
    fill: #f13f30;
  }
`;

type SkillsType = { id: string; skill: string };

const Skills = (): ReactElement => {
  const skills = useSkillsData();

  const { phone } = useSiteMetadata();

  const [favorites, setFavorites] = useLocalStorage("favorites");

  const ActieveSkills = (): ReactElement => {
    if (!favorites.length) {
      return <></>;
    }

    return (
      <>
        <hr />
        <h5>Uw selectie</h5>
        <ul className="tags">
          {favorites.map(({ skill }, key) => (
            <li key={key} className="tag">
              <MdDone />
              {skill}
            </li>
          ))}
          <li
            className="tag reset"
            onClick={() => {
              setFavorites([]);
            }}
          >
            <MdClear />
            Alle verwijderen
          </li>
        </ul>
      </>
    );
  };

  return (
    <StyledSkills>
      <h2>Waar wilt u het graag over hebben?</h2>

      {skills
        .filter((item) => !item.exclude)
        .map((item, key) => (
          <div key={key} className="skill">
            {item.image ? (
              <GatsbyImage
                image={item.image.asset.gatsbyImageData}
                alt={item.title}
              />
            ) : (
              <img src="https://placehold.it/35x35" alt="placeholder" />
            )}
            <div>
              <div className="title">
                {item.title}
                <span>{item.percentage + "%"}</span>
              </div>
              <div className="percentage">
                <motion.div
                  initial={{ width: "0%" }}
                  whileInView={{ width: item.percentage + "%" }}
                  viewport={{ once: true }}
                  className="gevuld"
                ></motion.div>
              </div>
            </div>
            <div className="opties">
              <div
                className="favorite"
                onClick={() => {
                  if (!favorites.find((i) => i["id"] === item.id)) {
                    setFavorites([
                      ...favorites,
                      { id: item.id, skill: item.title },
                    ]);
                  } else {
                    setFavorites(favorites.filter((i) => i["id"] !== item.id));
                  }
                }}
              >
                {favorites.find((i) => i["id"] === item.id) ? (
                  <div className={`icon actief`}>
                    <MdCheckBox />
                  </div>
                ) : (
                  <div className={`icon`}>
                    <MdCheckBoxOutlineBlank />
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}

      <ActieveSkills />
    </StyledSkills>
  );
};

export default Skills;
