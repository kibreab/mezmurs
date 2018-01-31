class User < ApplicationRecord
	# Include default devise modules. Others available are:
	# :confirmable, :lockable, :timeoutable and :omniauthable
	devise :database_authenticatable, :registerable, :recoverable, :rememberable, :trackable, :validatable
	has_many :playlists

	def as_json(options={})
		result = super
		user = User.find_by_id(result["id"])
		result.merge(playlists: user.playlists)
	end
end
