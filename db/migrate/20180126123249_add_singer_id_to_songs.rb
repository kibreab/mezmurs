class AddSingerIdToSongs < ActiveRecord::Migration[5.1]
  def change
  	add_column :songs, :singer_id, :integer
  end
end
