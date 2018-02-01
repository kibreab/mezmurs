class Api::V1::LikesController < Api::V1::BaseController
  def index
    puts "current_user.likes #{current_user.likes}"
    respond_with current_user.likes
  end

  def create
    respond_with :api, :v1, Like.create(like_params)
  end

  def destroy
    respond_with Like.destroy(params[:id])
  end

  def update
    like = Like.find(params["id"])
    like.update_attributes(like_params)
    respond_with like_params, json: like_params
  end

  private

  def like_params
    params.require(:like).permit(:id, :user_id, :song_id)
  end
end