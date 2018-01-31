class Song < ApplicationRecord
	belongs_to :singer
	has_many :playlist_songs
  	has_many :playlists, through: :playlist_songs
end
