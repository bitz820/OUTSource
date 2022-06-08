class AddCityAndZipToClinics < ActiveRecord::Migration[7.0]
  def change
    add_column :clinics, :city, :string
    add_column :clinics, :zip, :string
  end
end
