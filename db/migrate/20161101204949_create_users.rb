class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false
      t.boolean :is_host, null: false, default: false
      t.text :profile
      t.string :profile_pic_url
      t.integer :city_id

      t.timestamps null: false
    end

    add_index :users, :username, unique: true
    add_index :users, :session_token, unique: true
    add_index :users, :city_id
  end
end
