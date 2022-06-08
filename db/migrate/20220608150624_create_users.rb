class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :gender
      t.string :password_digest
      t.integer :age
      t.string :sexuality
      t.string :reason_for_signup
      t.string :referred

      t.timestamps
    end
  end
end
