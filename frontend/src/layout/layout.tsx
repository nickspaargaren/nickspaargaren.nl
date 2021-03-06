import React from 'react';
import {Helmet} from 'react-helmet';
import GlobalStyle from '../styles/globalStyles';
import Nav from '../components/navigatie/Nav';
import Footer from '../components/Footer';

interface LayoutProps {
  children: any;
  title: string;
  description: string;
  noindex?: boolean;
}

const Layout = ({children, title, description, noindex}: LayoutProps) => {
  if (noindex) {
    var noindextag = <meta name="robots" content="noindex" />;
  }
  return (
    <>
      <GlobalStyle />
      <Nav />
      <Helmet>
        <html lang="nl" />
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={description} />
        {noindextag}
      </Helmet>
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
