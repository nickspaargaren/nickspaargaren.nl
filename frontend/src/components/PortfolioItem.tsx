import { Link } from "gatsby"
import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components";

const StyledPortfolioItem = styled.div`
  margin: 80px 0;
  display: flex;
  :nth-child(even) {flex-direction: row-reverse;}
  :nth-child(even) .beschrijving {padding: 0 0 0 50px;}

  .beschrijving {margin: auto 0; width: 35%; padding: 0 50px 0 0;}
  .beschrijving ul.tags {list-style: none; margin: 0; padding: 0; display: flex;} .beschrijving ul.tags li { display: inline-block; margin: 10px 10px 0 0; position: relative; }
  .beschrijving ul.tags li {opacity: 0.65; transition: .3s all ease;}
  .beschrijving ul.tags li:hover {opacity: 1;}
  .beschrijving ul.tags li span {position: absolute; bottom: 100%; background: #221e25; color: #fff; line-height: 1; white-space: nowrap; font-size: 12px; padding: 7px; position: absolute; transition: .3s all ease; left: 50%; transform: translateX(-50%); opacity: 0; pointer-events: none;}
  .beschrijving ul.tags li span::before {border: solid; border-color: #221e25 transparent; border-width: 6px 6px 0px 6px; bottom: -4px; content: ""; position: absolute; transition: .3s all ease; left: 50%; transform: translateX(-50%);}
  .beschrijving ul.tags li:hover span {opacity: 1; pointer-events: all; bottom: 115%;}

  .plaatje {width: 65%;}
  .plaatje .info {display: flex; padding: 10px 15px; min-height: 40px; background: #fff; box-shadow: rgba(0, 0, 0, .1) 0px 1px 2px 0px;}
  .plaatje .info .links {display: flex; margin-left: auto;}
  .plaatje .info .links > * {margin-left: 15px;}

  @media (max-width: 735px) {
    flex-direction: column !important;
    .beschrijving {width: 100%; padding: 0 0 10px !important;}
    .plaatje {width: 100%;}
  }

`;

interface PortfolioItemProps {
  titel: string,
  beschrijving: string,
  slug: string,
  afbeelding: any, // later bepalen,
  skillsused?: any
}

const PortfolioItem = (props: PortfolioItemProps) => {

return (
  <>
    <StyledPortfolioItem>
      <div className="beschrijving">
        <h2>{props.titel}</h2>
        <p>{props.beschrijving}</p>
        <ul className="tags">
          {props.skillsused.map((skill, key) => (
              <li key={key}>
                <GatsbyImage image={skill.afbeelding.asset.gatsbyImageData} alt={skill.titel} />
                <span>{skill.titel}</span>
              </li>
            )
          )}
        </ul>

      </div>
      <div className="plaatje">
        {props.afbeelding && <Link to={`/portfolio/projecten/${props.slug}`}><GatsbyImage image={props.afbeelding.asset.gatsbyImageData} alt={props.titel} /></Link>}
      </div>
    </StyledPortfolioItem>
  </>
)

}

export default PortfolioItem