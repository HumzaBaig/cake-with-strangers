class Api::AttendancesController < ApplicationController

  def create
    @attendance = Attendance.new(attendance_params)
    if @attendance.save
      render "api/attendances/show"
    else
      render json: @attendance.errors.full_messages, status: 422
    end
  end

  def destroy
    @attendance = Attendance.find_by(attendee_id: current_user.id, event_id: params[:id])
    @attendance.destroy
    render json: {}
  end

  private

  def attendance_params
    params.require(:attendance).permit(:event_id, :attendee_id)
  end
end
