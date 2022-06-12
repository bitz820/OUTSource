class ClinicSerializer < ActiveModel::Serializer
  attributes :id, :name, :location, :services, :hours, :accepting_new_patients, :takes_uninsured, :zip, :city, :phone, :url

  
end
