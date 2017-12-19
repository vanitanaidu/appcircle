Rails.application.routes.draw do

  root to: 'welcome#home'

    resources :users, only: [:index, :create, :show, :update, :destroy] do
      resources :reviews, only: [:index, :create, :destroy]
    end

end
