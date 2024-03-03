import type { GatsbySSR } from "gatsby";
import React from "react";

export const onRenderBody: GatsbySSR["onRenderBody"] = ({
  setPostBodyComponents,
}) => {
  setPostBodyComponents([
    <script
      key="stats"
      defer
      src="/stats/js/script.js"
      data-api="/stats/api/event"
      data-domain="nickspaargaren.nl"
    />,
  ]);
};
