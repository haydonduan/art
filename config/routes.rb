Rails.application.routes.draw do
  resources :index do
    collection do
      get :tips
    end
  end

  resources :pictures, only: [:index, :show]
end
