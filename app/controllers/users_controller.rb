class UsersController < ApplicationController


  def index
    @users = User.all
    render json: @users, status: 200
  end

  def create
    user = User.new(user_params)
    debugger
    if user.save
      render json: user, status: 201
    else
      render json: {
        errors: {
          messages:  user.errors.messages
        }
      }, status: 422
    end
  end

  def show
    user = User.find_by(id: params[:id])
    if user
      render json: user, status: 200
    else
      render json: {
        errors: {
          messages:  user.errors.messages
        }
      }, status: 422
    end

  end

  private

  def user_params
    params.require(:user).permit(:name, :about_me, :past_jobs, :interests, :fav_movies, :fav_food, :friend_id)
  end



end
