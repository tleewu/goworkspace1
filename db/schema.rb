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

ActiveRecord::Schema.define(version: 20151027021251) do

  create_table "images", force: :cascade do |t|
    t.string   "url",            null: false
    t.integer  "imageable_id",   null: false
    t.string   "imageable_type", null: false
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  add_index "images", ["imageable_id"], name: "index_images_on_imageable_id"

  create_table "reviews", force: :cascade do |t|
    t.integer  "user_id",      null: false
    t.integer  "workspace_id", null: false
    t.text     "body",         null: false
    t.integer  "overall",      null: false
    t.integer  "wifi"
    t.integer  "power"
    t.integer  "seating"
    t.integer  "pricing"
    t.datetime "created_at",   null: false
    t.datetime "updated_at",   null: false
  end

  add_index "reviews", ["user_id", "workspace_id"], name: "index_reviews_on_user_id_and_workspace_id"

  create_table "users", force: :cascade do |t|
    t.string   "email",                                                                                                                   null: false
    t.string   "password_digest",                                                                                                         null: false
    t.string   "session_token",                                                                                                           null: false
    t.string   "first_name",                                                                                                              null: false
    t.string   "last_name",                                                                                                               null: false
    t.string   "location"
    t.datetime "created_at",                                                                                                              null: false
    t.datetime "updated_at",                                                                                                              null: false
    t.string   "profile_image_url", default: "http://res.cloudinary.com/goworkspace/image/upload/v1445202159/default_profile_gnluy2.jpg"
  end

  create_table "workspaces", force: :cascade do |t|
    t.string   "name",                                                                           null: false
    t.float    "lat",                                                                            null: false
    t.float    "lng",                                                                            null: false
    t.float    "overall",             default: 0.0,                                              null: false
    t.float    "wifi",                default: 0.0,                                              null: false
    t.float    "power",               default: 0.0,                                              null: false
    t.float    "seating",             default: 0.0,                                              null: false
    t.time     "weekday_opening",                                                                null: false
    t.time     "weekday_closing",                                                                null: false
    t.time     "weekend_opening",                                                                null: false
    t.time     "weekend_closing",                                                                null: false
    t.datetime "created_at",                                                                     null: false
    t.datetime "updated_at",                                                                     null: false
    t.float    "pricing",             default: 0.0,                                              null: false
    t.integer  "num_wifi_ratings",    default: 0,                                                null: false
    t.integer  "num_power_ratings",   default: 0,                                                null: false
    t.integer  "num_seating_ratings", default: 0,                                                null: false
    t.integer  "num_pricing_ratings", default: 0,                                                null: false
    t.string   "profile_image_url",   default: "http://www.drodd.com/images12/happy-face15.jpg"
    t.string   "street_address",      default: "874 Fell Street"
    t.string   "city_address",        default: "San Francisco, CA 94117"
  end

end
