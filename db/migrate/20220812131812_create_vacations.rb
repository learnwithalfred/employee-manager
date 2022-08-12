# frozen_string_literal: true

class CreateVacations < ActiveRecord::Migration[6.1]
  def change
    create_table :vacations do |t|
      t.text :reason, null: false
      t.date :start_date, null: false
      t.date :end_date, null: false
      t.references :user, foreign_key: true
      t.boolean :is_approved, default: false

      t.timestamps
    end
  end
end
