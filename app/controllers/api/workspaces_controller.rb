class Api::WorkspacesController < ApplicationController
  def index
    @workspaces = Workspace.find_all(params[:allFilters])
    @max_set = (@workspaces.length / 10)
    start_idx = (params[:allFilters][:currentSet].to_i) * 10
    @workspaces = @workspaces[start_idx..start_idx+9]
    render 'index'
  end

  def show
    @workspace = Workspace.find(params[:id])
    render 'show'
  end
end
