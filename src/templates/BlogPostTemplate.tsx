import React from "react";
import { Link, graphql } from "gatsby";

import Bio from "~/src/components/Bio";
import Layout from "~/src/components/Layout";
import SEO from "~/src/components/SEO";
import { rhythm, scale } from "~/src/utils/typography";
import { convertBlogTagToEmoji } from "../utils/helpers";

const BlogPostTemplate: React.SFC<BlogPostTemplateProps> = ({
  data,
  pageContext,
  location
}) => {
  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata.title;
  const { previous, next } = pageContext;

  const { frontmatter } = post;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={frontmatter.title}
        description={frontmatter.description || post.excerpt}
      />
      <h1>{frontmatter.title}</h1>
      <p
        style={{
          ...scale(-1 / 5),
          display: `block`,
          marginBottom: rhythm(1),
          marginTop: rhythm(-1)
        }}
      >
        {frontmatter.date}
        {` • ${post.timeToRead} min read`}
        {` • ${convertBlogTagToEmoji(frontmatter.tag)}`}
      </p>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
      <hr
        style={{
          marginBottom: rhythm(1)
        }}
      />
      <Bio />

      <ul
        style={{
          display: `flex`,
          flexWrap: `wrap`,
          justifyContent: `space-between`,
          listStyle: `none`,
          padding: 0
        }}
      >
        <li>
          {previous && (
            <Link to={previous.fields.slug} rel="prev">
              ← {previous.frontmatter.title}
            </Link>
          )}
        </li>
        <li>
          {next && (
            <Link to={next.fields.slug} rel="next">
              {next.frontmatter.title} →
            </Link>
          )}
        </li>
      </ul>
    </Layout>
  );
};

interface BlogPostTemplateProps {
  data: any;
  pageContext: any;
  location: any;
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      timeToRead
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        tag
        description
      }
    }
  }
`;
