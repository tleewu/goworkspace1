Rails.application.routes.draw do

  resource :users, only: [:create, :new]
  resource :session, only: [:new, :create, :destroy]

  root to: 'static_pages#index'
end
