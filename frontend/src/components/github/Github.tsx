import React, {useState, useEffect} from 'react'
import { GoStar, GoRepoForked } from "react-icons/go";
import styled from 'styled-components';

const StyledGithub = styled.div`
  display: inline-block;
  padding: 16px;
  color: #292a2c;
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
  const [github, setGithub] = useState({data: null, loading: true, error: null});

  useEffect(() => {
    setGithub({data: null, loading: true, error: null});
    fetch("https://api.github.com/repos/nickspaargaren/no-google")
      .then(res => res.json())
      .then(
        (result) => {
          setGithub({data: result, loading: false, error:  null});
        },
        (error) => {
          setGithub({data: null, loading: false, error:  error});
        }
      )
  }, [])

  if (github.error) {
    return <>{github.error.message}</>;
  } else if (github.loading) {
    return <>Laden...</>;
  } else {
    return (
      <StyledGithub>
        <div className="titel">{github.data.name}</div>
        <p>{github.data.description}</p>
        <p><a href={github.data.html_url} rel="noopener noreferrer" target="_blank">{github.data.html_url}</a></p>
        <small>
          <span className="stars">
            <GoStar/>
            {github.data.stargazers_count}
          </span>
          <span>
            <GoRepoForked/>
            {github.data.forks}
          </span>
        </small>
      </StyledGithub>
    );
  }
}

export default Github;