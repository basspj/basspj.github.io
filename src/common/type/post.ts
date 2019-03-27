export interface IPost {
  timeToRead: string;
  frontmatter: {
    date: string;
    title: string;
    tag: string;
    description: string;
  };
}
