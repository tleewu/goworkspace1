class StaticPagesController < ApplicationController
  before_action :ensure_login

  def index
    @current_user = current_user
  end

  private

  def ensure_login
    redirect_to new_session_url unless current_user
  end
end
