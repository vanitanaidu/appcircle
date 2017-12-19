class AddSchoolsToUsers < ActiveRecord::Migration[5.0]
  def change
    add_column :users, :schools, :string
  end
end
