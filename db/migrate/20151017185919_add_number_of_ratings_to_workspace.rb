class AddNumberOfRatingsToWorkspace < ActiveRecord::Migration
  def change
    add_column :workspaces, :num_wifi_ratings, :integer, null: false, default: 0
    add_column :workspaces, :num_power_ratings, :integer, null: false, default: 0
    add_column :workspaces, :num_seating_ratings, :integer, null: false, default: 0
    add_column :workspaces, :num_pricing_ratings, :integer, null: false, default: 0

  end
end
