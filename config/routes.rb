Rails.application.routes.draw do

  resource :users, only: [:create, :new]
  resource :session, only: [:new, :create, :destroy]

  namespace :api, defaults: {format: :json} do
    resources :images, only: [:create]
    resources :workspaces, only: [:index, :show]
    resources :reviews, only: [:index, :create]
    #TODO: users should be allowed to update their own reviews. Need to figure out
    #how to get current user information.
  end

  root to: 'static_pages#index'
end
