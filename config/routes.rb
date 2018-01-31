Rails.application.routes.draw do
  devise_for :users
  root to: 'site#index'

    namespace :api do
      namespace :v1 do
        resources :songs, only: [:index, :create, :destroy, :update]
        resources :singers, only: [:index, :create, :destroy, :update]
        resources :playlists, only: [:index, :create, :destroy, :update]
      end
    end
  end
