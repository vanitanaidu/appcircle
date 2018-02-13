class Api::PhotosController < ApplicationController
  before_action :set_user, only: [:index, :show, :update, :create, :destroy]

  def index
    render json: @user.photos, status: 200
  end

  def create
    @photo = @user.photos.build(photo_params)
    if @photo
      render json: @photo, status: 201
    else
      render_errors
    end
  end

  def show
    render json: @photo, status: 200
  end

  def update
    if @photo.update(photo_params)
      render json: @photo, status: 200
    else
      render_errors
    end
  end

  def destroy
    @photo = @user.photos.find_by(id: params[:id])
    if @photo
      @photo.destroy
    else
      render json: {
        errors: {
          messages: { photo: "photo can't be found" }
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
        messages: @photo.errors.messages
      }
    }, status: 422
  end

  def photo_params
    params.require(:photo).permit(
      [
        :profilepic_file_name
        :profilepic_content_type
        :profilepic_file_size
        :profilepic_updated_at
      ]
    )
  end

end
