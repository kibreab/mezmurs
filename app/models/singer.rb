class Singer < ApplicationRecord
	has_many :songs
	belongs_to :user

	has_attached_file :picture, default_url: "/assets/:style/missing.png"
	validates_attachment :picture, presence: true, content_type: { content_type: "image/jpeg" }, size: { in: 0..10000.kilobytes }
	validates_uniqueness_of :singer_name
	
	def as_json(options={})
		result = super
		singer = Singer.find_by_id(result["id"])
		result.merge(picture: singer.picture.url)
	end	
end
