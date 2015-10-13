class ChangeUserColumnForProfilePicture < ActiveRecord::Migration
  def change
    remove_column :users, :profile_image_url
    add_column :users, :image_id, :integer
    add_index :users, :image_id
  end
end
