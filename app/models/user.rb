class User < ApplicationRecord
    has_many :favorites, dependent: :destroy
    has_many :clinics, through: :favorites
    
    before_save :normalize_phone
    
    has_secure_password

    validates :email, format: /\w+@\w+\.{1}[a-zA-Z]{2,}/, presence: true, uniqueness: true
    validates :first_name, :last_name, :contact_name, presence: true
    validates :age, numericality: {greater_than_or_equal_to: 18, less_than_or_equal_to: 80}
    validates :phone, phone: true

    
    validate :permitted_emails


    def permitted_emails
        unless email.match?(/gmail.com|yahoo.com|icloud.com/)
            errors.add(:permitted_emails, "are only Gmail, Yahoo, or iCloud accounts.  Please update accordingly!")
        end
    end

    def formatted_phone
        parsed_phone = Phonelib.parse(phone)
        return phone if parsed_phone.invalid?
    
        formatted =
          if parsed_phone.country_code == "1" 
            parsed_phone.full_national # (415) 555-2671;123
          else
            parsed_phone.full_international # +44 20 7183 8750
          end
        formatted.gsub!(";", " x") # (415) 555-2671 x123
        formatted
      end

    private 
    
    def normalize_phone
        self.phone = Phonelib.parse(phone).full_e164.presence 
    end
    
end
