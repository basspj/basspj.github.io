import { useStaticQuery, graphql } from "gatsby";

export const useAvatarHeader = () => {
  const { avatar } = useStaticQuery(
    graphql`
      query useAvatarHeader {
        avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
          childImageSharp {
            fixed(width: 50, height: 50) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  );

  return avatar;
};
