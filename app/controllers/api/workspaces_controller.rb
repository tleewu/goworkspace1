class Api::WorkspacesController < ApplicationController
  def index
    @workspaces = Workspace.find_all(params[:allFilters])
    render json: @workspaces
  end

  def show
  end
end
