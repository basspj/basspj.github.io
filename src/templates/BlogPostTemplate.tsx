import React from "react";
import { Link, graphql } from "gatsby";

import Bio from "~/src/components/Bio";
import Layout from "~/src/components/Layout";
import SEO from "~/src/components/SEO";
import { rhythm, scale } from "~/src/utils/typography";
import { BlogDescription } from "~/src/components/BlogDescription";
import { LocationProvider } from "~/src/context/LocationContext";
import { pathBlog } from "~/src/utils/path";

const BlogPostTemplate: React.SFC<IBlogPostTemplateProps> = ({
  data,
  pageContext,
  location
}) => {
  const post = data.markdownRemark;
  const { previous, next } = pageContext;

  const { frontmatter, timeToRead } = post;

  return (
    <LocationProvider location={location}>
      <Layout>
        <SEO title={frontmatter.title} description={frontmatter.description} />
        <h1>{frontmatter.title}</h1>
        <p
          style={{
            ...scale(-1 / 5),
            display: `block`,
            marginBottom: rhythm(1),
            marginTop: rhythm(-1)
          }}
        >
          <BlogDescription
            date={frontmatter.date}
            tag={frontmatter.tag}
            timeToRead={timeToRead}
          />
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
              <Link to={pathBlog(previous.fields.slug)} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={pathBlog(next.fields.slug)} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    </LocationProvider>
  );
};

interface IBlogPostTemplateProps {
  data: any;
  pageContext: any;
  location: any;
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
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
