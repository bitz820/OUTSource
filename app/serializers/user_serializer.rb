class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :gender, :age, :sexuality, :reason_for_signup, :referred
end
