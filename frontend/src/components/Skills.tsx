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
import ButtonGroot from "./button/ButtonGroot";

const Skills = () => {
  const data = useStaticQuery(graphql`
    {
      skills: allSanitySkills(sort: { fields: percentage, order: DESC }) {
        nodes {
          id
          titel
          percentage
          afbeelding {
            asset {
              gatsbyImageData
            }
          }
          exclude
        }
      }
    }
  `);

  const { telefoonnummer } = useSiteMetadata();

  const [favorieten, setFavorieten] = useState([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.getItem("favorieten") &&
        setFavorieten(JSON.parse(localStorage.getItem("favorieten")));
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("favorieten", JSON.stringify(favorieten));
    }
  }, [favorieten]);

  const ActieveSkills = () => {
    if (favorieten.length > 0) {
      return (
        <>
          <hr />
          <h5>Uw selectie</h5>
          <ul className="tags">
            {favorieten.map((i, key) => {
              return (
                <li key={key} className="tag">
                  <MdDone />
                  {i.skill}
                </li>
              );
            })}
            <li
              className="tag reset"
              onClick={() => {
                setFavorieten([]);
              }}
            >
              <MdClear />
              Alle verwijderen
            </li>
          </ul>
          <ButtonGroot
            primary
            title={telefoonnummer}
            url={`tel:${telefoonnummer}`}
          />
        </>
      );
    } else {
      return <></>;
    }
  };

  return (
    <div className="skills">
      <p style={{ marginBottom: "0px", opacity: ".75" }}>Skills</p>
      <div className="skillTitel">
        <span>Waar wilt u het graag over hebben?</span>
      </div>
      {data.skills.nodes
        .filter((item) => !item.exclude)
        .map((item, key) => {
          return (
            <div key={key} className="skill">
              {item.afbeelding ? (
                <GatsbyImage
                  image={item.afbeelding.asset.gatsbyImageData}
                  alt={item.titel}
                />
              ) : (
                <img src="https://placehold.it/35x35" alt="placeholder" />
              )}
              <div>
                <div className="titel">
                  {item.titel}
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
                  className="favoriet"
                  onClick={() => {
                    const check = favorieten.find((i) => i["id"] === item.id);

                    if (!check) {
                      setFavorieten([
                        ...favorieten,
                        { id: item.id, skill: item.titel },
                      ]);
                    } else {
                      const nieuwfavorieten = favorieten.filter(
                        (i) => i["id"] !== item.id
                      );
                      setFavorieten(nieuwfavorieten);
                    }
                  }}
                >
                  {favorieten.find((i) => i["id"] === item.id) ? (
                    <div className={`icoon actief`}>
                      <MdCheckBox />
                    </div>
                  ) : (
                    <div className={`icoon`}>
                      <MdCheckBoxOutlineBlank />
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}

      <ActieveSkills />
    </div>
  );
};

export default Skills;
