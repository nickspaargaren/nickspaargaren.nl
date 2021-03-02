import { Link } from "gatsby"
import React from "react"
import Img from "gatsby-image"
import styled from "styled-components";

const StyledPortfolioItem = styled.div`
  margin: 80px 0;
  display: flex;
  :nth-child(even) {flex-direction: row-reverse;}
  :nth-child(even) .beschrijving {padding: 0 0 0 50px;}

 .beschrijving {margin: auto 0; width: 35%; padding: 0 50px 0 0;}
 .beschrijving ul.tags {list-style: none; margin: 0; padding: 0; display: flex;}
 .beschrijving ul.tags li {
  display: inline-block;
  padding: 7px 10px;
  text-transform: uppercase;
  border: 1px solid;
  font-size: 10px;
  font-weight: bold;
  color: #009bff;
  margin: 10px 10px 0 0;
  border-radius: 3px;
}
 .plaatje {width: 65%;}
 .plaatje img {}
 .plaatje .info {display: flex; padding: 10px 15px; min-height: 40px; background: #fff; box-shadow: rgba(0, 0, 0, .1) 0px 1px 2px 0px;}
 .plaatje .info .samenwerking {display: flex; margin-right: auto;}
 .plaatje .info .samenwerking div {margin: auto 0;}
 .plaatje .info .samenwerking div img {display: block; margin-right: 10px; border-radius: 2px;}
 .plaatje .info .samenwerking div strong {display: block;}
 .plaatje .info .links {display: flex; margin-left: auto;}
 .plaatje .info .links > * {margin-left: 15px;}

`;

interface Props {
  titel: string,
  beschrijving: string,
  slug: string,
  afbeelding: any, // later bepalen,
  skillsused?: any
}

const PortfolioItem: React.FC<Props> = ({titel, beschrijving, slug, afbeelding, skillsused}) => {


  
return (
  <>
    <StyledPortfolioItem>
      <div className="beschrijving">
        <h2>{titel}</h2>
        <p>{beschrijving}</p>
        <ul className="tags">
          {skillsused.map((skill, key) => {
            
            console.log(skill);
            
            return (
              <li key={key}>
                <Img fluid={skill.afbeelding.asset.fluid} loading="lazy" />
                {skill.titel}
                </li>
            )
          }
            
          )}
        </ul>

      </div>
      <div className="plaatje">
        {afbeelding && <Link to={`/portfolio/${slug}`}><Img fluid={afbeelding.asset.fluid} alt={titel} loading="lazy" /></Link>}
      </div>
    </StyledPortfolioItem>
  </>
)

}

export default PortfolioItem