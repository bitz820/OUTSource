class UsersController < ApplicationController
    skip_before_action :authorize, only: :create

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
    # def create 
    #     user = User.create!(user_params)
    #     session[:user_id] = user.id
    #     render json: user, status: :created
    # end


    def create
        @user = User.create!(user_params)
        
        respond_to do |format|
            if @user.save
                session[:user_id] = @user.id
            # Tell the UserMailer to send a welcome email after save
            UserMailer.with(user: @user).welcome_email.deliver_later
    
            format.html { redirect_to(@user, notice: 'User was successfully created.') }
            format.json { render json: @user, status: :created, location: @user }
          else
            format.html { render action: 'new' }
            format.json { render json: @user.errors, status: :unprocessable_entity }
          end
        end
      end

    # Updates a logged in User's Profile
    def update
        current_user = find_user
        current_user.update!(user_params)
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
        params.permit(:first_name, :last_name, :email, :password, :gender, :age, :sexuality, :reason_for_signup, :contact_name, :phone, :referred)
    end


end
