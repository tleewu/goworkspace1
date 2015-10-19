class Workspace < ActiveRecord::Base
  validates :name, :lat, :lng, :overall, :wifi, :power, :seating, :weekday_opening,
    :weekday_closing, :weekend_opening, :weekend_closing, presence: true
  validates :overall, :wifi, :power, :seating, numericality: {greater_than_or_equal_to: 0,
    less_than_or_equal_to: 5}

  has_many :workspace_images
  belongs_to :image
  has_many :reviews

  def self.select_open_spots
    current_time = Time.now

    if !current_time.saturday? && !current_time.sunday?
      return self.where("extract(hour from weekday_opening) <= ?", current_time.hour)
                 .where("extract(hour from weekday_closing) >= ?", current_time.hour)

    else
      return self.where("extract(hour from weekend_opening) <= ?", current_time.hour)
                 .where("extract(hour from weekend_closing) >= ?", current_time.hour)
    end
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
      return Workspace.all
    end
  end
end
