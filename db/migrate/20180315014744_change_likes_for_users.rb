class ChangeLikesForUsers < ActiveRecord::Migration[5.0]
  def change
    change_column :users, :likes, :integer, :default => 0
  end
end
