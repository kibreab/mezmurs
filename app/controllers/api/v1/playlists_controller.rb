class Api::V1::PlaylistsController < Api::V1::BaseController
  def index
    puts "current_user.playlists #{current_user.playlists}"
    respond_with current_user.playlists
  end

  def create
    respond_with :api, :v1, Playlist.create(playlist_params)
  end

  def destroy
    respond_with Playlist.destroy(params[:id])
  end

  def update
    playlist = Playlist.find(params["id"])
    playlist.updated_by = current_user.id
    playlist.update_attributes(playlist_params)
    respond_with playlist_params, json: playlist_params
  end

  private

  def playlist_params
    params.require(:playlist).permit(:id, :title, :user_id)
  end
end