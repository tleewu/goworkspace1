json.extract! workspace, :id, :name, :lat, :lng, :overall, :wifi, :power, :weekday_opening,
                         :weekday_closing, :weekend_opening, :weekend_closing,
                         :seating, :pricing, :profile_image_url

json.images do
  json.array!(workspace.images) do |image|
    json.url image.url
  end
end

json.reviews workspace.reviews, :body, :overall, :wifi, :power, :seating,
                                :pricing, :updated_at

#TODO: I need to figure out how to nest the user into the reviews. Is this an
# n+1 query?
