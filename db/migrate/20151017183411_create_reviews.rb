class CreateReviews < ActiveRecord::Migration
  def change
    create_table :reviews do |t|
      t.integer :user_id, null: false
      t.integer :workspace_id, null: false
      t.text :body, null: false
      t.integer :overall, null: false

      t.integer :wifi
      t.integer :power
      t.integer :seating
      t.integer :pricing
      t.timestamps null: false
    end

    add_column :workspaces, :pricing, :integer, null: false, default: 0
    add_index :reviews, [:user_id, :workspace_id]
  end
end
