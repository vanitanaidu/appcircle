Rails.application.routes.draw do

  root to: 'welcome#home'

  namespace :api do

    resources :users, only: [:index, :create, :show, :update, :destroy] do
      resources :reviews, only: [:index, :create, :destroy]
    end
  end

  get "/*path", to: 'welcome#home' ## this line of code automatically reroutes to the root page if the page you click on has an error

end
