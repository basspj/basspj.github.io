/**
 * Bio component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

import { rhythm } from "~/src/utils/typography";

const Bio: React.SFC<{}> = () => {
  return (
    <StaticQuery
      query={bioQuery}
      render={(data) => {
        const { author } = data.site.siteMetadata;
        const { name, description, social } = author;
        const fixed = data.avatar.childImageSharp.fixed;

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
              Blog by{" "}
              <a href={`https://twitter.com/${social.twitter}`}>{name}</a>
              <br />
              {description}
            </p>
          </div>
        );
      }}
    />
  );
};

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author {
          name
          description
          social {
            twitter
          }
        }
      }
    }
  }
`;

export default Bio;
