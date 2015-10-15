class Api::WorkspacesController < ApplicationController
  def index
    unless params[:bounds]
      @workspaces = Workspace.all
    else
      workspace = params[:workspaceName] || ''
      @workspaces = Workspace.find_all(params[:bounds], workspace)
    end
    render json: @workspaces
  end

  def show
  end
end
