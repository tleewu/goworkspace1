class WorkspaceImage < ActiveRecord::Base
  validates :user_id, :workspace_id, :url, presence: true

  belongs_to :user

  belongs_to :workspace
end
