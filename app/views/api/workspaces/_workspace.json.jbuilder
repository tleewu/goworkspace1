json.extract! workspace, :id, :name, :lat, :lng, :overall, :wifi, :power, :weekday_opening,
                         :weekday_closing, :weekend_opening, :weekend_closing,
                         :seating, :pricing, :profile_image_url

json.images do
  json.array!(workspace.images) do |image|
    json.url image.url
  end
end

json.reviews workspace.reviews, :id, :body, :overall, :wifi, :power, :seating,
                                :pricing, :updated_at, :user
