class Api::WorkspacesController < ApplicationController
  def index
    @workspaces = Workspace.find_all(params[:allFilters])
    render 'index'
  end

  def show
    @workspace = Workspace.find(params[:id])
    render 'show'
  end
end
