import { allPosts } from "@/.contentlayer/generated";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext, InferGetStaticPropsType } from "next";
import { useMDXComponent } from "next-contentlayer/hooks";

const Post = ({ post }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const MDXComponent = useMDXComponent(post.body.code);

  return (
    <div className="mb-20 prose">
      <h1>{post.title}</h1>
      <MDXComponent />
    </div>
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
