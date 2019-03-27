import React from "react";

export const HTML: React.SFC<IHTMLProps> = ({
  htmlAttributes,
  headComponents,
  bodyAttributes,
  preBodyComponents,
  postBodyComponents,
  body
}) => (
  <html {...htmlAttributes}>
    <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      {headComponents}
    </head>
    <body {...bodyAttributes} className="light">
      <script
        dangerouslySetInnerHTML={{
          __html: `
              (function() {
                window.__setTheme = function (newTheme) {
                  document.body.className = newTheme;
                }
              })();
            `
        }}
      />
      {preBodyComponents}
      <div
        key={`body`}
        id="___gatsby"
        dangerouslySetInnerHTML={{ __html: body }}
      />
      {postBodyComponents}
    </body>
  </html>
);

interface IHTMLProps {
  htmlAttributes: any;
  headComponents: any[];
  bodyAttributes: any;
  preBodyComponents: any[];
  body: string;
  postBodyComponents: any[];
}

export default HTML;
