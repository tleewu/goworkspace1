class Workspace < ActiveRecord::Base
  validates :name, :lat, :lng, :overall, :wifi, :power, :seating, :weekday_opening,
    :weekday_closing, :weekend_opening, :weekend_closing, presence: true
  validates :overall, :wifi, :power, :seating, numericality: {greater_than_or_equal_to: 0,
    less_than_or_equal_to: 5}

  has_many :workspace_images
  belongs_to :image
  has_many :reviews

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

  def update_rating_for (rating, new_rating)
    case (rating)
    when (:wifi)
      num_rating_reviews = self.num_wifi_ratings
      self.num_wifi_ratings += 1
    when (:power)
      num_rating_reviews = self.num_power_ratings
      self.num_power_ratings += 1
    when (:seating)
      num_rating_reviews = self.num_seating_ratings
      self.num_seating_ratings += 1
    when (:pricing)
      num_rating_reviews = self.num_pricing_ratings
      self.num_pricing_ratings += 1
    end

    self[rating] = (num_rating_reviews * self[rating] + new_rating) / (num_rating_reviews + 1)

  end

  def self.update_ratings (parameters)
    workspace = self.find_by_id (parameters[:workspace_id])
    num_of_reviews = workspace.reviews.length

    workspace.overall = (workspace.overall * (num_of_reviews - 1) + parameters[:overall].to_f) / num_of_reviews

    workspace.update_rating_for(:wifi, parameters[:wifi].to_f) if parameters[:wifi]
    workspace.update_rating_for(:power, parameters[:power].to_f) if parameters[:power]
    workspace.update_rating_for(:seating, parameters[:seating].to_f) if parameters[:seating]
    workspace.update_rating_for(:pricing, parameters[:pricing].to_f) if parameters[:pricing]

    workspace.save!
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


      all_workspaces = Workspace.includes(:workspace_images)
                                .where("lat > ?", lower_lat)
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
