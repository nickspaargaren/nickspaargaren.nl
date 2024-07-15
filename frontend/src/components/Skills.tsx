import ActiveSkills from "@src/components/ActiveSkills";
import { useSkillsData } from "@src/hooks/useSkillsData";
import { favoriteListSchema, favoriteListType } from "@src/types";
import { useLocalStorage } from "@src/utils/localStorage";
import { motion } from "framer-motion";
import { GatsbyImage } from "gatsby-plugin-image";
import React, { ReactElement } from "react";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
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
  .skill .opties {
    position: relative;
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
  .skill .opties input {
    position: absolute;
    opacity: 0;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }
`;

const Skills = (): ReactElement => {
  const skills = useSkillsData();

  const [favorites, setFavorites] = useLocalStorage<favoriteListType>(
    "favorites",
    favoriteListSchema,
    [],
  );

  const handleChangeChk = (
    item: Queries.skillsQuery["skills"]["nodes"][number],
  ) => {
    if (!favorites.find((i) => i["id"] === item.id)) {
      setFavorites([...favorites, { id: item.id, skill: item.title || "" }]);
    } else {
      setFavorites(favorites.filter((i) => i["id"] !== item.id));
    }
  };

  return (
    <StyledSkills>
      <h2>Waar wilt u het graag over hebben?</h2>

      {skills
        .filter((item) => !item.exclude)
        .map((item, key) => (
          <div key={key} className="skill">
            {item.image?.asset ? (
              <GatsbyImage
                image={item.image.asset.gatsbyImageData}
                alt={item.title || ""}
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
              <div className="favorite" onClick={() => handleChangeChk(item)}>
                <input
                  type="checkbox"
                  aria-label={item.title || ""}
                  onChange={() => handleChangeChk(item)}
                  onKeyDown={({ key }) =>
                    key === "Enter" && handleChangeChk(item)
                  }
                  checked={
                    favorites.find((i) => i["id"] === item.id) ? true : false
                  }
                />
                {favorites.find((i) => i["id"] === item.id) ? (
                  <div className="icon actief">
                    <MdCheckBox />
                  </div>
                ) : (
                  <div className="icon">
                    <MdCheckBoxOutlineBlank />
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}

      <ActiveSkills favorites={favorites} setFavorites={setFavorites} />
    </StyledSkills>
  );
};

export default Skills;
