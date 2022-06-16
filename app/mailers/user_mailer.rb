class UserMailer < ApplicationMailer
    default from: 'notifications@example.com'

    def welcome_email
        debugger
      user = params[:user]
      @url  = 'https://out-source-app.herokuapp.com/login'
      mail(to: user.email, subject: 'Welcome to My Awesome Site')
    end
  end
