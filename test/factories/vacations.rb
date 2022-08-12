# frozen_string_literal: true

FactoryBot.define do
  factory :vacation do
    reason { "MyText" }
    start_date { "2022-08-12" }
    end_date { "2022-08-12" }
    user { nil }
    is_approved { false }
  end
end
