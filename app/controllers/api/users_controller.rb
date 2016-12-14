class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = current_user
  end

  def update
    @user = User.find(params[:id])
    errors = [] # array for both profile and password updates

    unless @user.update_attributes(update_params)
      errors.concat(@user.errors.full_messages)
    end

    if params[:password]
      if @user.is_password?(params[:password][:old_password])
        unless @user.update({password: params[:password][:new_password]})
          errors.concat(@user.errors.full_messages)
        end
      else
        errors.push('You entered in the wrong password')
      end
    end

    if errors.length == 0
      render 'api/users/show'
    else
      render json: errors
    end
  end


  def destroy
    @user = User.find(params[:id])
    if (@user.id == 1)
      render json: { username: "You can't delete the guest login!" }
    else
      @user.destroy
      render json: {}
    end
  end

private

  def user_params
    params.require(:user).permit(:username,
                                  :email,
                                  :password,
                                  :city_id,
                                  :profile,
                                  :profile_pic_url)
  end

  def update_params
    params.require(:user).permit(:username,
                                  :email,
                                  :city_id,
                                  :profile,
                                  :profile_pic_url,
                                  :is_host)
  end

end
