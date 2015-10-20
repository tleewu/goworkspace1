class Image < ActiveRecord::Base
  validates :url, :imageable_id, :imageable_type, presence: true

  belongs_to :imageable, polymorphic: true 
end
