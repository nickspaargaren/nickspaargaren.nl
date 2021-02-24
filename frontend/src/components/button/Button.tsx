import React from 'react';
import { Link } from "gatsby"

interface Props {
  title: string,
  subtitle: string,
  icoon: any,
  url: string,
  external?: boolean
}

const Button: React.FC<Props> = ({title, subtitle, icoon, url, external}) => {

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