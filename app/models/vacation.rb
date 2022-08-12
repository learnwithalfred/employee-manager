# frozen_string_literal: true

class Vacation < ApplicationRecord
  MINIMUM_CONTENT = 5
  belongs_to :user

  validates :reason, presence: true, length: { minimum: MINIMUM_CONTENT }
  validates :start_date, presence: true # , date: { after: Proc.new { Date.today }, message: 'must be after today' }
  validates :end_date, presence: true # , date: { after: :start_date, message: 'must be after start date'  }
end
