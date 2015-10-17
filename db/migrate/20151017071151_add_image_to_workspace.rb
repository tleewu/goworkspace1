class AddImageToWorkspace < ActiveRecord::Migration
  def change
    add_column :workspaces, :image_id, :integer
    add_index :workspaces, :image_id
  end
end
