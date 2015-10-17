class Workspace < ActiveRecord::Base
  validates :name, :lat, :lng, :overall, :wifi, :power, :seating, :weekday_opening,
    :weekday_closing, :weekend_opening, :weekend_closing, presence: true
  validates :overall, :wifi, :power, :seating, numericality: {greater_than_or_equal_to: 0,
    less_than_or_equal_to: 5}

  has_many :workspace_images
  has_one :image

  def open_now?
    #TODO: needs to be refactored...please.
    current_time = Time.now

    if !current_time.saturday? && !current_time.sunday?
      if current_time.hour >= self.weekday_opening.hour && current_time.hour <= self.weekday_closing.hour
        if current_time.hour == self.weekday_opening.hour
          if current_time.min < self.weekday_opening.min
            return false
          end
        elsif current_time.hour == self.weekday_closing.hour
          if current_time.min > self.weekday_closing.min
            return false
          end
        end
        return true
      end
    else
      if current_time.hour == self.weekend_opening.hour
        if current_time.min < self.weekend_opening.min
          return false
        end
      elsif current_time.hour == self.weekend_closing.hour
        if current_time.min > self.weekend_closing.min
          return false
        end
      end
      return true
    end

    return false
  end

  def self.find_all(filters)

    #TODO: how to parse json string "true" to ruby true, check out line 60

    workspace = filters[:workspaceName] || ''

    if (filters[:bounds])

      bounds = filters[:bounds]
      lower_lat = bounds[:southWest][:lat]
      upper_lat = bounds[:northEast][:lat]
      lower_lng = bounds[:southWest][:lng]
      upper_lng = bounds[:northEast][:lng]


      all_workspaces = Workspace.where("lat > ?", lower_lat)
                                .where("lat < ?", upper_lat)
                                .where("lng > ?", lower_lng)
                                .where("lng < ?", upper_lng)
                                .where("name LIKE ?", "%" + workspace + "%")
     if filters[:openNow] == 'true'
       all_workspaces = all_workspaces.select{|workspace| workspace.open_now?}
     end

     return all_workspaces
    else
      return Workspace.all
    end
  end
end
