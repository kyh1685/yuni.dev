import Contact from "./Contact";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center py-8 border-t-2 bg-[#fafafa] text-[#16181a] dark:bg-[#16181a] dark:text-[#ecedee] transition duration-500">
      <Contact />
      <div className="text-sm mt-4">Copyright © 2023 Yunhee Kim</div>
      <a href="/" className="text-xs mt-2">
        yuni.dev
      </a>
    </footer>
  );
};

export default Footer;
