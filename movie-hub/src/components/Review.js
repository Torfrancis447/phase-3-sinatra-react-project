
import React, { useState } from "react";

function Review({ review, deleteReview, setReview }) {
  const [showEdit, setShowEdit] = useState(false);
  const [comment, setComment] = useState(review.comment);
  const [rating, setRating] = useState(review.rating);

  function handleEdit(e) {
    e.preventDefault();

    fetch(`http://localhost:9292/reviews/${review.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        rating: rating,
        comment: comment,
      }),
    })
      .then((r) => r.json())
      .then((data) => data);

    fetch(`http://localhost:9292/movies/${review.movie_id}/reviews`)
      .then((r) => r.json())
      .then((data) => setReview(data));

    setShowEdit(!showEdit);
  }
  function handleClick() {
    deleteReview(review.id);
  }

  return (
    <div>
      <h3>Rating:</h3>
      <h4>{review.rating} / 10</h4>
      <h3>Comment: </h3>
      <p>{review.comment}</p>

      <button onClick={handleClick}>Delete Review</button>
      <button onClick={handleEdit}>Edit Review</button>
      {showEdit ? (
        <div className="card">
          <form onSubmit={handleEdit}>
            <h3>Edit Review</h3>

            <input
              name="rating"
              value={rating}
              onChange={(e) =>
                e.target.value <= 10 && e.target.value >= 0
                  ? setRating(e.target.value)
                  : null
              }
              type="number"
              placeholder="Rating"
            />

            <input
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              type="text"
              name="comment"
              placeholder="Comment"
            />
            <br />

            <input
              type="submit"
              value="Submit "
            />
          </form>
        </div>
      ) : null}
    </div>
  );
}

export default Review;