import React, { useState, useEffect } from "react";
import NewReview from "./NewReview";
import Review from "./Review";


function MoviesCard({ movie, deleteMovie, addNewMovie}) {
  const [reviews, setReviews] = useState([]);
  const [showReviewsList, setShowReviewsList] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:9292/movies/${movie.id}/reviews`)
      .then((r) => r.json())
      .then((data) => setReviews(data));
  }, [movie.id]);

  function handleReviews() {
    setShowReviewsList(!showReviewsList);
  }

  function deleteReview(id) {
    fetch(`http://localhost:9292/movies/reviews/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    })
      .then((r) => r.json())
      .then((data) => data);

    setReviews((prevReviews) =>
      prevReviews.filter((review) => review.id !== id)
    );
  }

  function handleDeleteMovie() {
    deleteMovie(movie.id);
  }
  

  return (
    <div className="card">
      <h1>{movie.title}</h1>
      <img src={movie.image_url} alt={movie.title}></img>
      <h2>Year Released: {movie.release_year}</h2>
      <h2>{movie.summary}</h2>
      <p>Genre: {movie.genre}</p>
      <p>Run Time: {movie.run_time} Minutes </p>
      <button onClick={handleDeleteMovie}>Delete Movie</button>

      <div>
        <button value={movie} onClick={handleReviews}>
          Reviews
        </button>
        {showReviewsList &&
          reviews.map((review) => (
            <Review
              review={review}
              deleteReview={deleteReview}
              setReview={setReviews}
              key={review.id}
            />
          ))}
      </div>
      <ul>
      <NewReview movie={movie} setReview={setReviews} />
      </ul>     
    </div>
  );
}

export default MoviesCard;