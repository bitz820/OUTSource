require "test_helper"

class UserMailerTest < ActionMailer::TestCase
    test "welcome_email" do
        mail = UserMailer.welcome_email
        assert_equal 'Welcome to OUTSource', mail.subject
        assert_equal [@user.email], mail.to
        assert_equal ['OUTSourceFamily@example.com'], mail.from
        assert_match 'Welcome to OUTSource, <%= @user.first_name %>
        ===============================================
        
        You have successfully signed up to OUTSource,
        your login email is: <%= @user.email %>.
        
        To login to the site, just follow this link: <%= @url %>.
        
        Thanks for joining and have a great day!', mail.body.encoded

    end
end