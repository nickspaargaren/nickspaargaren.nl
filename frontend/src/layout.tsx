import Footer from "@src/components/Footer";
import Nav from "@src/components/navigation/Nav";
import GlobalStyle from "@src/styles/globalStyles";
import React, { ReactElement } from "react";
import { Helmet } from "react-helmet";

type LayoutType = {
  children: ReactElement | ReactElement[];
  title: string;
  description?: string | null;
  noindex?: boolean;
};

const Layout = ({
  children,
  title,
  description,
  noindex,
}: LayoutType): ReactElement => (
  <>
    <GlobalStyle />
    <section>
      <div className="inhoud">
        <Nav />
      </div>
    </section>
    <Helmet>
      <html lang="nl" />
      <meta charSet="utf-8" />
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {noindex && <meta name="robots" content="noindex" />}
    </Helmet>
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
