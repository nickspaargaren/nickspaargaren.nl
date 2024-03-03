import type { GatsbySSR } from "gatsby";
import React from "react";

export const onRenderBody: GatsbySSR["onRenderBody"] = ({
  setPostBodyComponents,
}) => {
  setPostBodyComponents([
    <script
      key="stats"
      defer
      data-domain="nickspaargaren.nl"
      src="https://plausible.io/js/script.js"
    />,
  ]);
};
