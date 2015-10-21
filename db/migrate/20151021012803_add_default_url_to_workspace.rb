class AddDefaultUrlToWorkspace < ActiveRecord::Migration
  def change
    change_column :workspaces, :profile_image_url, :string, default: "http://www.drodd.com/images12/happy-face15.jpg"
  end
end
