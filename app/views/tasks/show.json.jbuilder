# frozen_string_literal: true

json.task do
  json.partial! "tasks/task", task: @task

  json.comments @comments do |comment|
      json.user do
        json.extract! comment.user,
          :name
      end
      json.extract! comment,
        :id,
        :content,
        :created_at

    end
  json.task_owner do
    json.extract! @task.task_owner,
      :name
  end
end
