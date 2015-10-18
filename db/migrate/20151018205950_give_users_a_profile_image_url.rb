class GiveUsersAProfileImageUrl < ActiveRecord::Migration
  def change
    remove_column :users, :image_id
    add_column :users, :profile_image_url, :string, default: "http://res.cloudinary.com/goworkspace/image/upload/v1445202159/default_profile_gnluy2.jpg"
  end
end
