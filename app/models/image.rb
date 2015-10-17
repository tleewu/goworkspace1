class Image < ActiveRecord::Base
  validates :url, presence: true

  has_many :users
  has_many :workspaces
end
