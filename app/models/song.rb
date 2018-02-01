class Song < ApplicationRecord
	belongs_to :singer
	has_many :playlist_songs
  	has_many :playlists, through: :playlist_songs
	# the like associations
	has_many :likes
	has_many :liking_users, :through => :likes, :source => :user

	def as_json(options={})
		result = super
		song = Song.find_by_id(result["id"])
		result.merge(song_likes: song.likes)
	end	
end
