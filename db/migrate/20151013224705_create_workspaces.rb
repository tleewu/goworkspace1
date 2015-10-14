class CreateWorkspaces < ActiveRecord::Migration
  def change
    create_table :workspaces do |t|
      t.string :name, null: false
      t.float :lat, null: false
      t.float :lng, null: false
      t.integer :overall, null: false, default: 0
      t.integer :wifi, null: false, default: 0
      t.integer :power, null: false, default: 0
      t.integer :seating, null: false, default: 0

      t.time :weekday_opening, null: false
      t.time :weekday_closing, null: false

      t.time :weekend_opening, null: false
      t.time :weekend_closing, null: false
      t.timestamps null: false
    end
  end
end
