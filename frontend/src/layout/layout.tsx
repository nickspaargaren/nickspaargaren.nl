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

const Layout = (props: LayoutProps) => {
  if (props.noindex) {
    var noindextag = <meta name="robots" content="noindex" />;
  }

  return (
    <>
      <GlobalStyle />
      <Nav />
      <Helmet>
        <html lang="nl" />
        <meta charSet="utf-8" />
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
        {noindextag}
      </Helmet>
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
