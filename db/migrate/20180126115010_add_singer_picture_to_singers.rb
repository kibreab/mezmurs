class AddSingerPictureToSingers < ActiveRecord::Migration[5.1]
  def up
    add_attachment :singers, :picture
  end

  def down
    remove_attachment :singers, :picture
  end
end
