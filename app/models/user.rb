class User < ApplicationRecord
    has_many :favorites
    has_many :clinics, through: :favorites

    has_secure_password

    validates :email, format: /\w+@\w+\.{1}[a-zA-Z]{2,}/, presence: true, uniqueness: true
    validates :first_name, :last_name, presence: true
    validates :age, numericality: {greater_than_or_equal_to: 18, less_than_or_equal_to: 80}
    
    validate :permitted_emails


    def permitted_emails
        unless email.match?(/gmail.com|yahoo.com|icloud.com/)
            errors.add(:permitted_emails, "are only Gmail, Yahoo, or iCloud accounts.  Please update accordingly!")
        end
    end
    
end
