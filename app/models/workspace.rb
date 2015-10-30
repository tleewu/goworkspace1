class Workspace < ActiveRecord::Base
  validates :name, :lat, :lng, :overall, :wifi, :power, :seating, :weekday_opening,
    :weekday_closing, :weekend_opening, :weekend_closing, presence: true
  validates :overall, :wifi, :power, :seating, numericality: {greater_than_or_equal_to: 0,
    less_than_or_equal_to: 5}

  has_many :images, as: :imageable
  has_many :reviews

  def self.select_open_spots
    current_time = Time.now
    update_time = Time.new(2000, 1, 1, current_time.hour, current_time.min)
    if !current_time.saturday? && !current_time.sunday?
      return self.where("weekday_opening <= ?", update_time)
                 .where("weekday_closing >= ?", update_time)

    else
      return self.where("weekend_opening <= ?", update_time)
                 .where("weekend_closing >= ?", update_time)
    end
  end

  def update_rating_for (rating, new_rating, value)
    case (rating)
    when (:wifi)
      num_rating_reviews = self.num_wifi_ratings
      self.num_wifi_ratings += value
    when (:power)
      num_rating_reviews = self.num_power_ratings
      self.num_power_ratings += value
    when (:seating)
      num_rating_reviews = self.num_seating_ratings
      self.num_seating_ratings += value
    when (:pricing)
      num_rating_reviews = self.num_pricing_ratings
      self.num_pricing_ratings += value
    end

    if num_rating_reviews + value == 0
      self[rating] = 0
    else
      self[rating] = (num_rating_reviews * self[rating] + new_rating) / (num_rating_reviews + value)
    end
  end

  def self.update_ratings (parameters)
    workspace = self.find_by_id (parameters[:workspace_id])
    num_of_reviews = workspace.reviews.length

    workspace.overall = (workspace.overall * (num_of_reviews - 1) + parameters[:overall].to_f) / num_of_reviews

    workspace.update_rating_for(:wifi, parameters[:wifi].to_f, 1) if parameters[:wifi]
    workspace.update_rating_for(:power, parameters[:power].to_f, 1) if parameters[:power]
    workspace.update_rating_for(:seating, parameters[:seating].to_f, 1) if parameters[:seating]
    workspace.update_rating_for(:pricing, parameters[:pricing].to_f, 1) if parameters[:pricing]

    workspace.save!
  end

  def reset_all_ratings
    self.wifi = 1
    self.power = 1
    self.seating = 1
    self.overall = 1
    self.pricing = 1

    self.num_wifi_ratings = 0
    self.num_power_ratings = 0
    self.num_pricing_ratings = 0
    self.num_seating_ratings = 0

    self.save!
  end

  def self.update_ratings_when_deleted (review)
    workspace = review.workspace
    num_of_reviews = workspace.reviews.length

    if (num_of_reviews - 1 == 0)
      workspace.reset_all_ratings
    else
      workspace.overall = (workspace.overall * (num_of_reviews) - review.overall.to_f) / (num_of_reviews - 1)

      workspace.update_rating_for(:wifi, -(review.wifi.to_f), -1) if review.wifi
      workspace.update_rating_for(:power, -(review.power.to_f), -1) if review.power
      workspace.update_rating_for(:seating, -(review.seating.to_f), -1) if review.seating
      workspace.update_rating_for(:pricing, -(review.pricing.to_f), -1) if review.pricing

      workspace.save!
    end
  end

  def self.find_all(filters)

    #TODO: how to parse json string "true" to ruby true, check out line 60

    workspace = filters[:workspaceName].downcase || ''

    if (filters[:bounds])

      bounds = filters[:bounds]
      lower_lat = bounds[:southWest][:lat]
      upper_lat = bounds[:northEast][:lat]
      lower_lng = bounds[:southWest][:lng]
      upper_lng = bounds[:northEast][:lng]


      all_workspaces = Workspace.includes(:images)
                                .includes(reviews: :user)
                                .where("lat > ?", lower_lat)
                                .where("lat < ?", upper_lat)
                                .where("lng > ?", lower_lng)
                                .where("lng < ?", upper_lng)
                                .where("lower(name) LIKE ?", "%" + workspace + "%")

     if filters[:openNow] == 'true'
      #  all_workspaces = all_workspaces.select{|workspace| workspace.open_now?}
      all_workspaces = all_workspaces.select_open_spots
     end
     if filters[:overall] == 'true'
       all_workspaces = all_workspaces.order(overall: :desc)
     end

     if filters[:wifi] == 'true'
       all_workspaces = all_workspaces.order(wifi: :desc)
     end

     if filters[:power] == 'true'
       all_workspaces = all_workspaces.order(power: :desc)
     end

     if filters[:seating] == 'true'
       all_workspaces = all_workspaces.order(seating: :desc)
     end

     if filters[:pricing] == 'true'
       all_workspaces = all_workspaces.order(pricing: :asc)
     end

     return all_workspaces
    else
      return []
    end
  end
end
