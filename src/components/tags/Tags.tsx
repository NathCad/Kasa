import "./tags.scss";

type TagProps = {
  tags: string[]
}

const Tags = ({ tags }:TagProps) => {
  return (
    <ul className="tags">
      {tags.map((item, idx) => (
        <li key={"tag" + idx}>{item}</li>
      ))}
    </ul>
  );
};

export default Tags;
