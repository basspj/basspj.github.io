const path = require("path");
const fs = require("fs");
const { createFilePath } = require("gatsby-source-filesystem");
const { pathBlog, PATH_JSON, pathJsonIndex } = require("./src/utils/path");

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  const BlogIndex = path.resolve("./src/templates/BlogIndex.tsx");

  return graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
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
    `
  ).then((result) => {
    if (result.errors) {
      throw result.errors;
    }

    const posts = result.data.allMarkdownRemark.edges;
    const postsLength = posts.length;

    /* Iterate needed pages and create them. */
    const postsPerIndex = 3;
    const countPages = Math.ceil(postsLength / postsPerIndex);
    for (let currentPage = 1; currentPage <= countPages; currentPage++) {
      const pathSuffix =
        currentPage > 1
          ? currentPage
          : ""; /* To create paths "/", "/2", "/3", ... */

      /* Collect images needed for this page. */
      const startIndexInclusive = postsPerIndex * (currentPage - 1);
      const endIndexExclusive = startIndexInclusive + postsPerIndex;
      const slicedPosts = posts.slice(startIndexInclusive, endIndexExclusive);

      /* Combine all data needed to construct this page. */
      const pageData = {
        path: `/${pathSuffix}`,
        component: BlogIndex,
        context: {
          /* If you need to pass additional data, you can pass it inside this context object. */
          posts: slicedPosts,
          currentPage: currentPage,
          countPages: countPages
        }
      };

      /* Create normal pages (for pagination) and corresponding JSON (for infinite scroll). */
      createPage(pageData);
      createJSON(pageData);
    }

    // Create blog posts pages.
    const blogPost = path.resolve("./src/templates/BlogPostTemplate.tsx");

    posts.forEach((post, index) => {
      const previous = index === postsLength - 1 ? null : posts[index + 1].node;
      const next = index === 0 ? null : posts[index - 1].node;

      const slug = post.node.fields.slug;

      createPage({
        path: pathBlog(slug),
        component: blogPost,
        context: {
          slug,
          previous,
          next
        }
      });
    });

    return null;
  });
};

function createJSON(pageData) {
  const pathSuffix = pageData.path.substring(1);
  const dir = `public/${PATH_JSON}`;
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }
  const filePath = `public/${pathJsonIndex(pathSuffix)}`;
  const dataToSave = JSON.stringify(pageData.context.posts);
  fs.writeFile(filePath, dataToSave, function(err) {
    if (err) {
      return console.log(err);
    }
  });
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "MarkdownRemark") {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: "slug",
      node,
      value
    });
  }
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "~": __dirname
      }
    }
  });
};
