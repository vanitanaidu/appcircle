class User < ApplicationRecord
  validates :name, :age, :state, :city, :interests, presence: true

  has_many :reviews, dependent: :destroy #dependent destroy deletes all the reviews associated to the user when that user gets deleted.
  # has_many :photos, dependent: :destroy
  # accepts_nested_attributes_for :photos, allow_destroy: true


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
    }
  end
end
