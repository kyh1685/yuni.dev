import { Post } from "contentlayer/generated";
import Head from "next/head";

import { meta } from "@/data/metadata";

interface Props {
  post?: Post;
  type: "home" | "blog" | "post";
}

const CustomHead = ({ type, post }: Props) => {
  return type === "post" ? (
    <Head>
      <title>{post?.title} | Yuni.dev</title>
      <meta name="description" content={post?.description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta property="og:url" content={`${meta.url}/blog/${post?._raw.flattenedPath}`} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={`${post?.title} | Yuni.dev`} />
      <meta property="og:description" content={post?.description} />
      <meta property="og:image" content={`${meta.url}/static/profile.jpg`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="yuni-dev.vercel.app" />
      <meta property="twitter:url" content={`${meta.url}/blog/${post?._raw.flattenedPath}`} />
      <meta name="twitter:title" content={`${post?.title} | Yuni.dev`} />
      <meta name="twitter:description" content={post?.description} />
      <meta name="twitter:image" content={`${meta.url}/static/profile.jpg`} />
    </Head>
  ) : (
    <Head>
      <title>{type === "home" ? meta.title : "Blog | Yuni.dev"}</title>
      <meta name="description" content={meta.description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      <meta property="og:url" content={`${meta.url}${type === "blog" ? "/blog" : ""}`} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={type === "home" ? meta.title : "Blog | Yuni.dev"} />
      <meta property="og:description" content={meta.description} />
      <meta property="og:image" content={`${meta.url}/static/profile.jpg`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content="yuni-dev.vercel.app" />
      <meta property="twitter:url" content={`${meta.url}${type === "blog" ? "/blog" : ""}`} />
      <meta name="twitter:title" content={type === "home" ? meta.title : "Blog | Yuni.dev"} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={`${meta.url}/static/profile.jpg`} />
    </Head>
  );
};

export default CustomHead;
