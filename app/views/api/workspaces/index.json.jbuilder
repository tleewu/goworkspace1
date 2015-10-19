json.array!(@workspaces) do |workspace|
  json.partial! 'api/workspaces/workspace', workspace: workspace
  json.maxSet @max_set
end
