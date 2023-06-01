import { allPosts, Post } from "@/.contentlayer/generated";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { ChangeEvent, useState } from "react";

import CustomHead from "@/components/CustomHead";
import Search from "@/components/Search";
import PostList from "@/components/PostList";

const Blog = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [search, setSearch] = useState("");

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(() => e.target.value.toLowerCase());
  };

  return (
    <>
      <CustomHead type="blog" />
      <section className="w-full">
        <Search onChange={handleSearch} />
        <PostList posts={posts.filter((post: Post) => post.title.toLowerCase().includes(search))} />
      </section>
    </>
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
