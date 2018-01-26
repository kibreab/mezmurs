class CreateSingers < ActiveRecord::Migration[5.1]
  def change
    create_table :singers do |t|
      t.string :singer_name
      t.integer :updated_by 
      t.timestamps 
    end
  end
end
