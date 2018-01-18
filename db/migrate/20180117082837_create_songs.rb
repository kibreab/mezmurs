class CreateSongs < ActiveRecord::Migration[5.1]
  def change
    create_table :songs do |t|
      t.string :title
      t.text :description
      t.string :type
      t.string :category
      t.integer :album_number
      t.string :singer
      t.string :filename


      t.timestamps
    end
  end
end
