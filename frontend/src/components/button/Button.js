import React from 'react';
import styles from './button.module.css';
import { Link } from "gatsby"

const Button = ({title, subtitle, icoon, url}) => {

  return (
    <Link to={url} rel="noopener noreferrer" target="_blank" class={styles.button}>
      {icoon}
      <span>
        <strong>{title}</strong>
        {subtitle}
      </span>
    </Link>
  )

}

export default Button