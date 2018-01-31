class CreatePlaylists < ActiveRecord::Migration[5.1]
  def change
    create_table :playlists do |t|
      t.string :title
      t.text :description
      t.string :type
      t.string :category
      t.integer :user_id
    end
  end
end
