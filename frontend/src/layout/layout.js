import React from "react"
import { Helmet } from "react-helmet";
import '../styles/index.css';

const Layout = ({ children, title, description, noindex }) => {

  if (noindex) {
    var noindextag = <meta name="robots" content="noindex" />;
  }

  return (
    <>
      <Helmet>
          <html lang="nl" />
          <meta charSet="utf-8" />
          <title>{title}</title>
          <meta name="description" content={description} />
          {noindextag}
          <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Helmet>
      <main>{children}</main>
    </>
  )
}

export default  Layout