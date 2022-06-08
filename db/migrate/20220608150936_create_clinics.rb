class CreateClinics < ActiveRecord::Migration[7.0]
  def change
    create_table :clinics do |t|
      t.string :name
      t.string :location
      t.string :services
      t.string :hours
      t.boolean :accepting_new_patients
      t.boolean :takes_uninsured

      t.timestamps
    end
  end
end
