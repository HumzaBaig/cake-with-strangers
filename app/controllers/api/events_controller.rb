class Api::EventsController < ApplicationController
  def index
    @events = Event.where("#{params[:key]} = ? OR #{params[:value]} IN (?)",
                          params[:value],
                          current_user.attendances.pluck(:event_id))
  end

  def create
    params[:events][:host_id] = current_user.id
    params[:events][:city_id] = current_user.city.id
    @event = Event.new(event_params)
    if @event.save
      render 'api/events/show'
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def show
    @event = Event.find(params[:id])
  end

  def destroy
    @event = Event.find(params[:id])
    @event.destroy
    render json: {}
  end

  private

  def event_params
    params.require(:events).permit(:title,
                                   :date_and_time,
                                   :address,
                                   :limit,
                                   :host_id,
                                   :city_id,
                                   :description)
  end
end
