class User < ApplicationRecord
	# Include default devise modules. Others available are:
	# :confirmable, :lockable, :timeoutable and :omniauthable
	devise :database_authenticatable, :registerable, :recoverable, :rememberable, :trackable, :validatable
	has_many :playlists

	# the like associations
	has_many :likes
	has_many :liked_songs, :through => :likes, :source => :song
	
	def as_json(options={})
		result = super
		user = User.find_by_id(result["id"])
		result.merge(playlists: user.playlists, user_likes: user.likes)
	end
end