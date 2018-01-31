class Api::V1::SingersController < Api::V1::BaseController
  def index
    respond_with Singer.all
  end

  def create
    respond_with :api, :v1, Singer.create(singer_params)
  end

  def destroy
    respond_with Singer.destroy(params[:id])
  end

  def update
    singer = Singer.find(params["id"])
    singer.updated_by = current_user.id
    singer.update_attributes(singer_params)
    respond_with singer_params, json: singer_params
  end

  private

  def singer_params
    params.require(:singer).permit(:id, :singer_name, :user_id, :picture)
  end
end