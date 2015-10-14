class Api::WorkspacesController < ApplicationController
  def index
    workspace = params[:workspace] || ''

    @workspaces = Workspace.find_all(params[:bounds], workspace)
    render json: @workspaces
  end

  def show
  end
end
