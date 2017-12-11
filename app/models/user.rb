class User < ApplicationRecord

  has_many :reviews, dependent: :destroy #dependent destroy deletes all the reviews associated to the user when that user gets deleted.
    validates :name, :about_me, :interests, :past_jobs, :fav_movies, :fav_food, :friend_id, presence: true
end
