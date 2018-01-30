class Api::V1::SongsController < Api::V1::BaseController
  def index
    respond_with Song.all
  end

  def create
    respond_with :api, :v1, Song.create(song_params)
  end

  def destroy
    respond_with Song.destroy(params[:id])
  end

  def update
    song = Song.find(params["id"])
    song.update_attributes(song_params)
    respond_with song, json: song
  end

  private

  def song_params
    params.require(:song).permit(:id, :title, :description, :lyrics, :type, :category, :album_number, :singer_id, :filename)
  end
end