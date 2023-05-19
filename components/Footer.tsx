import Contact from "./Contact";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center pt-10 pb-6 border-t-2">
      <Contact />
      <div className="text-sm mt-4">Copyright © 2023 Yunhee Kim</div>
      <a href="/" className="text-xs mt-2">
        yuni.dev
      </a>
    </footer>
  );
};

export default Footer;
