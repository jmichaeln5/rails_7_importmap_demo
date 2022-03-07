Rails.application.routes.draw do
  root 'pages#home'
  get 'pages/about'

  # resources :posts

  resources :posts do
    # resources :react_posts, module: :react_posts
    # resources :vue_posts, module: :vue_posts
  end

  resources :react_posts, module: :posts
  resources :vue_posts, module: :posts

end
