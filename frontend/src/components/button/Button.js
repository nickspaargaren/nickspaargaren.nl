import React from 'react';
import styles from './button.module.css';
import { Link } from "gatsby"

const Button = ({title, subtitle, icoon, url, external}) => {

  return (
          <>
          {external ?
                  <a href={url} rel="noopener noreferrer" target="_blank" className={styles.button}>
                    {icoon}
                    <span>
                      <strong>{title}</strong>
                      {subtitle}
                    </span>
                  </a>
                  :
                  <Link to={url} className={styles.button}>
                    {icoon}
                    <span>
                      <strong>{title}</strong>
                      {subtitle}
                    </span>
                  </Link>
            }
          </>
  )

}

export default Button