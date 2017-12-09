
3.times do
    user = User.create(name: Faker::Science.scientist, about_me: Faker::Seinfeld.quote, interest: Faker::Science.element, fav_movies: Faker::SiliconValley.app, fav_food: Faker::Food.dish , user_id: Faker::Crypto.md5, friend_id: Faker::Crypto.md5 )


 10.times do
    review = Review.create(content: Faker::MostInterestingManInTheWorld.quote)
    review.user = user
    review.save
  end

end
