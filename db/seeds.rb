
puts "Seeding Users"

User.create!(first_name: "Mark", last_name: "Bacon", email: "mark@gmail.com", password: "password", age: 29, gender: "male", sexuality: "gay", reason_for_signup: "PrEP", referred: "provider")

puts "Seeding Clinics"

Clinic.create!(name: "CommUnityCare Health Centers", location: "500 E 7th St", city: "Austin", zip: "78701", hours: "M-F 7:30-4:30", phone: "(512) 978 9920", services: "HIV Testing, PrEP, STI Testing", accepting_new_patients: true, takes_uninsured: true)

# Clinic.create!(name: "Austin Public Health", location: "15 Waller St", city: "Austin", zip: "78702", hours: "", phone: "(512) 972 5430", services: "HIV Testing, STI Testing", accepting_new_patients: true, takes_uninsured: true)

# Clinic.create!(name: "", location: "", city: "Austin", zip: "", hours: "", phone: "", services: "", accepting_new_patients: , takes_uninsured: )

# Clinic.create!(name: "", location: "", city: "Austin", zip: "", hours: "", phone: "", services: "", accepting_new_patients: , takes_uninsured: )

# Clinic.create!(name: "", location: "", city: "Austin", zip: "", hours: "", phone: "", services: "", accepting_new_patients: , takes_uninsured: )

# Clinic.create!(name: "", location: "", city: "Austin", zip: "", hours: "", phone: "", services: "", accepting_new_patients: , takes_uninsured: )

# Clinic.create!(name: "", location: "", city: "Austin", zip: "", hours: "", phone: "", services: "", accepting_new_patients: , takes_uninsured: )