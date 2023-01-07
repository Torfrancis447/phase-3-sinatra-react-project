class CreateMovies < ActiveRecord::Migration[6.1]
  def change
    create_table :movies do |t|
      t.string :title
      t.integer :release_year
      t.text :summary
      t.string :image_url     
      t.string :genre
      t.integer :run_time
      t.timestamps
    end
  end
end
