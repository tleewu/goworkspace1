Rails.application.routes.draw do

  resource :users, only: [:create, :new]
  resource :session, only: [:new, :create, :destroy]

  namespace :api, defaults: {format: :json} do
    resources :images, only: [:create]
    resources :workspaces, only: [:index, :show]
  end

  root to: 'static_pages#index'
end
