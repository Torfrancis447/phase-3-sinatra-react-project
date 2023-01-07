puts "🌱 Seeding data..."
User.destroy_all
Movie.destroy_all
Review.destroy_all
###############

u1 = User.create(name: "Tor Francis")
#######
Movie.create(title: "Puss in Boots: The Last Wish", 
image_url:"https://www.dreamworks.com/storage/cms-uploads/puss-in-boots-the-last-wish-poster-thumbnail2.jpg", run_time: 148 , release_year: 2022, genre: "Adventure", 
summary:"Peter Parker is unmasked and also no longer able to divide his normal life from the high-stakes of being a super-hero. 
When he requests help from Physician Strange the risks come to be much more dangerous, forcing him to find what it truly suggests to be Spider-Man.")

Movie.create(title: "Avatar: The Way of Water", 
image_url:"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS4LOBdltP7rNDmLqOn9_Ak2lTNbmWP8K8-4RHSb5m6j2UyBw-p", run_time: 125 , release_year: 2022, genre: "Action", 
summary:"Jake Sully and Ney'tiri have formed a family and are doing everything to stay together. However, they must leave their home and explore the 
regions of Pandora. When an ancient threat resurfaces, Jake must fight a difficult war against the humans.")

Movie.create(title: "M3GAN", 
image_url:"https://dx35vtwkllhj9.cloudfront.net/universalstudios/megan/images/regions/us/onesheet.jpg", run_time: 165 , release_year: 2022, genre: "Horror", 
summary:"M3GAN is a marvel of artificial intelligence, a lifelike doll that's programmed to be a child's greatest companion and a parent's greatest 
ally. Designed by Gemma, a brilliant roboticist, M3GAN can listen, watch and learn as it plays the role of friend and teacher, playmate and protector. 
When Gemma becomes the unexpected caretaker of her 8-year-old niece, she decides to give the girl an M3GAN prototype, a decision that leads to unimaginable 
consequences.")

Movie.create(title: "A Man Called Otto", 
image_url:"https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcScPwumGqcXr30LiIWm6BJt22QnNGYsLd6LJkZlyy-nEXPmejB6", run_time: 200 , release_year: 2022, genre: "Comedy", 
summary:"When a lively young family moves in next door, grumpy widower Otto Anderson meets his match in a quick-witted, pregnant woman named Marisol, leading to 
an unlikely friendship that turns his world upside down.")

#########
Review.create(rating: 10, comment:"Very Boring", movie_id:1, user_id: 1)
Review.create(rating: 3, comment:"Very Boring", movie_id:3, user_id: 1)
Review.create(rating: 5, comment:"Very Boring", movie_id:2, user_id: 1)
Review.create(rating: 6, comment:"Very Boring", movie_id:4, user_id: 1)
Review.create(rating: 9, comment:"Very Boring", movie_id:2, user_id: 1)

puts "✅ Done seeding!"
