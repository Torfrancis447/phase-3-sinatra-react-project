class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get '/reviews' do
    review = Review.all
    review.to_json
  end
  get '/reviews/:id' do
    review = Review.find(params[:id])
    review.to_json
  end
  get '/movies/:id/reviews' do
    movie = Movie.find(params[:id])
    reviews = movie.reviews
    reviews.to_json
  end
  
  post '/reviews' do
    review = Review.create(
      rating: params[:rating],
      comment: params[:comment],
      movie_id: params[:movie_id],
      user_id: params[:user_id]
    )
    review.to_json
  end

  patch '/reviews/:id' do
    review = Review.find(params[:id])
    review.update(
      rating: params[:rating],
      comment: params[:comment]
      )
    review.to_json
  end

  delete '/movies/reviews/:id' do
    
    reviews = Review.all
    review = reviews.find(params[:id])    
    review.destroy    
    review.to_json
  end

  get '/movies/:id' do
    movie = Movie.find(params[:id])
    movie.to_json

  end

  get '/movies' do
    movies = Movie.all.order(:title)
    movies.to_json
  end

  post '/movies' do
    movie = Movie.create(
      title: params[:title],
      release_year: params[:release_year],
      summary: params[:summary],
      image_url: params[:image_url],
      genre: params[:genre],
      run_time: params[:run_time]
    )
    movie.to_json

  end

   delete '/movies/:id' do    
    movie = Movies.find(params[:id])    
    movie.destroy    
    movie.to_json
  end

  get '/users/:id' do
    user = User.find(params[:id])
    user.to_json
  end
  
end
