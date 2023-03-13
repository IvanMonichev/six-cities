import ReviewForm from '../review-form/review-form';
import Review from '../reviw/review';
import { Comment } from '../../types/comment';

type ReviewListProps = {
  reviews: Comment[];
}

function reviewList({ reviews }: ReviewListProps): JSX.Element {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) => (
          <Review key={review.id} {...review} />
        ))}
      </ul>
      <ReviewForm />
    </section>
  );
}

export default reviewList;

