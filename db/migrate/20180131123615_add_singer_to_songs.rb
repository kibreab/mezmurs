class AddSingerToSongs < ActiveRecord::Migration[5.1]
  def change
    add_column :songs, :singer, :string
  end
end
