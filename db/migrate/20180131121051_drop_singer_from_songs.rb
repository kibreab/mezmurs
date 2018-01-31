class DropSingerFromSongs < ActiveRecord::Migration[5.1]
  def change
  	remove_column :songs, :singer
  end
end
