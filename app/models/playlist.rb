class Playlist < ActiveRecord::Base
	belongs_to :user
	has_many :playlist_songs
	has_many :songs, through: :playlist_songs

	def as_json(options={})
		result = super
		playlist = Playlist.find_by_id(result["id"])
		result.merge(songs: playlist.songs)
	end
end