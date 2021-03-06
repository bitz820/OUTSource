# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_06_14_004831) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "clinics", force: :cascade do |t|
    t.string "name"
    t.string "location"
    t.string "services"
    t.string "hours"
    t.boolean "accepting_new_patients"
    t.boolean "takes_uninsured"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "phone"
    t.string "city"
    t.string "zip"
    t.string "url"
  end

  create_table "favorites", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "clinic_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["clinic_id"], name: "index_favorites_on_clinic_id"
    t.index ["user_id"], name: "index_favorites_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "email"
    t.string "password_digest"
    t.integer "age"
    t.string "gender"
    t.string "sexuality"
    t.string "reason_for_signup"
    t.string "referred"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "contact_name"
    t.string "phone"
  end

  add_foreign_key "favorites", "clinics"
  add_foreign_key "favorites", "users"
end
