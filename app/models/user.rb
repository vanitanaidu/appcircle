class User < ApplicationRecord
  has_many :reviews, dependant: :destroy #dependent destroy deletes all the reviews associated to the user when that user gets deleted.
  validates :name, :about_me, :interests, :fav_movies, :fav_food, :user_id, :friend_id, presence: true
end
