class Workspace < ActiveRecord::Base
  validates :name, :lat, :lng, :overall, :wifi, :power, :seating, :weekday_opening,
    :weekday_closing, :weekend_opening, :weekend_closing, presence: true
  validates :overall, :wifi, :power, :seating, numericality: {greater_than_or_equal_to: 0,
    less_than_or_equal_to: 5}

  def self.find_all(filters)

    bounds = filters[:bounds]
    workspace = filters[:workspaceName]

    if (bounds)
      lower_lat = bounds[:southWest][:lat]
      upper_lat = bounds[:northEast][:lat]
      lower_lng = bounds[:southWest][:lng]
      upper_lng = bounds[:northEast][:lng]

      if filters[:openNow]
        no_filter_workspace = Workspace.where("lat > ?", lower_lat)
                             .where("lat < ?", upper_lat)
                             .where("lng > ?", lower_lng)
                             .where("lng < ?", upper_lng)
                             .where("name LIKE ?", "%" + workspace + "%")
      else
        no_filter_workspace = Workspace.where("lat > ?", lower_lat)
                             .where("lat < ?", upper_lat)
                             .where("lng > ?", lower_lng)
                             .where("lng < ?", upper_lng)
                             .where("name LIKE ?", "%" + workspace + "%")
      end
      return no_filter_workspace
    else
      return Workspace.all
    end
  end
end
