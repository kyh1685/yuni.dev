const Utterances = () => {
  return (
    <section
      className="mt-10"
      ref={(el) => {
        if (!el) return;

        const scriptElement = document.createElement("script");

        scriptElement.src = "https://utteranc.es/client.js";
        scriptElement.async = true;
        scriptElement.setAttribute("repo", "kyh1685/yuni.dev_comment");
        scriptElement.setAttribute("issue-term", "pathname");
        scriptElement.setAttribute("theme", "github-light");
        scriptElement.setAttribute("crossorigin", "anonymous");

        el.appendChild(scriptElement);
      }}
    />
  );
};

export default Utterances;
