
puts "Seeding Users"

User.create!(first_name: "Mark", last_name: "Bacon", email: "mark@gmail.com", password: "test", age: 29, gender: "Male", sexuality: "Gay", reason_for_signup: "STI Testing", referred: "Provider")

User.create!(first_name: "Brian", last_name: "Lego", email: "brian@gmail.com", password: "test", age: 28, gender: "Male", sexuality: "Gay", reason_for_signup: "PrEP", referred: "Friend")

puts "Seeding Clinics"

Clinic.create!(name: "CommUnityCare Health Centers", location: "500 E 7th St", city: "Austin", zip: "78701", hours: "M-F 7:30-4:30", phone: "(512) 978 9920", services: "HIV Testing, STI Testing, Counseling", accepting_new_patients: true, takes_uninsured: true)

Clinic.create!(name: "Austin Public Health", location: "15 Waller St", city: "Austin", zip: "78702", hours: "M-F 8:00-5:00", phone: "(512) 972 5430", services: "HIV Testing, STI Testing", accepting_new_patients: true, takes_uninsured: true)

Clinic.create!(name: "Planned Parenthood of Greater Texas", location: "2911 Medical Arts St", city: "Austin", zip: "78705", hours: "Th-F 9:00-5:00", phone: "(512) 477 5846", services: "HIV Testing, PrEP, STI Testing", accepting_new_patients: true, takes_uninsured: true)

Clinic.create!(name: "People's Center for Women's Health", location: "2909 N IH-35", city: "Austin", zip: "78722", hours: "M-F 8:00-5:00", phone: "(512) 478 4939", services: "HIV Testing, STI Testing, Counseling", accepting_new_patients: true, takes_uninsured: true)

Clinic.create!(name: "ASHWell", location: "3100 Red River St", city: "Austin", zip: "78705", hours: "M-F 10:00-1:30", phone: "(512) 467 0088", services: "HIV Testing, PrEP, STI Testing, Counseling", accepting_new_patients: true, takes_uninsured: true)

Clinic.create!(name: "Austin Lakes Hospital", location: "1025 East 32nd Street", city: "Austin", zip: "78705", hours: "M-F 8:00-8:00", phone: "(512) 544 5951", services: "Counseling", accepting_new_patients: true, takes_uninsured: false)

Clinic.create!(name: "TIN Rx", location: "3706 Guadalupe St", city: "Austin", zip: "78705", hours: "M-F 9:00-5:00", phone: "(512) 717 9988", services: "HIV Testing, PrEP", accepting_new_patients: false, takes_uninsured: false)

Clinic.create!(name: "Lone Star Circle of Care", location: "3000 Oak Springs", city: "Austin", zip: "78702", hours: "M-F 8:00-5:00", phone: "(877) 800 5722", services: "HIV Testing, PrEP, STI Testing",  accepting_new_patients: true, takes_uninsured: false)

Clinic.create!(name: "Texas Health Action", location: "2800 S I- 35 Frontage Rd", city: "Austin", zip: "78704", hours: "M-T-F 9:00-5:00, W-Th 9:00-8:00", phone: "(833) 937 5463", services: "HIV Testing, PrEP", accepting_new_patients: true, takes_uninsured: true)

Clinic.create!(name: "Vivent Health", location: "1023 Springdale Rd", city: "Austin", zip: "78721", hours: "M-F 8:00-5:00", phone: "(512) 600 8378", services: "HIV Testing, PrEP", accepting_new_patients: true, takes_uninsured: false)

Clinic.create!(name: "Austin Regional Clinic", location: "3828 S 1st St", city: "Austin", zip: "78704", hours: "M-F 7:30-5:00", phone: "(512) 443 1311", services: "PrEP", accepting_new_patients: false, takes_uninsured: false)


Clinic.create!(name: "South Austin Medical Clinic", location: "2555 Western Trails Blvd", city: "Austin", zip: "78745", hours: "M-F 7:00-5:00", phone: "(512) 892 6600", services: "PrEP", accepting_new_patients: true, takes_uninsured: true)

Clinic.create!(name: "Peoples Community Clinic", location: "1101 Camino La Costa", city: "Austin", zip: "78752", hours: "M-F 8:00-5:00", phone: "(512) 478 4939", services: "HIV Testing, PrEP, STI Testing", accepting_new_patients: true, takes_uninsured: true)

Clinic.create!(name: "Center for Health Empowerment", location: "4534 West Gate Blvd", city: "Austin", zip: "78702", hours: "M, F 9:00-3:00", phone: "(512) 840 1273", services: "HIV Testing, PrEP, STI Testing", accepting_new_patients: true, takes_uninsured: true)

Clinic.create!(name: "Austin Oaks Hospital", location: "1407 West Stassney Lane", city: "Austin", zip: "78745", hours: "M-F 8:30-5:00", phone: "(512) 675 6257", services: "Counseling", accepting_new_patients: true, takes_uninsured: false)

Clinic.create!(name: "Austin Lakes Hospital", location: "1025 East 32nd Street", city: "Austin", zip: "78705", hours: "M-F 8:00-8:00", phone: "(512) 544 5951", services: "Counseling", accepting_new_patients: true, takes_uninsured: false)

Clinic.create!(name: "The Source Austin", location: "8401 N Interstate Hwy 35", city: "Austin", zip: "78753", hours: "M-F 9:30-5:30", phone: "(512) 374 0055", services: "HIV Testing, STI Testing", accepting_new_patients: true, takes_uninsured: true)

Clinic.create!(name: "CVS MinuteClinic", location: "11300 N Lamar Blvd", city: "Austin", zip: "78753", hours: "M-S 9:00-4:30", phone: "(866) 389 2727", services: "HIV Testing, PrEP, STI Testing",  accepting_new_patients: true, takes_uninsured: false)

# NEW SET
Clinic.create!(name: "Medzino Health Incorporated", location: "2217 Park Bend Dr", city: "Austin", zip: "78758", hours: "M-F 8:30-5:00", phone: "(888) 772 2270", services: "PrEP", accepting_new_patients: true, takes_uninsured: false)

