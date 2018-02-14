class Api::ReviewsController < ApplicationController
  before_action :set_user, only: [:index, :show, :update, :create, :destroy]

  def index
    render json: @user.reviews, status: 200
  end

  def create
    @review = @user.reviews.build(review_params)

    if @review.save
      render json: @review, status: 201
    else
      render_errors
    end
  end

  def show
    render json: @review, status: 200
  end

  def update
    if @review.update(review_params)
      render json: @review, status: 200
    else
      render_errors
    end
  end

  def destroy
    @review = @user.reviews.find_by(id: params[:id])
    if @review
      @review.destroy
    else
      render json: {
        errors: {
          messages: { review: "review can't be found" }
        }
      }, status: 404
    end
  end

  private

  def set_user
    @user = User.find_by(id: params[:user_id])
    if !@user
      render json: {
        errors: {
          messages: { user: "user can't be found" }
        }
      }, status: 404
    end
  end

  def render_errors
    render json: {
      errors: {
        messages: @review.errors.messages
      }
    }, status: 422
  end

  def review_params
    params.require(:review).permit(
      [
        :content
      ]
    )
  end

end
