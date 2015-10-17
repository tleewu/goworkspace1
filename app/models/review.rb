class Review < ActiveRecord::Base
  validates :user_id, :workspace_id, :body, :overall, presence: true

  belongs_to :user
  belongs_to :workspace
end
