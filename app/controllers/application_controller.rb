class ApplicationController < ActionController::API
    include ActionController::Cookies
    include ActionController::MimeResponds
    
    rescue_from ActiveRecord::RecordInvalid, with: :render_invalid
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

    before_action :authorize

    def authorize
        return render json: {error: "Not Authorized" }, status: :unauthorized unless session.include? :user_id
    end

    private

    def render_invalid invalid
        render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
    end

    def render_not_found exception 
        render json: {error: "Sorry! This #{exception.model} wasn't found!  Please try again."}, status: :not_found
    end
    

end
