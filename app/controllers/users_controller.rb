class UsersController < ApplicationController

  # before_action :ensure_not_logged_in

  def new
    @user = User.new
  end

  def create
    @user = User.new (user_params)
    if @user.save
      login(@user)
    else
      render :new
    end
  end

  def current
    @current_user = current_user
    render json: @current_user
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :first_name, :last_name,
                                 :location, :profile_image_url)
  end

end
