import "./avatar.scss";

type AvatarProps = {
  name: string,
  image: string,
  heading?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}

const Avatar = ({ name, image, heading = "h1" }: AvatarProps) => {
  const Heading = heading;
  return (
    <article className="avatar">
      <Heading className="avatar-title">{name}</Heading>
      <img src={image} alt={`image de ${name}`} />
    </article>
  );
};

export default Avatar;
