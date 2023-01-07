
import React, { useState } from "react";

function CreateMovie({addNewMovie}) {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [releaseYear, setReleaseYear] = useState("");
  const [summary, setSummary] = useState("");
  const [genre, setGenre] = useState("");
  const [runTime, setRunTime] = useState("");

  const SERVER_URL = "http://localhost:9292";

 function handleSubmit(e) {
    e.preventDefault();
    const newMovie = {
      title: title,
      image_url: imageUrl,
      release_year: releaseYear,
      summary: summary,
      genre: genre,
      run_time: runTime,
    };
  

    fetch(`${SERVER_URL}/movies`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMovie),
      })
       .then((response) => {
        if (!response.ok) {
          throw new Error("Something went wrong!");
         }
        return response.json();
       })
    // .then(() => {
    //   fetch(`${SERVER_URL}/movies`)
    //     .then((r) => r.json())
    //     .then((data) => (data));
    // });
    
    addNewMovie(newMovie)
    setTitle("");
    setImageUrl("");
    setReleaseYear("");
    setSummary("");
    setGenre("");
    setRunTime("");
  }

  return (
    <div className="card">
      <form onSubmit={handleSubmit}>
        <h2>Add a New Movie</h2>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          name="title"
          placeholder="Title"
        />
        <input
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          type="text"
          name="image_url"
          placeholder="Image URL"
        />
        <input
          value={releaseYear}
          onChange={(e) => setReleaseYear(e.target.value)}
          type="number"
          name="release_year"
          placeholder="Release Year"
        />
        <input
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          type="text"
          name="summary"
          placeholder="Summary"
        />
        <input
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          type="text"
          name="genre"
          placeholder="Genre"
        />
        <input
          value={runTime}
          onChange={(e) => setRunTime(e.target.value)}
          type="number"
          name="run_time"
          placeholder="Run Time"
        />
        <button type="submit">Add Movie</button>
      </form>
    </div>
  );
}

export default CreateMovie;