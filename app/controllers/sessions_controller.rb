class SessionsController < ApplicationController

  before_action :ensure_not_logged_in, only: [:new]

  def new
    @user = User.new
  end

  def create
    @user = User.find_by_credentials(session_params[:email], session_params[:password])
    if @user
      login(@user)
    else
      @user = User.new(session_params)
      @errors = "Invalid credentials. Please try again."
      render :new
    end

  end

  def destroy
    logout(current_user)
    render json: {}
  end

  private

  def session_params
    params.require(:user).permit(:email, :password)
  end
end
