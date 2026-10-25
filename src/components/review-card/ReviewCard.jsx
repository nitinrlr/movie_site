import "./ReviewCard.css";

const ReviewCard = (props) => {
    return (
        <article className="review-card">
            <div className="review-top">
                <p className="review-user">{props.user}</p>
                <p className="review-rating">&#9733; {props.rating}</p>
            </div>
            <p className="review-text">{props.text}</p>
        </article>
    );
};

export default ReviewCard;
