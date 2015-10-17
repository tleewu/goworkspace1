class ChangeRatingDataTypeToFloat < ActiveRecord::Migration
  def change
    change_column :workspaces, :overall, :float
    change_column :workspaces, :wifi, :float
    change_column :workspaces, :power, :float
    change_column :workspaces, :seating, :float
    change_column :workspaces, :pricing, :float
  end
end
