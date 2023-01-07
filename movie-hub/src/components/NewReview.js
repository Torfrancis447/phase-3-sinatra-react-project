import React, {useState} from "react"

function NewReview({movie, setReview}) {
  const [rating, setRating] = useState("");
  const [comment, setComment] = useState("");
  const SERVER_URL = "http://localhost:9292";

  function handleSubmit(e) {
    e.preventDefault();
    const newReview = {
      rating: rating,
      comment: comment,
      movie_id: movie.id,
      user_id: 1,
    };

    fetch(`${SERVER_URL}/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newReview),
    }).then(() => {
      fetch(`${SERVER_URL}/movies/${movie.id}/reviews`)
        .then((r) => r.json())
        .then((reviewsData) => setReview(reviewsData));
    });

    setRating("");
    setComment("");
  }
    return (
      <div >
        <form onSubmit={handleSubmit}>
        <h3>Add a New Review</h3>
        
        <input
          value={rating}
          onChange={(e) =>
            e.target.value <= 10 && e.target.value >= 0
              ? setRating(e.target.value)
              : null
          }
          type="number"
          name="rating"
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
        
        <button type="submit"> Add Review </button>
      </form>        
      </div>
    );
  }
  
  export default NewReview;