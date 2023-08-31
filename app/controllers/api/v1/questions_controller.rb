module Api
  module V1
    class QuestionsController < ApplicationController
      def index
        @questions = Question.all
        render json: @questions
      end
    end
  end
end
