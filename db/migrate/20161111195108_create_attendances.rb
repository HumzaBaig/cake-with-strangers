class CreateAttendances < ActiveRecord::Migration
  def change
    create_table :attendances do |t|
      t.integer :event_id, null: false, index: true
      t.integer :attendee_id, null: false, index: true

      t.timestamps null: false
    end
  end
end
