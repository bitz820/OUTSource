Rails.application.routes.draw do
  resources :favorites
  resources :clinics
  resources :users

  get '*path',
  to: 'fallback#index',
  constraints: ->(req) { !req.xhr? && req.format.html? }
end
