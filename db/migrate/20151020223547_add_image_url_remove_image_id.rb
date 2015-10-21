class AddImageUrlRemoveImageId < ActiveRecord::Migration
  def change
    remove_column :workspaces, :image_id
    add_column :workspaces, :profile_image_url, :string
  end
end
