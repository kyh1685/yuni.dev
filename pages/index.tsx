import { allPosts } from "@/.contentlayer/generated";
import { GetStaticProps, InferGetStaticPropsType } from "next";

import CustomHead from "@/components/CustomHead";
import Profile from "@/components/Profile";
import PostList from "@/components/PostList";

const Home = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <CustomHead type="home" />
      <Profile />
      <section className="my-14">
        <h1 className="font-bold sm:text-3xl text-2xl mb-5">Recent Posts</h1>
        <PostList posts={posts} />
      </section>
    </>
  );
};

export const getStaticProps: GetStaticProps = () => {
  const posts = allPosts.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));

  return {
    props: {
      posts: posts.slice(0, 5),
    },
  };
};

export default Home;
