import React from "react";
import { Link } from "gatsby";

import BlogDescription from "~/src/components/BlogDescription";
import { rhythm } from "~/src/utils/typography";

export const BlogIndexPosts: React.SFC<BlogIndexPostProps> = ({ posts }) => {
  return (
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
    </React.Fragment>
  );
};

interface BlogIndexPostProps {
  posts: any[];
}

export default BlogIndexPosts;
