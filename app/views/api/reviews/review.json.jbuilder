json.extract! @review, :id, :user_id, :workspace_id, :body, :overall, :wifi, :power,
                       :seating, :pricing, :updated_at

json.user @review.user
