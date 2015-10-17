class Api::WorkspacesController < ApplicationController
  def index
    @workspaces = Workspace.find_all(params[:allFilters])
    @workspaces = @workspaces.includes(:workspace_images)
    render 'index'
  end

  def show
  end
end
