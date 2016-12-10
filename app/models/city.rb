# == Schema Information
#
# Table name: cities
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  state      :string
#  country    :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  pic_url    :string           not null
#

class City < ActiveRecord::Base
  validates :name, :country, presence: true

  has_many :hosts,
            primary_key: :id,
            foreign_key: :city_id,
            class_name: :User

  has_many :events,
            primary_key: :id,
            foreign_key: :city_id,
            class_name: :Event
end
