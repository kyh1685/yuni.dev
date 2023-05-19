import BlogPost from "@/components/BlogPost";

const posts = [
  { title: "첫번째 글입니다!", description: "우와 블로그 첫번째 글이에요~!", link: "/" },
  { title: "두번째 글입니다!", description: "벌써 두번째 글이에요!", link: "/" },
];

const Blog = () => {
  return (
    <section>
      <div className="flex p-5 mb-7 border-[#111] border-2 rounded-lg">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 513.749 513.749" className="w-6 h-6">
          <path d="M504.352,459.061l-99.435-99.477c74.402-99.427,54.115-240.344-45.312-314.746S119.261-9.277,44.859,90.15   S-9.256,330.494,90.171,404.896c79.868,59.766,189.565,59.766,269.434,0l99.477,99.477c12.501,12.501,32.769,12.501,45.269,0   c12.501-12.501,12.501-32.769,0-45.269L504.352,459.061z M225.717,385.696c-88.366,0-160-71.634-160-160s71.634-160,160-160   s160,71.634,160,160C385.623,314.022,314.044,385.602,225.717,385.696z" />
        </svg>
        <input className="w-full ml-5 bg-transparent outline-none" placeholder="Search" />
      </div>
      <div className="flex flex-col gap-10 my-10">
        {posts.map((post) => {
          return <BlogPost title={post.title} description={post.description} date="2023.05.20" />;
        })}
      </div>
    </section>
  );
};

export default Blog;