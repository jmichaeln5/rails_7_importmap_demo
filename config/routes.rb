Rails.application.routes.draw do
  root 'pages#home'
  get 'pages/about'

  resources :posts

  resources :react_posts, module: :posts
  resources :vue_posts, module: :posts
end
