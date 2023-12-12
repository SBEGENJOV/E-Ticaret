import "./Reviews.css"
import ReviewsForm from "./ReviewsForm"
import ReviewsItem from "./ReviewsItem"

const Reviews = () => {
  return (
    <div className="tab-panel-reviews">
          <h3>2 reviews for Basic Colored Sweatpants With Elastic Hems</h3>
          <div className="comments">
            <ol className="comment-list">
            <ReviewsItem/>
            <ReviewsItem/>
            </ol>
          </div>
          <div className="review-form-wrapper">
            <h2>Add a review</h2>
           <ReviewsForm/>
          </div>
        </div>
  )
}

export default Reviews