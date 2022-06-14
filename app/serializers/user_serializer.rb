class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :gender, :age, :sexuality, :reason_for_signup, :referred, :password_digest, :contact_name, :phone

  has_many :favorites
end
