class AddAddressToWorkspace < ActiveRecord::Migration
  def change
    add_column :workspaces, :street_address, :string, default: "874 Fell Street"
    add_column :workspaces, :city_address, :string, default: "San Francisco, CA 94117"
  end
end
