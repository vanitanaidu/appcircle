class UsersController < ApplicationController


  def index
    @users = User.all
    render json: @users, status: 200
  end

  def create
    render json {}, status: 201
  end



end
