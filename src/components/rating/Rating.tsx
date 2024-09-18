import "./rating.scss";
import Star from "../../assets/Star";

type RatingProps = {
  rating: string
}

const Rating = ({ rating }: RatingProps) => {
    
  return (
    <div className={"rating"}>
      {[1, 2, 3, 4, 5].map((r) => (
        <Star key={"rating" + r} className={Number(rating) >= r ? "active" : ""} />
      ))}
    </div>
  );
};

export default Rating;
