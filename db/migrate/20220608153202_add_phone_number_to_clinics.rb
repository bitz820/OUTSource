class AddPhoneNumberToClinics < ActiveRecord::Migration[7.0]
  def change
    add_column :clinics, :phone, :string
  end
end
