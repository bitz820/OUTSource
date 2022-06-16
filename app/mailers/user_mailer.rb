class UserMailer < ApplicationMailer
    default from: 'OUTSourceFamily@example.com'

    def welcome_email
        # debugger
      @user = params[:user]
      @url  = 'https://out-source-app.herokuapp.com/login'
      mail(to: @user.email, subject: 'Welcome to OUTSource')
    end
  end
