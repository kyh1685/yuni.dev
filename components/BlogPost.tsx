import Link from "next/link";

import Tags from "./Tags";

interface Props {
  title: string;
  description: string;
  date: string;
  slug: string;
  tags: string[];
}

const BlogPost = ({ title, description, date, slug, tags }: Props) => {
  return (
    <Link href={`/blog/${slug}`}>
      <h2 className="font-bold sm:text-xl text-lg mb-2">{title}</h2>
      <p className="font-medium text-md text-[#262626] dark:text-[#9ba1a6]">{description}</p>
      <div className="flex items-center mt-3 justify-between">
        <Tags tags={tags} />
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" className="mr-2">
            <path
              className="fill-[#262626] dark:fill-[#9ba1a6]"
              d="M19,2H18V1a1,1,0,0,0-2,0V2H8V1A1,1,0,0,0,6,1V2H5A5.006,5.006,0,0,0,0,7V19a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V7A5.006,5.006,0,0,0,19,2ZM2,7A3,3,0,0,1,5,4H19a3,3,0,0,1,3,3V8H2ZM19,22H5a3,3,0,0,1-3-3V10H22v9A3,3,0,0,1,19,22Z"
            />
          </svg>
          <span className="text-sm text-[#262626] dark:text-[#9ba1a6]">{date}</span>
        </div>
      </div>
    </Link>
  );
};

export default BlogPost;
