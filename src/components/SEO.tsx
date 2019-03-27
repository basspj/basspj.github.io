import React from "react";
import Helmet, { HelmetProps } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const SEO: React.SFC<ISEOProps> = ({
  description = "",
  lang = "en",
  meta = [],
  keywords = [],
  title = undefined
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author {
              name
            }
          }
        }
      }
    `
  );

  const metaDescription = description || site.siteMetadata.description;
  const author = site.siteMetadata.author;
  const props: HelmetProps = title
    ? {
        title,
        titleTemplate: `%s | ${site.siteMetadata.title}`
      }
    : {
        title: site.siteMetadata.title
      };

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      {...props}
      meta={[
        {
          name: `description`,
          content: metaDescription
        },
        {
          property: `og:title`,
          content: title
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:creator`,
          content: author.name
        },
        {
          name: `twitter:title`,
          content: title
        },
        {
          name: `twitter:description`,
          content: metaDescription
        }
      ]
        .concat(
          keywords.length > 0
            ? {
                name: `keywords`,
                content: keywords.join(`, `)
              }
            : []
        )
        .concat(meta)}
    />
  );
};

interface ISEOProps {
  description?: string;
  lang?: string;
  meta?: any[];
  keywords?: string[];
  title?: string;
}

export default SEO;
