class AddLikesToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :likes, :integer
  end
end
