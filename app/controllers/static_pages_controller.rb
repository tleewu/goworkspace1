class StaticPagesController < ApplicationController
  before_action :ensure_login

  def index
  end

  private

  def ensure_login
    redirect_to new_session_url unless current_user
  end
end
