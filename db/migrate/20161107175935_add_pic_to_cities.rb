class AddPicToCities < ActiveRecord::Migration
  def change
    add_column :cities, :pic_url, :string, null: false
  end
end
