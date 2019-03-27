import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import Bio from "~/src/components/Bio";
import Layout from "~/src/components/Layout";
import SEO from "~/src/components/SEO";
import Footer from "~/src/components/Footer";
import BlogIndexPosts from "~/src/components/BlogIndexPosts";
import { LocationProvider } from "~/src/context/LocationContext";
import { pathJsonIndex } from "~/src/utils/path";

const BlogIndex: React.SFC<IBlogIndexProps> = ({ location, pageContext }) => {
  const defaultPage = 2;
  const defaultKey = "fetch" as "fetch" | "refresh";

  const { posts: firstPosts } = pageContext;
  const [more, setMore] = useState(true);
  const [page, setPage] = useState(defaultPage);
  const [key, setKey] = useState(defaultKey);
  const [posts, setPosts] = useState(firstPosts);

  const fetchData = () => {
    fetch(pathJsonIndex(page))
      .then((res) => res.json())
      .then(
        (newPosts) => {
          setPosts((prevPost) => {
            for (let post of newPosts) prevPost.push(post);
            return prevPost;
          });
          setPage((prevPage) => prevPage + 1);
        },
        (reason) => {
          console.log(reason);

          if (
            `${reason}`.indexOf("SyntaxError: Unexpected token < in JSON") > -1
          ) {
            setKey("refresh");
            setMore(false);
          }
        }
      );
  };

  const refresh = () => {
    fetch(pathJsonIndex())
      .then((res) => res.json())
      .then(
        (newPosts) => {
          setPosts((_) => {
            return newPosts;
          });
          setPage((_) => defaultPage);
          setKey("fetch");
          setMore(true);
        },
        (reason) => {
          console.log(reason);
        }
      );
  };

  return (
    <InfiniteScroll
      key={key}
      scrollThreshold={0.99}
      dataLength={posts.length} //This is important field to render the next data
      next={fetchData}
      hasMore={more}
      refreshFunction={refresh}
      pullDownToRefresh
      pullDownToRefreshContent={
        <h3 style={{ color: "var(--textNormal)", textAlign: "center" }}>
          &#8595; Pull down to refresh
        </h3>
      }
      releaseToRefreshContent={
        <h3 style={{ color: "var(--textNormal)", textAlign: "center" }}>
          &#8593; Release to refresh
        </h3>
      }
    >
      <LocationProvider location={location}>
        <Layout>
          <SEO keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
          <Bio />
          <BlogIndexPosts posts={posts} />
          <Footer />
        </Layout>
      </LocationProvider>
    </InfiniteScroll>
  );
};

interface IBlogIndexProps {
  data: any;
  location: any;
  pageContext: any;
}

export default BlogIndex;
