# == Schema Information
#
# Table name: attendances
#
#  id          :integer          not null, primary key
#  event_id    :integer          not null
#  attendee_id :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Attendance < ActiveRecord::Base
  validates :event_id, :attendee_id, presence: true
  validates :event, :attendee, presence: true
  validates :attendee_id, uniqueness: { scope: :event_id }

  belongs_to :event
  belongs_to :attendee,
             primary_key: :id,
             foreign_key: :attendee_id,
             class_name: :User


  def number_of_attendees
    if self.event.limit <= Attendance.where(event_id: self.event_id).length
      self.errors[:event] << "Sorry, no more seats!"
    end
  end
end
