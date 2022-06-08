class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :gender, :password, :age, :sexuality, :reason_for_signup, :referred
end
