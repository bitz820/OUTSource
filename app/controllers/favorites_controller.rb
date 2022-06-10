class FavoritesController < ApplicationController
    skip_before_action :authorize

    def index
        current_user = User.find_by!(id: session[:user_id])
        favorites = current_user.favorites
        render json: favorites, status: :ok
    end

    def create
        render json: Favorite.create!(favorite_params), status: :created
    end

    def update
        current_user = User.find_by!(id: session[:user_id])
        favorites = current_user.favorites
        # FIND BY PARAMS OF ID?? 
        favorite_to_update = favorites.find_by(clinic_id: params[:id])
        favorite_to_update.update!(favorite_params)
        render json: favorite_to_update, status: :ok
    end

    def destroy
        current_user = User.find_by!(id: session[:user_id])
        favorites = current_user.favorites
        favorite = favorites.find_by(clinic_id: params[:id])
        favorite.destroy
        head :no_content
    end

    private

    def favorite_params
        params.permit(:user_id, :clinic_id)
    end


end
