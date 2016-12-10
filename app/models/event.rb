# == Schema Information
#
# Table name: events
#
#  id            :integer          not null, primary key
#  date_and_time :datetime         not null
#  address       :string           not null
#  limit         :integer          not null
#  host_id       :integer          not null
#  city_id       :integer          not null
#  description   :text
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Event < ActiveRecord::Base
  validates :date_and_time, :address, :limit, :host_id, :city_id, :description, presence: true

  belongs_to :city
  belongs_to :host,
             primary_key: :id,
             foreign_key: :host_id,
             class_name: :City
  has_many :attendances,
           primary_key: :id,
           foreign_key: :event_id,
           class_name: :Attendance
  has_many :attendees, through: :attendances

end
