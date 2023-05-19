import Link from "next/link";

const posts = [
  { title: "첫번째 글입니다!", description: "우와 블로그 첫번째 글이에요~!", link: "/" },
  { title: "두번째 글입니다!", description: "벌써 두번째 글이에요!", link: "/" },
];

const RecentPosts = () => {
  return (
    <section className="my-10">
      <h1 className="text-3xl mb-5">📝 Recent Posts</h1>
      <div>
        {posts.map((post) => (
          <Link href={post.link} className="m-2">
            <h2 className="mb-2 text-xl font-medium">{post.title}</h2>
            <p>{post.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RecentPosts;
