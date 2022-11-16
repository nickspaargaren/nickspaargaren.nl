import type { GatsbySSR } from "gatsby";
import React from "react";

export const onRenderBody: GatsbySSR["onRenderBody"] = ({
  setPostBodyComponents,
}) => {
  setPostBodyComponents([
    <script
      async
      defer
      src="/stats/script.js"
      data-website-id="c5bd98d9-afa7-444d-b50f-500b2883d316"
    ></script>,
  ]);
};
