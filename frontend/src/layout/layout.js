import React from "react"
import { Helmet } from "react-helmet";

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
      </Helmet>
      <main>{children}</main>
    </>
  )
}

export default  Layout