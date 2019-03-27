import { useStaticQuery, graphql } from "gatsby";

export const useSiteMetadataTitle = () => {
  const { site } = useStaticQuery(
    graphql`
      query useSiteMetadataTitle {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );

  return site.siteMetadata.title;
};
