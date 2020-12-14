import React, {useState, useEffect} from 'react'
import styles from './github.module.css';
import { GoStar, GoRepoForked } from "react-icons/go";

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
      <div className={styles.github}>
        <div class={styles.titel}>{github.name}</div>
        <p>{github.description}</p>
        <p><a href={github.html_url} rel="noopener noreferrer" target="_blank">{github.html_url}</a></p>
        <small>
          <span className={styles.stars}>
            <GoStar/>
            {github.stargazers_count}
          </span>
          <span>
            <GoRepoForked/>
            {github.forks}
          </span>
        </small>
      </div>
    );
  }
}

export default Github;