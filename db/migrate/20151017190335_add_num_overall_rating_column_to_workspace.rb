class AddNumOverallRatingColumnToWorkspace < ActiveRecord::Migration
  def change
    add_column :workspaces, :num_overall_ratings, :integer, null: false, default: 0
  end
end
