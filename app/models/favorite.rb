class Favorite < ApplicationRecord
  belongs_to :user
  belongs_to :clinic

  validates :user, uniqueness: { scope: :clinic, message: "has already saved this clinic to their Favorites!"}

end
