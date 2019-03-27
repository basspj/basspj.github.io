import React from "react";
import Image from "gatsby-image";

import { rhythm } from "~/src/utils/typography";
import { useSiteMetadataAuthor } from "~/src/hooks/useSiteMetadataAuthor";
import { useAvatarHeader } from "~/src/hooks/useAvatarHeader";

const Bio: React.SFC<{}> = () => {
  const author = useSiteMetadataAuthor();
  const { name, description, social } = author;

  const avatar = useAvatarHeader();
  const fixed = avatar.childImageSharp.fixed;

  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5)
      }}
    >
      <Image
        fixed={fixed}
        alt={name}
        style={{
          marginRight: rhythm(0.5),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`
        }}
        imgStyle={{
          borderRadius: `50%`
        }}
      />
      <p style={{ maxWidth: 310 }}>
        Blog by <a href={`https://twitter.com/${social.twitter}`}>{name}</a>
        <br />
        {description}
      </p>
    </div>
  );
};

export default Bio;
