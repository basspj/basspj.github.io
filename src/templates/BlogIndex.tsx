import React from "react";
import { graphql } from "gatsby";

import Bio from "~/src/components/Bio";
import Layout from "~/src/components/Layout";
import SEO from "~/src/components/SEO";
import Footer from "~/src/components/Footer";
import BlogIndexPosts from "~/src/components/BlogIndexPosts";

const BlogIndex: React.SFC<BlogIndexProps> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
      <Bio />
      <BlogIndexPosts posts={posts} />
      <Footer />
    </Layout>
  );
};

interface BlogIndexProps {
  data: any;
  location: any;
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          timeToRead
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            tag
            description
          }
        }
      }
    }
  }
`;
