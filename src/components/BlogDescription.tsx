import React from "react";

import { convertBlogTagToEmoji } from "~/src/utils/helpers";

export const BlogDescription: React.SFC<IBlogDescriptionProps> = ({
  date,
  timeToRead,
  tag
}) => (
  <React.Fragment>
    {date},{` • ${timeToRead} min read`},{` • ${convertBlogTagToEmoji(tag)}`}
  </React.Fragment>
);

interface IBlogDescriptionProps {
  date: string;
  timeToRead: string;
  tag: string;
}

export default BlogDescription;
