import React, { ReactElement } from "react";
import { Helmet } from "react-helmet";
import GlobalStyle from "@src/styles/globalStyles";
import Nav from "@src/components/navigatie/Nav";
import Footer from "@src/components/Footer";

type LayoutProps = {
  children: any;
  title: string;
  description: string;
  noindex?: boolean;
};

const Layout = ({
  children,
  title,
  description,
  noindex,
}: LayoutProps): ReactElement => (
  <>
    <GlobalStyle />
    <Nav />
    <Helmet>
      <html lang="nl" />
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex" />}
    </Helmet>
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
