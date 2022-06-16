class UserMailerPreview < ActionMailer::Preview

    def welcome_email
        UserMailer.welcome_email
    end
end