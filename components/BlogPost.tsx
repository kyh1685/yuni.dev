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
      <p className="font-medium sm:text-md text-sm mb-3">{date}</p>
      <h2 className="font-bold sm:text-xl text-lg mb-2 hover:text-[#262626] dark:hover:text-[#ededed]">{title}</h2>
      <p className="font-medium sm:text-lg text-md">{description}</p>
    </Link>
  );
};

export default BlogPost;
