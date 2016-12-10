class Api::CitiesController < ApplicationController
  def index
    @cities = City.all
  end

  def show
    @city = City.find(params[:id])
    @events = @city.events
    @hosts = @city.hosts
  end
end
