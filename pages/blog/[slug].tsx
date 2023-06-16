import { allPosts } from "@/.contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, InferGetStaticPropsType } from "next";

import CustomHead from "@/components/CustomHead";
import Tags from "@/components/Tags";
import Utterances from "@/components/Utterances";

const Post = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const MDXComponent = useMDXComponent(post.body.code);

  return (
    <>
      <CustomHead type="post" post={post} />
      <div className="mb-16 prose dark:prose-invert">
        <h1>{post.title}</h1>
        <MDXComponent />
      </div>
      <Tags tags={post.tags} />
      <Utterances />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: allPosts.map((post) => ({
      params: {
        slug: post._raw.flattenedPath,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = ({ params }: GetStaticPropsContext) => {
  const post = allPosts.find((post) => post._raw.flattenedPath === params?.slug);

  return {
    props: {
      post,
    },
  };
};

export default Post;
