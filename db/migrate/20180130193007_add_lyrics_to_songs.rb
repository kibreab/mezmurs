class AddLyricsToSongs < ActiveRecord::Migration[5.1]
  def change
    add_column :songs, :lyrics, :text
  end
end
