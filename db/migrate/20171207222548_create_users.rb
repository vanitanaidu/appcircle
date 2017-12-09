class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :name
      t.text :about_me
      t.text :interests
      t.text :fav_movies
      t.text :fav_food
      t.string :user_id
      t.string :friend_id

      t.timestamps
    end
  end
end
