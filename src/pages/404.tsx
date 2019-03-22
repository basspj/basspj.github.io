import React from "react";
import { graphql } from "gatsby";

import Layout from "~/src/components/Layout";
import SEO from "~/src/components/SEO";

const NotFoundPage: React.SFC<NotFoundPageProps> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404: Not Found" />
      <h1>Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  );
};

interface NotFoundPageProps {
  data: any;
  location: any;
}

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
