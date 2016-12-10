# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161111195108) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "attendances", force: :cascade do |t|
    t.integer  "event_id",    null: false
    t.integer  "attendee_id", null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  add_index "attendances", ["attendee_id"], name: "index_attendances_on_attendee_id", using: :btree
  add_index "attendances", ["event_id"], name: "index_attendances_on_event_id", using: :btree

  create_table "cities", force: :cascade do |t|
    t.string   "name",       null: false
    t.string   "state"
    t.string   "country",    null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string   "pic_url",    null: false
  end

  create_table "events", force: :cascade do |t|
    t.datetime "date_and_time", null: false
    t.string   "address",       null: false
    t.integer  "limit",         null: false
    t.integer  "host_id",       null: false
    t.integer  "city_id",       null: false
    t.text     "description"
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  add_index "events", ["city_id"], name: "index_events_on_city_id", using: :btree
  add_index "events", ["host_id"], name: "index_events_on_host_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",                        null: false
    t.string   "password_digest",                 null: false
    t.string   "session_token",                   null: false
    t.boolean  "is_host",         default: false, null: false
    t.text     "profile"
    t.string   "profile_pic_url"
    t.integer  "city_id"
    t.datetime "created_at",                      null: false
    t.datetime "updated_at",                      null: false
    t.string   "email",                           null: false
    t.string   "fname"
    t.string   "lname"
    t.string   "phone_number"
  end

  add_index "users", ["city_id"], name: "index_users_on_city_id", using: :btree
  add_index "users", ["session_token"], name: "index_users_on_session_token", unique: true, using: :btree
  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
