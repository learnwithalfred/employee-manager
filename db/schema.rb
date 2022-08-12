# frozen_string_literal: true

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

ActiveRecord::Schema.define(version: 2022_08_12_131812) do

  create_table "comments", force: :cascade do |t|
    t.text "content"
    t.integer "task_id", null: false
    t.integer "user_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["task_id"], name: "index_comments_on_task_id"
    t.index ["user_id"], name: "index_comments_on_user_id"
  end

  create_table "leaves", force: :cascade do |t|
    t.text "content", null: false
    t.date "start", null: false
    t.date "end", null: false
    t.integer "user_id"
    t.boolean "is_approved", default: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_leaves_on_user_id"
  end

  create_table "tasks", force: :cascade do |t|
    t.text "title", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "slug"
    t.integer "assigned_user_id"
    t.integer "task_owner_id"
    t.string "progress", default: "pending", null: false
    t.string "status", default: "unstarred", null: false
    t.text "description"
    t.index ["slug"], name: "index_tasks_on_slug", unique: true
  end

  create_table "users", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "authentication_token"
    t.integer "role", default: 0
    t.index ["email"], name: "index_users_on_email", unique: true
  end

  create_table "vacations", force: :cascade do |t|
    t.text "reason", null: false
    t.date "start_date", null: false
    t.date "end_date", null: false
    t.integer "user_id"
    t.boolean "is_approved", default: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id"], name: "index_vacations_on_user_id"
  end

  add_foreign_key "comments", "tasks"
  add_foreign_key "comments", "users"
  add_foreign_key "leaves", "users"
  add_foreign_key "tasks", "users", column: "assigned_user_id"
  add_foreign_key "tasks", "users", column: "task_owner_id", on_delete: :cascade
  add_foreign_key "vacations", "users"
end
