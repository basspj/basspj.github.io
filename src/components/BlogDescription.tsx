import React from "react";

import { convertBlogTagToEmoji } from "~/src/utils/helpers";

export const BlogDescription: React.SFC<BlogDescriptionProps> = ({
  frontmatter,
  node
}) => (
  <React.Fragment>
    {frontmatter.date},{` • ${node.timeToRead} min read`},
    {` • ${convertBlogTagToEmoji(frontmatter.tag)}`}
  </React.Fragment>
);

interface BlogDescriptionProps {
  frontmatter: { date: string; tag: string };
  node: { timeToRead: string };
}

export default BlogDescription;
