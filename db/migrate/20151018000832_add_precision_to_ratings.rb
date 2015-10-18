class AddPrecisionToRatings < ActiveRecord::Migration
  def change
    change_column :workspaces, :seating, :float, default: 0.0, null: false, precision: 2
    change_column :workspaces, :power, :float, default: 0.0, null: false, precision: 2
    change_column :workspaces, :overall, :float, default: 0.0, null: false, precision: 2
    change_column :workspaces, :wifi, :float, default: 0.0, null: false,  precision: 2
    change_column :workspaces, :pricing, :float, default: 0.0, null: false, precision: 2
  end
end
