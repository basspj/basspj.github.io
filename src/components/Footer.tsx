import React from "react";

import { rhythm } from "~/src/utils/typography";

export const Footer: React.SFC<{}> = () => (
  <footer
    style={{
      marginTop: rhythm(2.5),
      paddingTop: rhythm(1)
    }}
  >
    <a href="https://www.twitter.com/basspj">Twitter</a>
    {` | `}
    <a href="https://www.github.com/basspj">Github</a>
    <br />
    Photo by thomas-lefebvre on <a href="https://unsplash.com">Unsplash</a>
  </footer>
);

export default Footer;
