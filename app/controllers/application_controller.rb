class ApplicationController < ActionController::API
    include ActionController::Cookies
    rescue_from ActiveRecord::RecordInvalid, with: :render_invalid
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

    # before_action :authorize

    private

    def render_invalid invalid
        render json: {errors: invalid.errors.full_messages}, status: :unprocessable_entity
    end

    def render_not_found exception 
        render json: {error: "#{exception.message} not found"}, status: :not_found
    end
    

end
