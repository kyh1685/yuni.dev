interface Props {
  tags: string[];
}

const Tags = ({ tags }: Props) => {
  return (
    <ul>
      {tags.map((tag: string) => (
        <li className="inline-block text-sm mr-3 px-4 py-1 bg-[#ededed] dark:bg-[#262626] rounded-md" key={tag}>
          {tag}
        </li>
      ))}
    </ul>
  );
};

export default Tags;
