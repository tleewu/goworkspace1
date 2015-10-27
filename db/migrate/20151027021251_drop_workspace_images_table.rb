class DropWorkspaceImagesTable < ActiveRecord::Migration
  def change
    drop_table :workspace_images
  end
end
