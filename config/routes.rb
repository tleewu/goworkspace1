Rails.application.routes.draw do

  resource :users, only: [:create, :new]
  resource :session, only: [:new, :create, :destroy]

  namespace :api, defaults: {format: :json} do
    resources :images, only: [:create]
    resources :workspaces, only: [:index, :show]
    resources :reviews, only: [:create, :destroy]
    #TODO: users should be allowed to update their own reviews. Need to figure out
    #how to get current user information.
  end

  get 'users/current_user', to: 'users#current'
  root to: 'static_pages#index'
end
