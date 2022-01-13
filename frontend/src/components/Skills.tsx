import React, { useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  MdCheckBox,
  MdCheckBoxOutlineBlank,
  MdClear,
  MdDone,
} from "react-icons/md";
import { useSiteMetadata } from "../data/hooks/algemeen";

const Skills = () => {
  const data = useStaticQuery(graphql`
    {
      skills: allSanitySkills(sort: { fields: percentage, order: DESC }) {
        nodes {
          id
          title
          percentage
          image {
            asset {
              gatsbyImageData
            }
          }
          exclude
        }
      }
    }
  `);

  const { phone } = useSiteMetadata();

  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.getItem("favorites") &&
        setFavorites(JSON.parse(localStorage.getItem("favorites")));
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  }, [favorites]);

  const ActieveSkills = () => {
    if (favorites.length > 0) {
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
    } else {
      return <></>;
    }
  };

  return (
    <div className="skills">
      <p style={{ marginBottom: "0px", opacity: ".75" }}>Skills</p>
      <div className="skillTitle">
        <span>Waar wilt u het graag over hebben?</span>
      </div>
      {data.skills.nodes
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
                  const check = favorites.find((i) => i["id"] === item.id);

                  if (!check) {
                    setFavorites([
                      ...favorites,
                      { id: item.id, skill: item.title },
                    ]);
                  } else {
                    const nieuwfavorites = favorites.filter(
                      (i) => i["id"] !== item.id
                    );
                    setFavorites(nieuwfavorites);
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
    </div>
  );
};

export default Skills;
