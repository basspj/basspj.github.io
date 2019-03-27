import { useStaticQuery, graphql } from "gatsby";

export const useSiteMetadataAuthor = () => {
  const { site } = useStaticQuery(
    graphql`
      query useSiteMetadataAuthor {
        site {
          siteMetadata {
            author {
              name
              description
              social {
                twitter
                github
                medium
              }
            }
          }
        }
      }
    `
  );

  return site.siteMetadata.author;
};
