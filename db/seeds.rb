
13.times do
    user = User.create(
    name: Faker::Science.scientist,
    about_me: Faker::Seinfeld.quote,
    past_jobs: Faker::Company.profession,
    interests: Faker::Science.element,
    fav_movies: Faker::SiliconValley.app,
    fav_food: Faker::Food.dish,
    friend_id: Faker::Crypto.md5,
    age: Faker::Number.between(40, 80),
    state: Faker::Address.state,
    city: Faker::Address.city,
    languages: Faker::Demographic.race,
    schools: Faker::University.name
    )


 10.times do
    review = Review.create(content: Faker::MostInterestingManInTheWorld.quote)
    review.user = user
    review.save
  end

end
