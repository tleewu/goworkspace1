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

ActiveRecord::Schema.define(version: 20151013224705) do

  create_table "images", force: :cascade do |t|
    t.string   "url",        null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",           null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.string   "first_name",      null: false
    t.string   "last_name",       null: false
    t.string   "location"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.integer  "image_id"
  end

  add_index "users", ["image_id"], name: "index_users_on_image_id"

  create_table "workspaces", force: :cascade do |t|
    t.string   "name",                        null: false
    t.float    "lat",                         null: false
    t.float    "lng",                         null: false
    t.integer  "overall",         default: 0, null: false
    t.integer  "wifi",            default: 0, null: false
    t.integer  "power",           default: 0, null: false
    t.integer  "seating",         default: 0, null: false
    t.time     "weekday_opening",             null: false
    t.time     "weekday_closing",             null: false
    t.time     "weekend_opening",             null: false
    t.time     "weekend_closing",             null: false
    t.datetime "created_at",                  null: false
    t.datetime "updated_at",                  null: false
  end

end
