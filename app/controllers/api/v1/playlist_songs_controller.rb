class Api::V1::PlaylistSongsController < Api::V1::BaseController
  def index
    #puts "current_user.likes #{current_user.likes}"
    #respond_with current_user.likes
  end

  def create
    respond_with :api, :v1, PlaylistSong.create(playlist_song_params)
  end

  def destroy
    playlist_song = PlaylistSong.where(:song_id => params[:song_id], :playlist_id => params[:playlist_id])    
    respond_with PlaylistSong.destroy(playlist_song.first.id)
  end

  def update
    ps = PlaylistSong.find(params["id"])
    ps.update_attributes(playlist_song_params)
    respond_with playlist_song_params, json: playlist_song_params
  end

  private

  def playlist_song_params
    params.require(:playlist_song).permit(:id, :song_id, :playlist_id)
  end
end