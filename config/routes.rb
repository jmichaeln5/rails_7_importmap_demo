Rails.application.routes.draw do
  root 'pages#home'
  get 'pages/about'

  resources :posts

  get 'vue_posts', to: 'posts#vue_posts'
  get 'react_posts', to: 'posts#react_posts'

  get 'react/index'
  get 'vue/index'
end
