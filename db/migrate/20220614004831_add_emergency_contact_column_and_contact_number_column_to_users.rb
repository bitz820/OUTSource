class AddEmergencyContactColumnAndContactNumberColumnToUsers < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :contact_name, :string
    add_column :users, :phone, :string
  end
end
