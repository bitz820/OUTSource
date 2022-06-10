class SessionsController < ApplicationController
    skip_before_action :authorize, only: :create

    # Logging a User in to the App (creates a Session after authorizing user params based on their previous sign up)
    def create
        user = User.find_by(email: params[:email])
        if user
            if user.authenticate(params[:password])
                session[:user_id] = user.id
                render json: user, status: :created
            else
                render json: {error: 'Invalid password'}, status: :unauthorized
            end
        else 
            render json: {error: "Sorry this email isn't registered, please sign up!"}, status: :unauthorized 
        end
    end

    # Logging a User out of the app (destroys the current session)
    def destroy
        # reset_session
        session.delete :user_id
        head :no_content
    end

end
