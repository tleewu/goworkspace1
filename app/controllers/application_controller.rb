class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  helper_method :current_user

  def login(user)
    session[:session_token] = user.reset_session_token!
    redirect_to root_path
  end

  def logout(user)
    user.reset_session_token!
    session[:session_token] = nil
  end

  def current_user
    @current_user = User.find_by({session_token: session[:session_token]})
  end

  def ensure_not_logged_in
    if session[:session_token]
      redirect_to root_path
    end
  end

end
