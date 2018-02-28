Rails.application.routes.draw do
  devise_for :users, :controllers => { registrations: 'registrations' }
  root to: 'site#index'

    namespace :api do
      namespace :v1 do
        resources :songs, only: [:index, :create, :destroy, :update, :show]
        resources :singers, only: [:index, :create, :destroy, :update]
        resources :playlists, only: [:index, :create, :destroy, :update]
        resources :likes, only: [:index, :create, :destroy, :update]
        resources :playlist_songs, only: [:index, :create, :destroy, :update]
      end
    end
  end
