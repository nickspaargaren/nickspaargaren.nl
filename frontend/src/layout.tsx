import Footer from "@src/components/Footer";
import Nav from "@src/components/navigation/Nav";
import GlobalStyle from "@src/styles/globalStyles";
import React, { ReactElement } from "react";

type LayoutType = {
  children: ReactElement | ReactElement[];
};

const Layout = ({ children }: LayoutType): ReactElement => (
  <>
    <GlobalStyle />
    <section>
      <div className="inhoud">
        <Nav />
      </div>
    </section>
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
