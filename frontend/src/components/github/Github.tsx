import React, {useState, useEffect} from 'react'
import { GoStar, GoRepoForked } from "react-icons/go";
import styled from 'styled-components';

const StyledGithub = styled.div`
  display: inline-block;
  padding: 16px;
  background-color: #fff;
  border: 1px solid #e1e4e8;
  border-radius: 6px;
  text-align: left;

  .titel {font-weight: 600; line-height: 1.25em;}

  p {font-size: 15px; color: #586069;}
  p a {color: #0366d6; text-decoration: none;}

  small {display: flex;}
  small span {display: inline-flex; margin-right: 10px;}
  small span svg {margin: auto 3px auto 0;}
  small span.stars svg {fill: #f1e05b;}
`;

const Github = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [github, setItemsGithub] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/repos/nickspaargaren/no-google")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItemsGithub(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <>{error.message}</>;
  } else if (!isLoaded) {
    return <>Laden...</>;
  } else {
    return (
      <StyledGithub>
        <div className="titel">{github.name}</div>
        <p>{github.description}</p>
        <p><a href={github.html_url} rel="noopener noreferrer" target="_blank">{github.html_url}</a></p>
        <small>
          <span className="stars">
            <GoStar/>
            {github.stargazers_count}
          </span>
          <span>
            <GoRepoForked/>
            {github.forks}
          </span>
        </small>
      </StyledGithub>
    );
  }
}

export default Github;