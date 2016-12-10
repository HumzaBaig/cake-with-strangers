# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  is_host         :boolean          default(FALSE), not null
#  profile         :text
#  profile_pic_url :string
#  city_id         :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  email           :string           not null
#  fname           :string
#  lname           :string
#  phone_number    :string
#

class User < ActiveRecord::Base
  attr_reader :password

  validates :username, :email, :password_digest, :session_token, presence: true
  validates :is_host, inclusion: {in: [true, false] }
  validates :username, :email, :session_token, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true
  validates :email, format: /@/

  belongs_to :city
  has_many :hostedEvents,
            primary_key: :id,
            foreign_key: :host_id,
            class_name: :Event
  has_many :attendances,
           primary_key: :id,
           foreign_key: :attendee_id,
           class_name: :Attendance
  has_many :AttendedEvents, through: :attendances

  after_initialize :ensure_session_token

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password);
  end

  def self.find_by_credentials(username, password)
    @user = User.find_by(username: username)
    return nil if @user.nil?
    @user.is_password?(password) ? @user : nil
  end

  def is_password?(password)
    b_obj = BCrypt::Password.new(self.password_digest)
    b_obj.is_password?(password)
  end

  def reset_session_token!
    self.session_token = new_session_token
    self.save
    self.session_token
  end

private

  def ensure_session_token
    self.session_token ||= new_session_token
  end

  def new_session_token
    SecureRandom.urlsafe_base64
  end
end
