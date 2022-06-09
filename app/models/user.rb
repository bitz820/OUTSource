class User < ApplicationRecord
    validates :first_name, :last_name, :email, :password, presence: true
    validates :email, uniqueness: true
    validates :age, numericality: {greater_than_or_equal_to: 18}

    has_secure_password
    
end
