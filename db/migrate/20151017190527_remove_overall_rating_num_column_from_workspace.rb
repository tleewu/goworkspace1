class RemoveOverallRatingNumColumnFromWorkspace < ActiveRecord::Migration
  def change
    remove_columns :workspaces, :num_overall_ratings
  end
end
