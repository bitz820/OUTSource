class ClinicsController < ApplicationController
    def index
        render json: Clinic.all, status: :ok
    end

    def show
        clinic = Clinic.find(params[:id])
        render json: clinic, status: :ok
    end

    def create
        render json: Clinic.create!(clinic_params), status: :created
    end

    def update
        clinic = Clinic.find(params[:id])
        clinic.update!(clinic_params)
        render json: clinic, status: :ok
    end

    def destroy
        clinic = Clinic.find(params[:id])
        clinic.destroy
        head :no_content
    end

    private

    def clinic_params
        params.permit(:name, :location, :services, :hours, :accepting_new_patients, :takes_uninsured, :phone, :city, :zip)
    end

end

