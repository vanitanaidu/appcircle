class AddAttachmentProfilepicToPhotos < ActiveRecord::Migration[5.0]
  def self.up
    change_table :photos do |t|
      t.attachment :profilepic
    end
  end

  def self.down
    remove_attachment :photos, :profilepic
  end
end
