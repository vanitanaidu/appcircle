class User < ApplicationRecord
  validates :name, :about_me, :interests, :past_jobs, :fav_movies, :fav_food, presence: true

  has_many :reviews, dependent: :destroy #dependent destroy deletes all the reviews associated to the user when that user gets deleted.
  has_many :photos, dependent: :destroy
  accepts_nested_attributes_for :photos, allow_destroy: true


  def as_json(_opts = {})
    {
      id: id,
      errors: errors,
      name: name,
      about_me: about_me,
      interests: interests,
      past_jobs: past_jobs,
      fav_movies:fav_movies,
      fav_food: fav_food,

      profile_pics: photos.map do |x|
        {
          url: x.photo.url.absolute_url,
          name: x.photo_file_name,
          id: x.id
        }
      end
    }
  end
end
