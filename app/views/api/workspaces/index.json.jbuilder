json.array!(@workspaces) do |workspace|
  json.id workspace.id
  json.name workspace.name
  json.lat workspace.lat
  json.lng workspace.lng
  json.overall workspace.overall
  json.wifi workspace.wifi
  json.power workspace.power
  json.seating workspace.seating
  json.weekday_opening workspace.weekday_opening
  json.weekday_closing workspace.weekday_closing
  json.weekend_opening workspace.weekend_opening
  json.weekend_closing workspace.weekend_closing

  json.image_url do
    if workspace.image
      workspace.image.url
    else
      ""
    end
  end

  json.images do
    json.array!(workspace.workspace_images) do |json, image|
      json.url image.url
    end
  end
end
