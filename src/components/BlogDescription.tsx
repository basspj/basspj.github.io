import React from "react";

import { convertBlogTagToEmoji } from "~/src/utils/helpers";

export const BlogDescription: React.SFC<BlogDescriptionProps> = ({
  date,
  timeToRead,
  tag
}) => (
  <React.Fragment>
    {date},{` • ${timeToRead} min read`},{` • ${convertBlogTagToEmoji(tag)}`}
  </React.Fragment>
);

interface BlogDescriptionProps {
  date: string;
  timeToRead: string;
  tag: string;
}

export default BlogDescription;
