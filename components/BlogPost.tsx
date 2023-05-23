import Link from "next/link";

interface Props {
  title: string;
  description: string;
  date: string;
  slug: string;
}

const BlogPost = ({ title, description, date, slug }: Props) => {
  return (
    <Link href={`/blog/${slug}`}>
      <p className="mb-3 text-sm">{date}</p>
      <h2 className="mb-2 text-xl font-medium">{title}</h2>
      <p>{description}</p>
    </Link>
  );
};

export default BlogPost;
