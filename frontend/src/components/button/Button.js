import React from 'react';
import { Link } from "gatsby"

const Button = ({title, subtitle, icoon, url, external}) => {

  return (
          <>
          {external ?
                  <a href={url} rel="noopener noreferrer" target="_blank" className="button">
                    {icoon}
                    <span>
                      <strong>{title}</strong>
                      {subtitle}
                    </span>
                  </a>
                  :
                  <Link to={url} className="button">
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