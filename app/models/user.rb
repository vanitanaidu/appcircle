class User < ApplicationRecord
  validates :name, :age, :state, :city, :interests, presence: true

  has_many :reviews, dependent: :destroy #dependent destroy deletes all the reviews associated to the user when that user gets deleted.


<<<<<<< HEAD
=======

>>>>>>> 25b94055ebf230b98a9199fbddaab6040df633a7
  def as_json(_opts = {})
    {
      id: id,
      errors: errors,
      name: name,
      age: age,
      about_me: about_me,
      interests: interests,
      past_jobs: past_jobs,
      fav_movies:fav_movies,
      fav_food: fav_food,
      state: state,
      city: city,
      languages: languages,
      schools: schools,
      likes: likes,
    }
  end
end
