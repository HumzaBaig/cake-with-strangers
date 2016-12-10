class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.datetime :date_and_time, null: false
      t.string :address, null: false
      t.integer :limit, null: false
      t.integer :host_id, null: false, index: true
      t.integer :city_id, null: false, index: true
      t.text :description

      t.timestamps null: false
    end
  end
end
