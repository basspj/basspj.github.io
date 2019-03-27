import React from "react";
import { Link } from "gatsby";

import BlogDescription from "~/src/components/BlogDescription";
import { rhythm } from "~/src/utils/typography";
import { pathBlog } from "~/src/utils/path";

export const BlogIndexPosts: React.SFC<IBlogIndexPostProps> = ({ posts }) => (
  <React.Fragment>
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
            <Link style={{ boxShadow: `none` }} to={pathBlog(node.fields.slug)}>
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
              __html: frontmatter.description
            }}
          />
        </div>
      );
    })}
  </React.Fragment>
);

interface IBlogIndexPostProps {
  posts: any[];
}

export default BlogIndexPosts;
