import React from "react";

import { rhythm } from "~/src/utils/typography";
import { useSiteMetadataAuthor } from "~/src/hooks/useSiteMetadataAuthor";

export const Footer: React.SFC<{}> = () => {
  const author = useSiteMetadataAuthor();
  const { social } = author;
  return (
    <footer
      style={{
        marginTop: rhythm(2.5),
        paddingTop: rhythm(1)
      }}
    >
      <a href={`https://www.twitter.com/${social.twitter}`}>Twitter</a>
      {` • `}
      <a href={`https://www.github.com/${social.github}`}>Github</a>
      {` • `}
      <a href={`https://www.medium.com/${social.medium}`}>Medium</a>
      <br />
      Photo by thomas-lefebvre on <a href="https://unsplash.com">Unsplash</a>
    </footer>
  );
};

export default Footer;
