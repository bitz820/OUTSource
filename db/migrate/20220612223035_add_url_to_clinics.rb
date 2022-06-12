class AddUrlToClinics < ActiveRecord::Migration[7.0]
  def change
    add_column :clinics, :url, :string
  end
end
