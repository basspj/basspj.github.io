import React from "react";
import { Link, graphql } from "gatsby";

import Bio from "~/src/components/Bio";
import Layout from "~/src/components/Layout";
import SEO from "~/src/components/SEO";
import Footer from "~/src/components/Footer";
import BlogDescription from "~/src/components/BlogDescription";

import { rhythm } from "~/src/utils/typography";
import { convertBlogTagToEmoji } from "~/src/utils/helpers";

const BlogIndex: React.SFC<BlogIndexProps> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const posts = data.allMarkdownRemark.edges;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
      <Bio />
      {posts.map(({ node }) => {
        const { frontmatter, timeToRead } = node;
        const title = frontmatter.title || node.fields.slug;
        return (
          <div key={node.fields.slug}>
            <h3
              style={{
                marginBottom: rhythm(1 / 4)
              }}
            >
              <Link style={{ boxShadow: `none` }} to={node.fields.slug}>
                {title}
              </Link>
            </h3>
            <small>
              <BlogDescription
                date={frontmatter.date}
                tag={frontmatter.tag}
                timeToRead={timeToRead}
              />
            </small>
            <p
              dangerouslySetInnerHTML={{
                __html: frontmatter.description || node.excerpt
              }}
            />
          </div>
        );
      })}
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
