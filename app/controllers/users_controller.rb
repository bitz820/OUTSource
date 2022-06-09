class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create, :index, :show]
    # CHANGE THIS BACK TO CREATE ONLY AFTER USING POSTMAN

    # List of All Users
    def index
        render json: User.all, status: :ok
    end

    # Shows a Current Logged in User (given that they are authorized, which looks at session)
    def show
        current_user = find_user
        render json: current_user, status: :ok
    end

    # Signs a User up for the app
    def create 
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

    # Updates a logged in User's Profile
    def update
        current_user = find_user
        user.update!(user_params)
        render json: current_user, status: :ok
    end

    # Deletes a User Account
    def destroy
        current_user = find_user
        current_user.destroy
        head :no_content
    end




    private

    def find_user
        user = User.find_by!(id: session[:user_id])
    end

    def user_params
        params.permit(:name, :email, :password, :gender, :age, :sexuality, :reason_for_signup, :referred)
    end

end
