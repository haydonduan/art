Rails.application.routes.draw do
  get :index, to: 'index#index'
  get :tips, to: 'index#tips'
end
