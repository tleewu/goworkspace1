class CreateWorkspaceImages < ActiveRecord::Migration
  def change
    create_table :workspace_images do |t|
      t.string :url, null: false
      t.integer :workspace_id, null: false
      t.integer :user_id, null: false
      t.timestamps null: false
    end

    add_index :workspace_images, [:user_id, :workspace_id]
  end
end
