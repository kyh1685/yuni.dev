import { Post } from "contentlayer/generated";
import BlogPost from "./BlogPost";

interface Props {
  posts: Post[];
}

const PostList = ({ posts }: Props) => {
  return (
    <div className="flex flex-col gap-10 my7">
      {posts.map((post: Post) => (
        <BlogPost
          title={post.title}
          description={post.description}
          date={post.date}
          slug={post._raw.flattenedPath}
          tags={post.tags}
          key={post._id}
        />
      ))}
    </div>
  );
};

export default PostList;
