module Api
  module V1
    class QuestionsController < ApplicationController

      def index
        if params[:tags].present? && params[:tags] != 'All'
          @questions = Question.where(tag: params[:tags])
        elsif
            @questions = Question.all
        end
        render json: @questions
      end

      def update_counter
        @question = Question.find(params[:id])
        if params[:count_for] == 'like'
          @question.update(likes_count: @question.likes_count + 1)
        elsif params[:count_for] == 'dislike'
          @question.update(dislikes_count: @question.dislikes_count + 1)
        end

        render json: @question, status: :ok
      end
    end
  end
end
