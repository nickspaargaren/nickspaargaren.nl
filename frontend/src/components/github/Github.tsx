import React, { useState, useEffect } from "react";
import { GoStar, GoRepoForked } from "react-icons/go";
import styled from "styled-components";
import axios from "axios";

const StyledGithub = styled.div`
  display: inline-block;
  padding: 16px;
  color: #292a2c;
  background-color: #fff;
  border: 1px solid #e1e4e8;
  border-radius: 6px;
  text-align: left;

  .titel {
    font-weight: 600;
    line-height: 1.25em;
  }

  p {
    font-size: 15px;
    color: #586069;
  }
  p a {
    color: #0366d6;
    text-decoration: none;
  }

  small {
    display: flex;
  }
  small span {
    display: inline-flex;
    margin-right: 10px;
  }
  small span svg {
    margin: auto 3px auto 0;
  }
  small span.stars svg {
    fill: #f1e05b;
  }
`;

const Github = () => {
  const [github, setGithub] = useState<{
    data: any;
    loading: boolean;
    error: string | null;
  }>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const LoadData = async () => {
      try {
        const res = await axios.get(
          "https://api.github.com/repos/nickspaargaren/no-google"
        );
        const { data } = res;
        setGithub({ data: data, loading: false, error: null });
      } catch (err) {
        setGithub({ data: null, loading: false, error: err.message });
      }
    };

    LoadData();
  }, []);

  if (github.error) {
    return github.error;
  }

  if (github.loading) {
    return <>Laden...</>;
  }

  return (
    <StyledGithub>
      <div className="titel">{github.data.name}</div>
      <p>{github.data.description}</p>
      <p>
        <a
          href={github.data.html_url}
          rel="noopener noreferrer"
          target="_blank"
        >
          {github.data.html_url}
        </a>
      </p>
      <small>
        <span className="stars">
          <GoStar />
          {github.data.stargazers_count}
        </span>
        <span>
          <GoRepoForked />
          {github.data.forks}
        </span>
      </small>
    </StyledGithub>
  );
};

export default Github;
