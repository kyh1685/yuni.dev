import { allPosts } from "@/.contentlayer/generated";
import { GetStaticProps, InferGetStaticPropsType } from "next";

import Search from "@/components/Search";
import PostList from "@/components/PostList";

const Blog = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <section>
      <Search />
      <PostList posts={posts} />
    </section>
  );
};

export const getStaticProps: GetStaticProps = () => {
  const posts = allPosts.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));

  return {
    props: {
      posts,
    },
  };
};

export default Blog;
