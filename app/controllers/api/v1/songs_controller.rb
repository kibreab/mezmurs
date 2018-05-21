class Api::V1::SongsController < Api::V1::BaseController
  def index
    songs = Song.all
              .paginate(:page => params[:page], :per_page => params[:per_page])
              .order("#{sort_column} #{sort_direction}")
    respond_with songs
  end

  def create
    respond_with :api, :v1, Song.create(song_params)
  end

  def show
    #respond_with :api, :v1, Song.find(params[:id])
    @song = Song.find(params[:id])
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
  
  def sort_direction
    %w[asc desc].include?(params[:direction]) ? params[:direction] : "asc"
  end  
  
  def sort_column
    params[:sort] ? params[:sort] : "title"
  end

  def song_params
    params.require(:song).permit(:id, :title, :description, :lyrics, :type, :category, :album_number, :singer_id, :playlist_id, :filename)
  end
end