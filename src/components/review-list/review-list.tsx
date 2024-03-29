import ReviewForm from '../review-form/review-form';
import Review from '../reviw/review';
import { Comment, CommentAuth } from '../../types/comment';
import { AuthorizationStatus, SubmitStatus } from '../../constant';

type ReviewListProps = {
  reviews: Comment[];
  authorizationStatus: AuthorizationStatus;
  onSubmit: (formData: Omit<CommentAuth, 'id'>) => void;
  submitStatus: SubmitStatus;
}

function reviewList({ reviews, authorizationStatus, onSubmit, submitStatus }: ReviewListProps): JSX.Element {
  if (reviews.length === 0) {
    return (
      <section className="property__reviews reviews">
        {authorizationStatus === AuthorizationStatus.Auth && <ReviewForm onSubmit={onSubmit} submitStatus={submitStatus} />}
      </section>
    );
  }

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviews.map((review) => (
          <Review key={review.id} {...review} />
        ))}
      </ul>
      {authorizationStatus === AuthorizationStatus.Auth && <ReviewForm onSubmit={onSubmit} submitStatus={submitStatus} />}
    </section>
  );
}

export default reviewList;

