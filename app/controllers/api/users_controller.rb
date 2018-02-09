class Api::UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]

  def index
    @users = User.all
    render json: @users, status: 200
  end

  def create
    @user = User.new(user_params)
    if @user.save
      render json: @user, status: 201
    else
      render_errors
    end
  end

  def show
    render json: @user, status: 200
  end

  def update
    if @user.update(user_params)
      render json: @user, status: 200
    else
      render_errors
    end
  end

  def destroy
    @user.destroy
    # status: 204
  end

  private

  def set_user
    @user = User.find_by(id: params[:id])
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
        messages:  @user.errors.messages
      }
    }, status: 422
  end

  def user_params
    params.require(:user).permit(
    [
      :id,
      :name,
      :about_me,
      :past_jobs,
      :interests,
      :fav_movies,
      :fav_food,
      :friend_id,
      :age,
      :state,
      :city,
      :languages,
      :schools,
      users_attributes: %I[
        id
        photo
        _destroy
      ]
    ]
      )
  end

end
